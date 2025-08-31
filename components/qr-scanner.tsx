"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, X, Scan } from "lucide-react"

interface QRScannerProps {
  isActive: boolean
  onScanResult: (data: any) => void
  onClose: () => void
}

export function QRScanner({ isActive, onScanResult, onClose }: QRScannerProps) {
  const [isScanning, setIsScanning] = useState(false)

  const handleScan = () => {
    setIsScanning(true)
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false)
      onScanResult({
        patientId: "P123456",
        bloodType: "A+",
        allergies: ["Penicillin", "Peanuts"],
        conditions: ["Epilepsy"],
        vaccines: ["Pfizer COVID-19", "Tetanus", "Influenza"],
      })
    }, 2000)
  }

  if (!isActive) {
    return (
      <Card className="w-80 h-80 border-2 border-dashed border-muted-foreground/25">
        <CardContent className="flex flex-col items-center justify-center h-full gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            {/* Animated scanning lines */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">QR Scanner Ready</h3>
            <p className="text-sm text-muted-foreground">Click "Scan QR Code" to activate</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-80 h-80 border-2 border-primary">
      <CardContent className="relative p-0 h-full">
        {/* Scanner overlay */}
        <div className="absolute inset-4 border-2 border-primary rounded-lg">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-primary rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-primary rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary rounded-br-lg" />

          {/* Scanning line animation */}
          {isScanning && (
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div
                className="w-full h-0.5 bg-primary animate-pulse"
                style={{
                  animation: "scan 2s linear infinite",
                  transformOrigin: "center",
                }}
              />
            </div>
          )}
        </div>

        {/* Camera view simulation */}
        <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/80 rounded-lg flex items-center justify-center">
          <div className="text-center">
            {isScanning ? (
              <div className="space-y-4">
                <Scan className="h-12 w-12 text-primary mx-auto animate-pulse" />
                <p className="text-sm font-medium">Scanning QR Code...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Camera className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-sm text-muted-foreground">Position QR code in frame</p>
              </div>
            )}
          </div>
        </div>

        {/* Close button */}
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>

        {/* Scan button */}
        {!isScanning && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <Button onClick={handleScan} size="sm" className="gap-2">
              <Scan className="h-4 w-4" />
              Scan
            </Button>
          </div>
        )}
      </CardContent>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300px); }
        }
      `}</style>
    </Card>
  )
}
