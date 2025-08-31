"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Phone, Clock, Star } from "lucide-react"

interface MedicalCenter {
  id: string
  name: string
  address: string
  distance: string
  rating: number
  type: "hospital" | "clinic" | "emergency"
  phone: string
  hours: string
  specialties: string[]
}

const mockMedicalCenters: MedicalCenter[] = [
  {
    id: "1",
    name: "Hospital General San José",
    address: "Av. Principal 123, Centro",
    distance: "0.8 km",
    rating: 4.5,
    type: "hospital",
    phone: "+1 (555) 123-4567",
    hours: "24 horas",
    specialties: ["Emergencias", "Cardiología", "Neurología"],
  },
  {
    id: "2",
    name: "Clínica Santa María",
    address: "Calle 45 #67-89, Norte",
    distance: "1.2 km",
    rating: 4.3,
    type: "clinic",
    phone: "+1 (555) 234-5678",
    hours: "6:00 AM - 10:00 PM",
    specialties: ["Medicina General", "Pediatría", "Ginecología"],
  },
  {
    id: "3",
    name: "Centro de Emergencias Rápidas",
    address: "Carrera 12 #34-56, Sur",
    distance: "1.5 km",
    rating: 4.7,
    type: "emergency",
    phone: "+1 (555) 345-6789",
    hours: "24 horas",
    specialties: ["Emergencias", "Trauma", "Cuidados Intensivos"],
  },
  {
    id: "4",
    name: "Hospital Universitario",
    address: "Zona Universitaria, Oeste",
    distance: "2.1 km",
    rating: 4.4,
    type: "hospital",
    phone: "+1 (555) 456-7890",
    hours: "24 horas",
    specialties: ["Todas las especialidades", "Investigación", "Docencia"],
  },
]

export function RealMap() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [selectedCenter, setSelectedCenter] = useState<MedicalCenter | null>(null)

  useEffect(() => {
    // Simulate getting user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          // Fallback to default location (Mexico City)
          setUserLocation({
            lat: 19.4326,
            lng: -99.1332,
          })
        },
      )
    }
  }, [])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "hospital":
        return "🏥"
      case "clinic":
        return "🏥"
      case "emergency":
        return "🚑"
      default:
        return "🏥"
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "hospital":
        return <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Hospital</Badge>
      case "clinic":
        return <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Clínica</Badge>
      case "emergency":
        return <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Emergencias</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-400" />
            Centros Médicos Cercanos
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Simulated Map */}
          <div className="bg-slate-700/30 rounded-lg h-64 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20">
              {/* Map Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-slate-600/30"></div>
                  ))}
                </div>
              </div>

              {/* User Location */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping"></div>
                </div>
                <p className="text-xs text-white mt-1 text-center">Tú</p>
              </div>

              {/* Medical Centers */}
              <div
                className="absolute top-1/4 left-1/4 cursor-pointer"
                onClick={() => setSelectedCenter(mockMedicalCenters[0])}
              >
                <div className="text-2xl hover:scale-110 transition-transform">🏥</div>
              </div>
              <div
                className="absolute top-3/4 right-1/3 cursor-pointer"
                onClick={() => setSelectedCenter(mockMedicalCenters[1])}
              >
                <div className="text-2xl hover:scale-110 transition-transform">🏥</div>
              </div>
              <div
                className="absolute bottom-1/4 left-2/3 cursor-pointer"
                onClick={() => setSelectedCenter(mockMedicalCenters[2])}
              >
                <div className="text-2xl hover:scale-110 transition-transform">🚑</div>
              </div>
              <div
                className="absolute top-1/3 right-1/4 cursor-pointer"
                onClick={() => setSelectedCenter(mockMedicalCenters[3])}
              >
                <div className="text-2xl hover:scale-110 transition-transform">🏥</div>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-sm mt-2 text-center">
            Haz clic en los iconos del mapa para ver detalles de cada centro médico
          </p>
        </CardContent>
      </Card>

      {/* Medical Centers List */}
      <div className="grid md:grid-cols-2 gap-4">
        {mockMedicalCenters.map((center) => (
          <Card
            key={center.id}
            className={`bg-slate-800/50 border-slate-700/50 backdrop-blur-sm cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 ${
              selectedCenter?.id === center.id ? "ring-2 ring-blue-500/50" : ""
            }`}
            onClick={() => setSelectedCenter(center)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getTypeIcon(center.type)}</span>
                  <div>
                    <h3 className="font-semibold text-white">{center.name}</h3>
                    <p className="text-sm text-slate-300">{center.address}</p>
                  </div>
                </div>
                {getTypeBadge(center.type)}
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  <Navigation className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-slate-300">{center.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-slate-300">{center.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-slate-300">{center.hours}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {center.specialties.slice(0, 2).map((specialty, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
                    {specialty}
                  </Badge>
                ))}
                {center.specialties.length > 2 && (
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    +{center.specialties.length - 2} más
                  </Badge>
                )}
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Navigation className="h-3 w-3 mr-1" />
                  Direcciones
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Llamar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selected Center Details */}
      {selectedCenter && (
        <Card className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <span className="text-2xl">{getTypeIcon(selectedCenter.type)}</span>
              {selectedCenter.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-white mb-2">Información de Contacto</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-300">📍 {selectedCenter.address}</p>
                  <p className="text-slate-300">📞 {selectedCenter.phone}</p>
                  <p className="text-slate-300">🕒 {selectedCenter.hours}</p>
                  <p className="text-slate-300">⭐ {selectedCenter.rating}/5.0</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Especialidades</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCenter.specialties.map((specialty, index) => (
                    <Badge key={index} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
