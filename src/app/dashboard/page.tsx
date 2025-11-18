"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, LogOut, Play, Download, Clock, Target, Zap, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("todos")

  const handleLogout = () => {
    document.cookie = "user-session=; path=/; max-age=0"
    router.push("/login")
  }

  const exercises = [
    {
      id: 1,
      name: "Press de Banca",
      category: "pecho",
      difficulty: "intermedio",
      duration: "3-4 series",
      description: "Ejercicio fundamental para desarrollar el pecho, hombros y tríceps.",
      videoUrl: "#",
      muscles: ["Pecho", "Tríceps", "Hombros"]
    },
    {
      id: 2,
      name: "Sentadilla con Barra",
      category: "piernas",
      difficulty: "avanzado",
      duration: "4-5 series",
      description: "El rey de los ejercicios para piernas. Desarrolla fuerza y masa muscular.",
      videoUrl: "#",
      muscles: ["Cuádriceps", "Glúteos", "Core"]
    },
    {
      id: 3,
      name: "Peso Muerto",
      category: "espalda",
      difficulty: "avanzado",
      duration: "3-4 series",
      description: "Ejercicio compuesto que trabaja toda la cadena posterior.",
      videoUrl: "#",
      muscles: ["Espalda Baja", "Glúteos", "Isquiotibiales"]
    },
    {
      id: 4,
      name: "Dominadas",
      category: "espalda",
      difficulty: "intermedio",
      duration: "3-4 series",
      description: "Excelente para desarrollar la espalda y los bíceps.",
      videoUrl: "#",
      muscles: ["Dorsales", "Bíceps", "Core"]
    },
    {
      id: 5,
      name: "Press Militar",
      category: "hombros",
      difficulty: "intermedio",
      duration: "3-4 series",
      description: "Desarrolla fuerza y masa en los hombros.",
      videoUrl: "#",
      muscles: ["Hombros", "Tríceps", "Core"]
    },
    {
      id: 6,
      name: "Curl de Bíceps",
      category: "brazos",
      difficulty: "principiante",
      duration: "3 series",
      description: "Ejercicio de aislamiento para bíceps.",
      videoUrl: "#",
      muscles: ["Bíceps"]
    },
    {
      id: 7,
      name: "Extensiones de Tríceps",
      category: "brazos",
      difficulty: "principiante",
      duration: "3 series",
      description: "Aislamiento efectivo para tríceps.",
      videoUrl: "#",
      muscles: ["Tríceps"]
    },
    {
      id: 8,
      name: "Plancha Abdominal",
      category: "core",
      difficulty: "principiante",
      duration: "3-4 series",
      description: "Fortalece el core y mejora la estabilidad.",
      videoUrl: "#",
      muscles: ["Abdominales", "Core"]
    },
    {
      id: 9,
      name: "Zancadas",
      category: "piernas",
      difficulty: "intermedio",
      duration: "3 series",
      description: "Excelente para piernas y glúteos.",
      videoUrl: "#",
      muscles: ["Cuádriceps", "Glúteos"]
    },
    {
      id: 10,
      name: "Remo con Barra",
      category: "espalda",
      difficulty: "intermedio",
      duration: "4 series",
      description: "Desarrolla grosor en la espalda.",
      videoUrl: "#",
      muscles: ["Dorsales", "Trapecios"]
    }
  ]

  const routines = [
    {
      id: 1,
      name: "Rutina Full Body - Principiante",
      description: "Rutina de cuerpo completo 3 veces por semana",
      duration: "45-60 min",
      level: "Principiante",
      exercises: ["Sentadilla", "Press de Banca", "Remo", "Press Militar", "Plancha"]
    },
    {
      id: 2,
      name: "Rutina Push/Pull/Legs",
      description: "División de 6 días para intermedios/avanzados",
      duration: "60-75 min",
      level: "Intermedio",
      exercises: ["Día Push", "Día Pull", "Día Legs"]
    },
    {
      id: 3,
      name: "Rutina de Fuerza 5x5",
      description: "Programa enfocado en ganar fuerza",
      duration: "45-60 min",
      level: "Intermedio",
      exercises: ["Sentadilla 5x5", "Press Banca 5x5", "Peso Muerto 5x5"]
    },
    {
      id: 4,
      name: "Rutina de Hipertrofia",
      description: "Enfocada en ganancia de masa muscular",
      duration: "60-90 min",
      level: "Avanzado",
      exercises: ["Alto volumen", "8-12 repeticiones", "Descansos cortos"]
    }
  ]

  const filteredExercises = activeCategory === "todos" 
    ? exercises 
    : exercises.filter(ex => ex.category === activeCategory)

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "principiante": return "bg-green-500/20 text-green-400 border-green-500/50"
      case "intermedio": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
      case "avanzado": return "bg-red-500/20 text-red-400 border-red-500/50"
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/50"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Mi Entrenamiento</h1>
                <p className="text-sm text-gray-400">Panel de Usuario</p>
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
        <Tabs defaultValue="exercises" className="space-y-8">
          <TabsList className="bg-slate-800 border border-slate-700">
            <TabsTrigger value="exercises" className="data-[state=active]:bg-orange-500">
              <Dumbbell className="w-4 h-4 mr-2" />
              Ejercicios
            </TabsTrigger>
            <TabsTrigger value="routines" className="data-[state=active]:bg-orange-500">
              <Target className="w-4 h-4 mr-2" />
              Rutinas
            </TabsTrigger>
            <TabsTrigger value="guides" className="data-[state=active]:bg-orange-500">
              <Download className="w-4 h-4 mr-2" />
              Guías
            </TabsTrigger>
          </TabsList>

          {/* Exercises Tab */}
          <TabsContent value="exercises" className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeCategory === "todos" ? "default" : "outline"}
                onClick={() => setActiveCategory("todos")}
                className={activeCategory === "todos" ? "bg-orange-500 hover:bg-orange-600" : "border-slate-700"}
              >
                Todos
              </Button>
              {["pecho", "espalda", "piernas", "hombros", "brazos", "core"].map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className={activeCategory === cat ? "bg-orange-500 hover:bg-orange-600" : "border-slate-700"}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExercises.map((exercise) => (
                <Card key={exercise.id} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-white text-lg">{exercise.name}</CardTitle>
                      <Badge className={getDifficultyColor(exercise.difficulty)}>
                        {exercise.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400">
                      {exercise.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{exercise.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exercise.muscles.map((muscle, idx) => (
                        <Badge key={idx} variant="outline" className="border-orange-500/50 text-orange-400">
                          {muscle}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                      <Play className="w-4 h-4 mr-2" />
                      Ver Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Routines Tab */}
          <TabsContent value="routines" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {routines.map((routine) => (
                <Card key={routine.id} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-orange-500" />
                      <CardTitle className="text-white">{routine.name}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-400">
                      {routine.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{routine.duration}</span>
                      </div>
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">
                        {routine.level}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {routine.exercises.map((ex, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <Zap className="w-4 h-4 text-orange-500" />
                          <span>{ex}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar Rutina
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Guía de Nutrición", description: "Plan alimenticio completo", size: "2.5 MB" },
                { title: "Técnica de Ejercicios", description: "Ejecución correcta paso a paso", size: "3.1 MB" },
                { title: "Programa de Calentamiento", description: "Rutinas de movilidad", size: "1.8 MB" },
                { title: "Guía de Suplementación", description: "Qué tomar y cuándo", size: "1.2 MB" },
                { title: "Prevención de Lesiones", description: "Cuidados y recuperación", size: "2.0 MB" },
                { title: "Planificación Semanal", description: "Organiza tu entrenamiento", size: "1.5 MB" }
              ].map((guide, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{guide.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">PDF - {guide.size}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
