"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, LogOut, UserPlus, Users, Trash2, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  username: string
  password: string
  email: string
  created_at: string
  is_active: boolean
}

export default function AdminPage() {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({})
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: ""
  })

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    try {
      const response = await fetch("/api/admin/users")
      const data = await response.json()
      setUsers(data.users || [])
    } catch (error) {
      console.error("Error loading users:", error)
    }
  }

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      })

      if (response.ok) {
        setNewUser({ username: "", password: "", email: "" })
        loadUsers()
        alert("Usuario creado exitosamente")
      } else {
        alert("Error al crear usuario")
      }
    } catch (error) {
      alert("Error al crear usuario")
    }
  }

  const handleDeleteUser = async (userId: string) => {
    if (!confirm("¿Estás seguro de eliminar este usuario?")) return

    try {
      const response = await fetch(`/api/admin/users?id=${userId}`, {
        method: "DELETE"
      })

      if (response.ok) {
        loadUsers()
        alert("Usuario eliminado")
      }
    } catch (error) {
      alert("Error al eliminar usuario")
    }
  }

  const handleLogout = () => {
    document.cookie = "admin-session=; path=/; max-age=0"
    router.push("/admin/login")
  }

  const togglePasswordVisibility = (userId: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Panel de Administración</h1>
                <p className="text-sm text-gray-400">Gestión de Usuarios</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-slate-700 text-gray-300 hover:bg-slate-800"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Create User Form */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 sticky top-24">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-purple-500" />
                  Crear Nuevo Usuario
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Genera credenciales para nuevos clientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateUser} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-300">Usuario</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="usuario123"
                      value={newUser.username}
                      onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                      className="bg-slate-900 border-slate-700 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">Contraseña</Label>
                    <Input
                      id="password"
                      type="text"
                      placeholder="contraseña123"
                      value={newUser.password}
                      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                      className="bg-slate-900 border-slate-700 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email (opcional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="cliente@email.com"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      className="bg-slate-900 border-slate-700 text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Crear Usuario
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Users List */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      Usuarios Registrados
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Total: {users.length} usuarios
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    onClick={loadUsers}
                    className="border-slate-700 text-gray-300"
                  >
                    Actualizar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                      <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No hay usuarios registrados aún</p>
                      <p className="text-sm mt-2">Crea el primer usuario usando el formulario</p>
                    </div>
                  ) : (
                    users.map((user) => (
                      <Card key={user.id} className="bg-slate-900/50 border-slate-700">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 space-y-3">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="text-white font-semibold">{user.username}</h3>
                                  <Badge className={user.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}>
                                    {user.is_active ? "Activo" : "Inactivo"}
                                  </Badge>
                                </div>
                                {user.email && (
                                  <p className="text-sm text-gray-400">{user.email}</p>
                                )}
                              </div>

                              <div className="bg-slate-800 p-3 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <Label className="text-gray-400 text-xs">Contraseña:</Label>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => togglePasswordVisibility(user.id)}
                                    className="h-6 px-2"
                                  >
                                    {showPasswords[user.id] ? (
                                      <EyeOff className="w-3 h-3" />
                                    ) : (
                                      <Eye className="w-3 h-3" />
                                    )}
                                  </Button>
                                </div>
                                <code className="text-purple-400 font-mono text-sm">
                                  {showPasswords[user.id] ? user.password : "••••••••"}
                                </code>
                              </div>

                              <div className="text-xs text-gray-500">
                                Creado: {new Date(user.created_at).toLocaleDateString('es-ES')}
                              </div>
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteUser(user.id)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
