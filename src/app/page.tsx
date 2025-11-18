"use client"

import { Check, Dumbbell, Trophy, Users, Zap, MessageCircle, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  const whatsappNumber = "573104119628"
  const whatsappMessage = "Hola! Acabo de realizar el pago y quiero solicitar mi usuario y contraseña para acceder a la plataforma de entrenamiento."

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full mb-6 border border-orange-500/20">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Acceso Inmediato</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforma Tu Cuerpo
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Con Ejercicios Profesionales
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Accede a una biblioteca completa de ejercicios, rutinas personalizadas y guías de entrenamiento. Todo lo que necesitas para alcanzar tus objetivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#pricing">
                  Obtener Acceso Ahora
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-orange-500/50 text-white hover:bg-orange-500/10 px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <Link href="/login">
                  Ya Tengo Cuenta
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-12 text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span>+500 Usuarios</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-orange-500" />
                <span>Resultados Garantizados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Qué Incluye Tu Acceso?
            </h2>
            <p className="text-xl text-gray-400">
              Todo lo que necesitas en un solo lugar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Dumbbell,
                title: "Biblioteca de Ejercicios",
                description: "Más de 200 ejercicios con videos demostrativos y explicaciones detalladas"
              },
              {
                icon: Trophy,
                title: "Rutinas Completas",
                description: "Programas de entrenamiento estructurados para todos los niveles"
              },
              {
                icon: Zap,
                title: "Actualizaciones Constantes",
                description: "Nuevo contenido agregado regularmente sin costo adicional"
              },
              {
                icon: Users,
                title: "Soporte Directo",
                description: "Contacto directo por WhatsApp para resolver tus dudas"
              },
              {
                icon: Check,
                title: "Acceso de Por Vida",
                description: "Pago único, acceso ilimitado para siempre"
              },
              {
                icon: MessageCircle,
                title: "Guías Descargables",
                description: "PDFs y recursos para llevar tu entrenamiento contigo"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Inversión en Tu Salud
            </h2>
            <p className="text-xl text-gray-400">
              Acceso completo por un pago único
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-500/50 shadow-2xl shadow-orange-500/20">
            <CardHeader className="text-center pb-8">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                OFERTA ESPECIAL
              </div>
              <CardTitle className="text-4xl md:text-5xl font-bold text-white mb-2">
                $50.000 COP
              </CardTitle>
              <CardDescription className="text-xl text-gray-300">
                Pago único - Acceso de por vida
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  "Acceso completo a todos los ejercicios",
                  "Rutinas de entrenamiento estructuradas",
                  "Videos demostrativos en HD",
                  "Guías descargables en PDF",
                  "Actualizaciones gratuitas de por vida",
                  "Soporte directo por WhatsApp",
                  "Sin mensualidades ni cargos ocultos"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-orange-500/20 rounded-full p-1">
                      <Check className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-orange-500" />
                  Métodos de Pago
                </h3>
                
                <div className="space-y-4 bg-slate-800/50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 rounded-lg p-3">
                      <CreditCard className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white mb-1">Bancolombia</p>
                      <p className="text-gray-400 text-sm mb-2">Cuenta de Ahorros</p>
                      <div className="bg-slate-900 px-4 py-2 rounded-lg">
                        <code className="text-orange-400 font-mono">82400001561</code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 rounded-lg p-3">
                      <MessageCircle className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white mb-1">Nequi</p>
                      <p className="text-gray-400 text-sm mb-2">Transferencia Instantánea</p>
                      <div className="bg-slate-900 px-4 py-2 rounded-lg">
                        <code className="text-orange-400 font-mono">3104119628</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-6 text-lg rounded-xl shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Solicitar Usuario y Contraseña
                  </a>
                </Button>
                <p className="text-center text-sm text-gray-400 mt-4">
                  Realiza tu pago y contáctanos por WhatsApp para recibir tu acceso inmediato
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo Para Empezar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a cientos de personas que ya están transformando su cuerpo con nuestro sistema
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-6 text-lg rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Plataforma de Entrenamiento. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">WhatsApp: 310 411 9628</p>
        </div>
      </footer>
    </div>
  )
}
