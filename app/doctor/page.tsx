"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { QrCode, User, FileText, Activity } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { MedicalRecordCard } from "@/components/medical-record-card"
import { DocumentReader } from "@/components/document-reader"
import { PatientSimulation } from "@/components/patient-simulation"

export default function DoctorPage() {
  const [isScanning, setIsScanning] = useState(false)
  const [scannedData, setScannedData] = useState<any>(null)

  const handleScanResult = (data: any) => {
    setScannedData(data)
    setIsScanning(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <header className="border-b border-slate-200/20 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/images/healthweb-logo.png"
                  alt="HealthWeb Logo"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-slate-800/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">
                Medical Professional Portal{" "}
                <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  HealthWeb
                </span>
              </h1>
              <p className="text-xl text-slate-300 text-balance mb-8">
                Access and manage patient medical records securely. Scan QR codes to instantly access encrypted medical
                information.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  {isScanning ? (
                    <div className="relative w-full h-full bg-black/90 flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        {/* Main scanning frame */}
                        <div className="absolute inset-0 border-2 border-blue-400 rounded-lg">
                          {/* Animated scanning lines */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                          <div
                            className="absolute left-0 right-0 h-0.5 bg-blue-400 shadow-lg shadow-blue-400/50"
                            style={{
                              animation: "scan-line 2s linear infinite",
                              top: "0%",
                            }}
                          ></div>

                          {/* Corner brackets with glow */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-l-3 border-t-3 border-blue-400 shadow-lg shadow-blue-400/50"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-r-3 border-t-3 border-blue-400 shadow-lg shadow-blue-400/50"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-l-3 border-b-3 border-blue-400 shadow-lg shadow-blue-400/50"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-r-3 border-b-3 border-blue-400 shadow-lg shadow-blue-400/50"></div>

                          {/* Scanning grid overlay */}
                          <div className="absolute inset-4 opacity-20">
                            <div className="grid grid-cols-12 grid-rows-12 h-full gap-px">
                              {Array.from({ length: 144 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="bg-blue-400/30 animate-pulse"
                                  style={{
                                    animationDelay: `${(i * 15) % 2000}ms`,
                                    animationDuration: "1.5s",
                                  }}
                                ></div>
                              ))}
                            </div>
                          </div>

                          {/* Center targeting reticle */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                              <div className="w-12 h-12 border-2 border-blue-400 rounded-full animate-ping opacity-75"></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-blue-400 rounded-full"></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>

                          {/* Scanning progress indicators */}
                          <div className="absolute top-4 left-4 flex space-x-1">
                            {[0, 1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                                style={{ animationDelay: `${i * 200}ms` }}
                              ></div>
                            ))}
                          </div>
                        </div>

                        {/* Scanning status */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                          <p className="text-blue-300 text-sm animate-pulse font-medium">Scanning QR Code...</p>
                        </div>
                      </div>

                      {/* Simulate successful scan after 3 seconds */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div
                          className="w-full h-full bg-green-400/20 opacity-0 animate-pulse"
                          style={{
                            animation: "scan-success 3s ease-in-out infinite",
                          }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                      <QrCode className="h-16 w-16 text-blue-400 mb-4" />
                      <p className="text-white mb-2">Ready to Scan QR Code</p>
                      <p className="text-slate-400 text-sm mb-6">Click to start scanning patient medical records</p>
                      <Button
                        onClick={() => {
                          setIsScanning(true)
                          // Simulate scan completion after 3 seconds
                          setTimeout(() => {
                            handleScanResult({ patientId: "12345", name: "John Doe" })
                          }, 3000)
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Start QR Scanner
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Simulation Section */}
      {scannedData && (
        <section className="py-12 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-white">Patient Information</h2>
              <p className="text-slate-300">Data obtained from scanned QR code</p>
            </div>
            <PatientSimulation />
          </div>
        </section>
      )}

      {/* Medical Records Display */}
      {scannedData && (
        <section className="py-12 px-4 relative z-10">
          <div className="container mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-white">Recent Medical Records</h2>
              <p className="text-slate-300">Patient information accessed securely</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu hover:rotate-1 h-48 flex flex-col justify-between">
                <MedicalRecordCard
                  title="Blood Type"
                  value="A+"
                  icon={<Activity className="h-5 w-5 text-blue-400" />}
                  description="Rh positive"
                />
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu hover:-rotate-1 h-48 flex flex-col justify-between">
                <MedicalRecordCard
                  title="Vaccinations"
                  value="Up to Date"
                  icon={<FileText className="h-5 w-5 text-blue-400" />}
                  description="Pfizer COVID-19, Tetanus"
                  items={["Pfizer COVID-19 (2023)", "Tetanus (2022)", "Influenza (2023)"]}
                />
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu hover:rotate-1 h-48 flex flex-col justify-between">
                <MedicalRecordCard
                  title="Conditions"
                  value="1 Active"
                  icon={<User className="h-5 w-5 text-blue-400" />}
                  description="Epilepsy - Controlled"
                  items={["Epilepsy - Well controlled with medication"]}
                />
              </div>
              <div className="bg-red-900/20 border border-red-500/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu hover:-rotate-1 h-48 flex flex-col justify-between">
                <MedicalRecordCard
                  title="Allergies"
                  value="2 Known"
                  icon={<Activity className="h-5 w-5 text-red-400" />}
                  description="Penicillin, Peanuts"
                  items={["Penicillin - Severe reaction", "Peanuts - Anaphylaxis risk"]}
                  variant="destructive"
                />
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu hover:rotate-1 h-48 flex flex-col justify-between">
                <MedicalRecordCard
                  title="Emergency Contact"
                  value="Available"
                  icon={<User className="h-5 w-5 text-blue-400" />}
                  description="Maria Rodriguez - Wife"
                  items={["Phone: +1 (555) 123-4567", "Relationship: Wife"]}
                />
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu hover:-rotate-1 h-48 flex flex-col justify-between">
                <MedicalRecordCard
                  title="Insurance"
                  value="Active"
                  icon={<FileText className="h-5 w-5 text-blue-400" />}
                  description="BlueCross BlueShield"
                  items={["Policy: BC123456789", "Group: TECH001"]}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Document Reading Section */}
      <section className="py-12 px-4 bg-slate-800/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-white">Document Analysis Center</h2>
            <p className="text-slate-300">Advanced tools for processing and analyzing medical documents</p>
          </div>
          <DocumentReader />
        </div>
      </section>

      <style jsx>{`
        @keyframes scan-line {
          0% { top: 0%; opacity: 1; }
          50% { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }
        
        @keyframes scan-success {
          0%, 90% { opacity: 0; }
          95% { opacity: 0.3; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
