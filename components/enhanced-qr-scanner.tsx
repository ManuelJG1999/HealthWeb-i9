"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Square, Zap } from "lucide-react"

export function EnhancedQRScanner() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const startScanning = async () => {
    setIsScanning(true)
    setScanResult(null)

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }

      // Simulate QR detection after 3 seconds
      setTimeout(() => {
        setScanResult("QR-PATIENT-12345")
        setIsScanning(false)
        if (videoRef.current?.srcObject) {
          const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
          tracks.forEach((track) => track.stop())
        }
      }, 3000)
    } catch (error) {
      console.error("Error accessing camera:", error)
      setIsScanning(false)
    }
  }

  const stopScanning = () => {
    setIsScanning(false)
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach((track) => track.stop())
    }
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Camera className="h-5 w-5 text-blue-400" />
          Escáner de Código QR Avanzado
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative aspect-square bg-slate-900/50 rounded-lg overflow-hidden">
          {!isScanning && !scanResult && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <Camera className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Presiona para iniciar el escáner</p>
              </div>
            </div>
          )}

          {isScanning && (
            <>
              <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />

              {/* Scanning Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Corner brackets */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-blue-400 animate-pulse"></div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-blue-400 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-blue-400 animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-blue-400 animate-pulse"></div>

                  {/* Scanning line */}
                  <div className="w-48 h-48 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-bounce"></div>
                    <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-bounce delay-300"></div>
                    <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-bounce delay-700"></div>
                  </div>

                  {/* Center target */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Square className="h-16 w-16 text-blue-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Scanning effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
            </>
          )}

          {scanResult && (
            <div className="absolute inset-0 flex items-center justify-center bg-green-500/20">
              <div className="text-center text-white">
                <Zap className="h-12 w-12 mx-auto mb-2 text-green-400" />
                <p className="font-semibold">¡QR Detectado!</p>
                <p className="text-sm text-green-300">{scanResult}</p>
              </div>
            </div>
          )}

          <canvas ref={canvasRef} className="hidden" />
        </div>

        <div className="flex gap-2">
          {!isScanning && !scanResult && (
            <Button
              onClick={startScanning}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Camera className="h-4 w-4 mr-2" />
              Iniciar Escáner
            </Button>
          )}

          {isScanning && (
            <Button
              onClick={stopScanning}
              variant="outline"
              className="flex-1 border-red-500 text-red-400 hover:bg-red-500/10 bg-transparent"
            >
              Detener Escáner
            </Button>
          )}

          {scanResult && (
            <Button
              onClick={() => {
                setScanResult(null)
                startScanning()
              }}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
            >
              Escanear Otro
            </Button>
          )}
        </div>

        {isScanning && (
          <div className="text-center">
            <p className="text-sm text-slate-400 animate-pulse">Buscando código QR...</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
