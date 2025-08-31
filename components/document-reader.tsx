"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, ImageIcon, Activity, Download, Eye, ChevronRight } from "lucide-react"

interface Document {
  id: string
  name: string
  type: "pdf" | "image" | "lab" | "xray"
  date: string
  size: string
  status: "processed" | "processing" | "pending"
}

const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Análisis de Sangre - Hemograma Completo",
    type: "lab",
    date: "2024-01-15",
    size: "2.3 MB",
    status: "processed",
  },
  {
    id: "2",
    name: "Radiografía de Tórax",
    type: "xray",
    date: "2024-01-10",
    size: "8.7 MB",
    status: "processed",
  },
  {
    id: "3",
    name: "Historial Médico - Consulta Cardiología",
    type: "pdf",
    date: "2024-01-08",
    size: "1.2 MB",
    status: "processed",
  },
  {
    id: "4",
    name: "Electrocardiograma",
    type: "image",
    date: "2024-01-05",
    size: "3.1 MB",
    status: "processing",
  },
]

export function DocumentReader() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null)

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-400" />
      case "image":
        return <ImageIcon className="h-5 w-5 text-green-400" />
      case "lab":
        return <Activity className="h-5 w-5 text-blue-400" />
      case "xray":
        return <ImageIcon className="h-5 w-5 text-purple-400" />
      default:
        return <FileText className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processed":
        return <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Procesado</Badge>
      case "processing":
        return <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Procesando</Badge>
      case "pending":
        return <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">Pendiente</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Document List */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              Documentos del Paciente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockDocuments.map((doc) => (
              <div
                key={doc.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedDoc?.id === doc.id
                    ? "bg-blue-500/20 border-blue-500/50"
                    : "bg-slate-700/30 border-slate-600/50 hover:bg-slate-700/50"
                }`}
                onClick={() => setSelectedDoc(doc)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getDocumentIcon(doc.type)}
                    <div>
                      <h4 className="font-medium text-white text-sm">{doc.name}</h4>
                      <p className="text-xs text-slate-400">
                        {doc.date} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(doc.status)}
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Document Viewer */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-400" />
              Visor de Documentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDoc ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getDocumentIcon(selectedDoc.type)}
                    <div>
                      <h4 className="font-medium text-white">{selectedDoc.name}</h4>
                      <p className="text-sm text-slate-400">{selectedDoc.date}</p>
                    </div>
                  </div>
                  {getStatusBadge(selectedDoc.status)}
                </div>

                {/* Document Preview */}
                <div className="bg-slate-700/30 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                  {selectedDoc.type === "lab" && (
                    <div className="text-center space-y-4 w-full">
                      <Activity className="h-12 w-12 text-blue-400 mx-auto" />
                      <div className="space-y-2">
                        <h5 className="text-white font-medium">Resultados de Laboratorio</h5>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-slate-600/30 p-3 rounded">
                            <p className="text-slate-300">Hemoglobina</p>
                            <p className="text-white font-medium">14.2 g/dL</p>
                            <p className="text-green-400 text-xs">Normal</p>
                          </div>
                          <div className="bg-slate-600/30 p-3 rounded">
                            <p className="text-slate-300">Glucosa</p>
                            <p className="text-white font-medium">95 mg/dL</p>
                            <p className="text-green-400 text-xs">Normal</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedDoc.type === "xray" && (
                    <div className="text-center space-y-4">
                      <ImageIcon className="h-12 w-12 text-purple-400 mx-auto" />
                      <div className="space-y-2">
                        <h5 className="text-white font-medium">Radiografía de Tórax</h5>
                        <div className="bg-slate-600/30 p-4 rounded">
                          <p className="text-slate-300 text-sm">Interpretación:</p>
                          <p className="text-white">
                            Campos pulmonares claros, sin evidencia de consolidación o derrame pleural.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedDoc.type === "pdf" && (
                    <div className="text-center space-y-4 w-full">
                      <FileText className="h-12 w-12 text-red-400 mx-auto" />
                      <div className="space-y-2">
                        <h5 className="text-white font-medium">Historial Médico</h5>
                        <div className="bg-slate-600/30 p-4 rounded text-left">
                          <p className="text-slate-300 text-sm mb-2">Resumen de consulta:</p>
                          <p className="text-white text-sm">
                            Paciente de 45 años con antecedentes de hipertensión controlada. Consulta de seguimiento
                            cardiológico. Examen físico normal. Se recomienda continuar con medicación actual.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedDoc.type === "image" && (
                    <div className="text-center space-y-4">
                      <ImageIcon className="h-12 w-12 text-green-400 mx-auto" />
                      <div className="space-y-2">
                        <h5 className="text-white font-medium">Electrocardiograma</h5>
                        <div className="bg-slate-600/30 p-4 rounded">
                          <p className="text-slate-300 text-sm">Estado:</p>
                          <p className="text-yellow-400">Procesando análisis automático...</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Completo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Descargar
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-400">Selecciona un documento para ver su contenido</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
