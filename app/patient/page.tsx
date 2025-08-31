"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, QrCode, Shield, AlertTriangle, Heart, Pill } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { FileUpload } from "@/components/file-upload"
import { WalletConnect } from "@/components/wallet-connect"
import { RealMap } from "@/components/real-map"

export default function PatientPage() {
  const [qrGenerated, setQrGenerated] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false)

  const handleGenerateQR = () => {
    setQrGenerated(true)
    setDataLoaded(true)
  }

  const mockPatientData = {
    name: "Sarah Johnson",
    age: 34,
    bloodType: "A+",
    photo: "/professional-woman-patient-photo.png",
    allergies: [
      { name: "Penicillin", severity: "Severe", reaction: "Anaphylaxis" },
      { name: "Peanuts", severity: "Moderate", reaction: "Hives, swelling" },
    ],
    conditions: [{ name: "Epilepsy", status: "Well controlled", medication: "Levetiracetam 500mg" }],
    vaccines: [
      { name: "COVID-19 (Pfizer)", date: "Dec 2023", status: "Up to date" },
      { name: "Tetanus", date: "Jan 2022", status: "Valid" },
      { name: "Influenza", date: "Oct 2023", status: "Current" },
    ],
    medications: [
      { name: "Levetiracetam", dosage: "500mg", frequency: "Twice daily" },
      { name: "Vitamin D3", dosage: "1000 IU", frequency: "Daily" },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
              <WalletConnect />
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 px-4 bg-slate-800/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">
              Your Medical Records, Secure and Yours with{" "}
              <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                HealthWeb
              </span>
            </h1>
            <p className="text-xl text-slate-300 text-balance mb-8">
              Manage your medical information securely on the blockchain. Upload files, update records, and generate QR
              codes for healthcare providers.
            </p>
            <Button
              size="lg"
              className="gap-2 text-lg px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
              onClick={handleGenerateQR}
            >
              <QrCode className="h-5 w-5" />
              {dataLoaded ? "Update QR Code" : "Generate QR Code"}
            </Button>
          </div>
        </div>
      </section>

      {dataLoaded && (
        <section className="py-8 px-4 relative z-10">
          <div className="container mx-auto">
            <Card className="max-w-2xl mx-auto bg-slate-800/50 border-slate-700/50 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-white text-center">Patient Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-slate-700">
                    <Image
                      src={mockPatientData.photo || "/placeholder.svg"}
                      alt="Patient Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{mockPatientData.name}</h3>
                    <p className="text-slate-300 mb-1">Age: {mockPatientData.age} years</p>
                    <p className="text-slate-300">Blood Type: {mockPatientData.bloodType}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-white">Your Medical Information</h2>
            <p className="text-slate-300">
              {dataLoaded
                ? "Your medical records have been loaded"
                : "Generate QR code to load your medical information"}
            </p>
          </div>

          {dataLoaded ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu h-64 flex flex-col">
                <CardHeader className="pb-3 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-5 w-5 text-red-400" />
                    <CardTitle className="text-lg text-white">Blood Type</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-red-400">{mockPatientData.bloodType}</div>
                </CardHeader>
                <CardContent className="flex-grow flex items-end">
                  <p className="text-sm text-slate-300">Rh positive</p>
                </CardContent>
              </Card>

              <Card className="bg-red-900/30 border border-red-500/60 backdrop-blur-sm rounded-lg hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 transform-gpu h-64 flex flex-col">
                <CardHeader className="pb-3 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-300" />
                    <CardTitle className="text-lg text-red-100">Allergies</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-red-300">{mockPatientData.allergies.length}</div>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto">
                  <div className="space-y-2">
                    {mockPatientData.allergies.map((allergy, index) => (
                      <div key={index} className="bg-red-800/40 p-2 rounded border border-red-600/50">
                        <p className="text-sm font-medium text-red-100">{allergy.name}</p>
                        <p className="text-xs text-red-200">
                          {allergy.severity} - {allergy.reaction}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu h-64 flex flex-col">
                <CardHeader className="pb-3 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <CardTitle className="text-lg text-white">Vaccines</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-green-400">Up to Date</div>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto">
                  <div className="space-y-1">
                    {mockPatientData.vaccines.map((vaccine, index) => (
                      <p key={index} className="text-xs text-slate-300">
                        {vaccine.name} ({vaccine.date})
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu h-64 flex flex-col">
                <CardHeader className="pb-3 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Pill className="h-5 w-5 text-blue-400" />
                    <CardTitle className="text-lg text-white">Medications</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-blue-400">{mockPatientData.medications.length}</div>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto">
                  <div className="space-y-1">
                    {mockPatientData.medications.map((med, index) => (
                      <div key={index} className="bg-blue-900/20 p-2 rounded border border-blue-700/30">
                        <p className="text-sm font-medium text-blue-300">{med.name}</p>
                        <p className="text-xs text-blue-400">
                          {med.dosage} - {med.frequency}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[1, 2, 3, 4].map((i) => (
                <Card
                  key={i}
                  className="bg-slate-800/30 border border-slate-700/30 backdrop-blur-sm rounded-lg opacity-50 h-64"
                >
                  <CardHeader className="pb-3">
                    <div className="h-6 bg-slate-700/50 rounded animate-pulse mb-2"></div>
                    <div className="h-8 bg-slate-700/50 rounded animate-pulse"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-slate-700/50 rounded animate-pulse"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-800/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Upload Medical Files</h2>
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Upload className="h-5 w-5 text-blue-400" />
                    Medical Documents
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Upload PDFs, images, lab results, and other medical documents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FileUpload />
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Update Medical Information</h2>
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Medical Details</CardTitle>
                  <CardDescription className="text-slate-300">Manually update your medical information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bloodType">Blood Type</Label>
                      <Input id="bloodType" placeholder="A+" />
                    </div>
                    <div>
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input id="weight" placeholder="70" type="number" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="allergies">Allergies</Label>
                    <Textarea id="allergies" placeholder="List any known allergies..." className="min-h-[80px]" />
                  </div>
                  <div>
                    <Label htmlFor="conditions">Medical Conditions</Label>
                    <Textarea id="conditions" placeholder="List any medical conditions..." className="min-h-[80px]" />
                  </div>
                  <div>
                    <Label htmlFor="medications">Current Medications</Label>
                    <Textarea id="medications" placeholder="List current medications..." className="min-h-[80px]" />
                  </div>
                  <Button
                    className="w-full gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
                    onClick={handleGenerateQR}
                  >
                    <Shield className="h-4 w-4" />
                    Update Records
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {qrGenerated && (
            <div className="mt-12 text-center">
              <Card className="max-w-md mx-auto bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-white">
                    <QrCode className="h-5 w-5 text-blue-400" />
                    Your Medical QR Code
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Show this QR code to healthcare providers for instant access to your records
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-48 h-48 mx-auto bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <img src="/medical-qr-code.png" alt="Medical QR Code" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-sm text-slate-300 mt-4">
                    QR code generated successfully. This code contains encrypted access to your medical records.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-800/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-white">Nearby Medical Centers</h2>
            <p className="text-slate-300">Find hospitals and medical centers near your current location</p>
          </div>
          <RealMap />
        </div>
      </section>
    </div>
  )
}
