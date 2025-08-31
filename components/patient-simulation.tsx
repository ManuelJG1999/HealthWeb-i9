"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Activity, FileText, AlertTriangle, Phone, Shield, QrCode } from "lucide-react"

interface PatientData {
  id: string
  name: string
  age: number
  bloodType: string
  allergies: string[]
  conditions: string[]
  medications: string[]
  emergencyContact: {
    name: string
    phone: string
    relationship: string
  }
  insurance: {
    provider: string
    policyNumber: string
  }
  lastUpdated: string
}

const mockPatientData: PatientData = {
  id: "HW-2024-001",
  name: "Juan Carlos Rodríguez",
  age: 45,
  bloodType: "A+",
  allergies: ["Penicilina", "Maní"],
  conditions: ["Hipertensión", "Diabetes Tipo 2"],
  medications: ["Metformina 500mg", "Lisinopril 10mg", "Aspirina 81mg"],
  emergencyContact: {
    name: "María Elena Rodríguez",
    phone: "+1 (555) 123-4567",
    relationship: "Esposa",
  },
  insurance: {
    provider: "BlueCross BlueShield",
    policyNumber: "BC123456789",
  },
  lastUpdated: "2024-01-15T10:30:00Z",
}

export function PatientSimulation() {
  const [isScanning, setIsScanning] = useState(false)
  const [patientData, setPatientData] = useState<PatientData | null>(null)
  const [scanProgress, setScanProgress] = useState(0)

  const simulateQRScan = () => {
    setIsScanning(true)
    setScanProgress(0)
    setPatientData(null)

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsScanning(false)
          setPatientData(mockPatientData)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="space-y-6">
      {/* QR Scanner Simulation */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <QrCode className="h-5 w-5 text-blue-400" />
            Simulador de Escaneo QR
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="relative w-48 h-48 mx-auto bg-slate-700/30 rounded-lg flex items-center justify-center">
            {isScanning ? (
              <div className="space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
                <div className="w-32 bg-slate-600 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full transition-all duration-200"
                    style={{ width: `${scanProgress}%` }}
                  ></div>
                </div>
                <p className="text-slate-300 text-sm">Escaneando QR... {scanProgress}%</p>
              </div>
            ) : (
              <div className="space-y-4">
                <QrCode className="h-16 w-16 text-slate-500 mx-auto" />
                <p className="text-slate-400 text-sm">Haz clic para simular escaneo</p>
              </div>
            )}
          </div>
          <Button onClick={simulateQRScan} disabled={isScanning} className="bg-blue-600 hover:bg-blue-700">
            {isScanning ? "Escaneando..." : "Simular Escaneo QR"}
          </Button>
        </CardContent>
      </Card>

      {/* Patient Data Display */}
      {patientData && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
          {/* Patient Header */}
          <Card className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{patientData.name}</h2>
                    <p className="text-slate-300">
                      ID: {patientData.id} • Edad: {patientData.age} años
                    </p>
                    <p className="text-slate-400 text-sm">
                      Última actualización: {new Date(patientData.lastUpdated).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Shield className="h-3 w-3 mr-1" />
                  Verificado
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Medical Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blood Type */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <Activity className="h-5 w-5 text-red-400" />
                  Tipo de Sangre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">{patientData.bloodType}</div>
                  <p className="text-slate-300 text-sm">Rh Positivo</p>
                </div>
              </CardContent>
            </Card>

            {/* Allergies */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  Alergias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {patientData.allergies.map((allergy, index) => (
                    <Badge key={index} variant="destructive" className="bg-red-500/20 text-red-300 border-red-500/30">
                      {allergy}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-green-400" />
                  Contacto de Emergencia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-white font-medium">{patientData.emergencyContact.name}</p>
                  <p className="text-slate-300 text-sm">{patientData.emergencyContact.relationship}</p>
                  <p className="text-blue-400 text-sm">{patientData.emergencyContact.phone}</p>
                </div>
              </CardContent>
            </Card>

            {/* Medical Conditions */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5 text-blue-400" />
                  Condiciones Médicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {patientData.conditions.map((condition, index) => (
                    <Badge key={index} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {condition}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Medications */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <Activity className="h-5 w-5 text-purple-400" />
                  Medicamentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {patientData.medications.map((medication, index) => (
                    <div key={index} className="text-slate-300 text-sm bg-slate-700/30 p-2 rounded">
                      {medication}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-cyan-400" />
                  Seguro Médico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-white font-medium">{patientData.insurance.provider}</p>
                  <p className="text-slate-300 text-sm">Póliza: {patientData.insurance.policyNumber}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
