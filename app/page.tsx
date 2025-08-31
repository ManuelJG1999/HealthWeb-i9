import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Shield,
  Users,
  QrCode,
  ArrowRight,
  Smartphone,
  Watch,
  Activity,
  Globe,
  Plane,
  DollarSign,
} from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { ChatbotSimulator } from "@/components/chatbot-simulator"
import { TypewriterEffect } from "@/components/typewriter-effect"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Header - Light theme */}
      <header className="border-b border-slate-200/20 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/images/healthweb-logo.png"
                alt="HealthWeb Logo"
                width={140}
                height={140}
                className="rounded-lg"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-slate-700 hover:text-slate-900 transition-colors px-4 py-2 rounded-lg hover:bg-slate-100/50 font-medium"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-slate-700 hover:text-slate-900 transition-colors px-4 py-2 rounded-lg hover:bg-slate-100/50 font-medium"
              >
                How It Works
              </Link>
              <Link
                href="#about"
                className="text-slate-700 hover:text-slate-900 transition-colors px-4 py-2 rounded-lg hover:bg-slate-100/50 font-medium"
              >
                About
              </Link>
              <LanguageSelector />
            </nav>
            <div className="md:hidden">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-16 text-white">
                <TypewriterEffect
                  text="Secure Medical Records on the Blockchain"
                  speed={80}
                  className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                />
              </h1>
              <p className="text-xl text-slate-300 text-balance mb-8 max-w-2xl mt-8">
                HealthWeb provides decentralized and encrypted medical record management for healthcare professionals
                and patients. Your health data, secured by blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
                >
                  <Link href="/doctor">
                    For Healthcare Professionals
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
                >
                  <Link href="/patient">
                    For Patients
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/digital-health.png"
                alt="Digital Medical Technology"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl shadow-blue-500/20"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/20 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Healthcare by the Numbers</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real statistics that highlight the importance of secure medical record management
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center mb-2">
                  <Plane className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-3xl font-bold text-white">1.5B</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  people travel annually worldwide, needing accessible medical records
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center mb-2">
                  <Activity className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-3xl font-bold text-white">1 in 30</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  tourists get sick abroad, requiring immediate access to medical history
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-3xl font-bold text-white">$10.9B</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  global healthcare data breach costs in 2023, highlighting security needs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-3xl font-bold text-white">87%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  faster emergency response with instant access to patient medical history
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Story</h2>
            <div className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                HealthWeb was born from a simple yet powerful vision: to give patients complete control over their
                medical data while ensuring healthcare professionals have instant, secure access when it matters most.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                After witnessing countless delays in emergency care due to inaccessible medical records, our team of
                blockchain developers and healthcare professionals came together to create a solution that puts patient
                privacy first while revolutionizing healthcare efficiency.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Today, HealthWeb represents the future of medical record management - where cutting-edge blockchain
                technology meets elegant, wearable design to create a seamless healthcare experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section id="how-it-works" className="py-20 px-4 bg-slate-800/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Carry Your Medical Information</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Access your medical records securely and elegantly with our wearable QR code devices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 transform-gpu hover:rotate-1 group">
              <CardHeader>
                <div className="relative mx-auto mb-4 w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/images/medical-necklaces.png"
                    alt="Medical QR Necklaces"
                    fill
                    className="object-contain rounded-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardTitle className="flex items-center justify-center gap-2 text-white">
                  <Heart className="h-5 w-5 text-blue-400" />
                  Medical Necklaces
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-300">
                  Elegant gold necklaces with QR codes and medical cross for quick access to emergency information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 transform-gpu hover:-rotate-1 group">
              <CardHeader>
                <div className="relative mx-auto mb-4 w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/images/qr-necklace-person.png"
                    alt="Person wearing QR necklace"
                    fill
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardTitle className="flex items-center justify-center gap-2 text-white">
                  <Smartphone className="h-5 w-5 text-blue-400" />
                  Elegant Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-300">
                  Discreet and professional design that integrates seamlessly with your personal style and medical
                  attire.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 transform-gpu hover:rotate-1 group">
              <CardHeader>
                <div className="relative mx-auto mb-4 w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/images/qr-bracelet.png"
                    alt="QR Bracelet"
                    fill
                    className="object-contain rounded-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardTitle className="flex items-center justify-center gap-2 text-white">
                  <Watch className="h-5 w-5 text-blue-400" />
                  Smart Bracelets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-300">
                  Bracelets with circular QR codes for comfortable and secure 24/7 access to your medical data.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose HealthWeb?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built with cutting-edge blockchain technology to ensure your medical data is secure, private, and
              accessible when you need it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="grid gap-8">
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm">
                        <Shield className="h-6 w-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-white">Secure and Encrypted</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-300">
                      Your medical records are encrypted and securely stored on the blockchain, ensuring only authorized
                      access.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm">
                        <QrCode className="h-6 w-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-white">QR Code Access</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-300">
                      Quick and secure access to medical records through QR codes for emergency situations and
                      consultations.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 transform-gpu">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm">
                        <Users className="h-6 w-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-white">Patient Control</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-300">
                      Patients maintain complete control over their medical data, deciding who can access their
                      information.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/doctor-consultation.png"
                alt="Medical Consultation"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl shadow-blue-500/20"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1">
              <Image
                src="/images/medical-technology.png"
                alt="Medical Technology"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl shadow-blue-500/20"
              />
            </div>
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Advanced Medical Technology</h3>
              <p className="text-lg text-slate-300 mb-6">
                Seamless integration with existing medical systems, allowing healthcare professionals to securely and
                efficiently access and update patient information.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  Hospital system compatibility
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  Mobile access for professionals
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  Real-time synchronization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Simulator */}
      <ChatbotSimulator />

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-700/50 backdrop-blur-xl py-12 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/healthweb-logo.png"
                  alt="HealthWeb Logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold text-white">HealthWeb</span>
              </div>
              <p className="text-slate-300 mb-4">
                Decentralized medical record management powered by blockchain technology.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <a
                  href="https://x.com/HealthWeb28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Portals</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/doctor" className="text-slate-300 hover:text-white transition-colors">
                    Medical Portal
                  </Link>
                </li>
                <li>
                  <Link href="/patient" className="text-slate-300 hover:text-white transition-colors">
                    Patient Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">DeFi</h3>
              <div className="relative group">
                <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <DollarSign className="h-4 w-4" />
                  Medical Insurance
                </button>
                <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-slate-800 text-white text-sm rounded-lg p-3 shadow-lg border border-slate-700 whitespace-nowrap z-50">
                  Invest to cover your medical insurance 12% APY
                  <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Contact & Support</h3>
              <p className="text-sm text-slate-300 mb-4">
                Contact:{" "}
                <a href="mailto:healthweb28@gmail.com" className="text-blue-400 hover:underline">
                  healthweb28@gmail.com
                </a>
              </p>
              <p className="text-sm text-slate-400">
                Developed by{" "}
                <a href="https://github.com/Nico230202" className="text-blue-400 hover:underline">
                  Nico230202
                </a>{" "}
                and{" "}
                <a href="https://github.com/ManuelJG1999" className="text-blue-400 hover:underline">
                  ManuelJG1999
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
