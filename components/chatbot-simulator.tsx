"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const botResponses = {
  es: {
    greeting: "¡Hola! Soy el asistente virtual de HealthWeb. ¿En qué puedo ayudarte hoy?",
    help: "Puedo ayudarte con información sobre nuestros servicios, cómo usar los códigos QR médicos, o resolver dudas sobre la plataforma.",
    qr: "Los códigos QR de HealthWeb te permiten acceder rápidamente a tu información médica. Los profesionales de salud pueden escanearlos para ver tu historial médico de forma segura.",
    security:
      "Tu información está protegida con encriptación blockchain. Solo tú y los profesionales autorizados pueden acceder a tus datos médicos.",
    devices:
      "Ofrecemos collares y pulseras elegantes con códigos QR integrados. Son discretos, cómodos y siempre accesibles en emergencias.",
    default:
      "Entiendo tu consulta. Para obtener ayuda más específica, te recomiendo contactar a nuestro equipo de soporte en healthweb28@gmail.com",
  },
  en: {
    greeting: "Hello! I'm HealthWeb's virtual assistant. How can I help you today?",
    help: "I can help you with information about our services, how to use medical QR codes, or resolve questions about the platform.",
    qr: "HealthWeb QR codes allow you to quickly access your medical information. Healthcare professionals can scan them to view your medical history securely.",
    security:
      "Your information is protected with blockchain encryption. Only you and authorized professionals can access your medical data.",
    devices:
      "We offer elegant necklaces and bracelets with integrated QR codes. They're discreet, comfortable, and always accessible in emergencies.",
    default:
      "I understand your query. For more specific help, I recommend contacting our support team at healthweb28@gmail.com",
  },
}

export function ChatbotSimulator() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: botResponses.es.greeting,
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    const responses = botResponses.es

    if (message.includes("qr") || message.includes("código") || message.includes("escanear")) {
      return responses.qr
    }
    if (message.includes("segur") || message.includes("privac") || message.includes("proteg")) {
      return responses.security
    }
    if (message.includes("collar") || message.includes("pulsera") || message.includes("dispositiv")) {
      return responses.devices
    }
    if (message.includes("ayuda") || message.includes("help") || message.includes("información")) {
      return responses.help
    }

    return responses.default
  }

  const sendMessage = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    }

    const botMessage: Message = {
      id: messages.length + 2,
      text: getBotResponse(inputText),
      sender: "bot",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, botMessage])
    setInputText("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-110 ${
          isOpen ? "hidden" : "flex"
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-slate-800/95 border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-blue-500/20">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-slate-700/50">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-400" />
              <CardTitle className="text-sm text-white">Asistente HealthWeb</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.sender === "user" ? "bg-blue-600 text-white" : "bg-slate-700/50 text-slate-200"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 text-blue-400 flex-shrink-0" />}
                      {message.sender === "user" && <User className="h-4 w-4 mt-0.5 text-blue-200 flex-shrink-0" />}
                      <span>{message.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-700/50">
              <div className="flex gap-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu pregunta..."
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                />
                <Button onClick={sendMessage} size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
