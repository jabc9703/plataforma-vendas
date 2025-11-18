import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Query Supabase for user
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password)
      .eq('is_active', true)
      .single()

    if (error || !users) {
      return NextResponse.json(
        { error: 'Usuario o contraseña incorrectos' },
        { status: 401 }
      )
    }

    // Check if user has expired
    if (users.expires_at && new Date(users.expires_at) < new Date()) {
      return NextResponse.json(
        { error: 'Tu acceso ha expirado. Contacta al administrador.' },
        { status: 401 }
      )
    }

    // Generate session ID
    const sessionId = Math.random().toString(36).substring(7)

    return NextResponse.json({
      success: true,
      sessionId,
      user: {
        id: users.id,
        username: users.username,
        email: users.email
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al iniciar sesión' },
      { status: 500 }
    )
  }
}
