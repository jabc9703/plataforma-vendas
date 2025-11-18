import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - List all users
export async function GET() {
  try {
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json(
        { error: 'Error al cargar usuarios' },
        { status: 500 }
      )
    }

    return NextResponse.json({ users })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al cargar usuarios' },
      { status: 500 }
    )
  }
}

// POST - Create new user
export async function POST(request: NextRequest) {
  try {
    const { username, password, email } = await request.json()

    // Check if username already exists
    const { data: existing } = await supabase
      .from('users')
      .select('username')
      .eq('username', username)
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'El usuario ya existe' },
        { status: 400 }
      )
    }

    // Create new user
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          username,
          password,
          email: email || null,
          is_active: true,
          created_at: new Date().toISOString()
        }
      ])
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Error al crear usuario' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, user: data })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear usuario' },
      { status: 500 }
    )
  }
}

// DELETE - Delete user
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'ID de usuario requerido' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)

    if (error) {
      return NextResponse.json(
        { error: 'Error al eliminar usuario' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al eliminar usuario' },
      { status: 500 }
    )
  }
}
