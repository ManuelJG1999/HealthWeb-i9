import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface MedicalRecordCardProps {
  title: string
  value: string
  icon: React.ReactNode
  description: string
  items?: string[]
  variant?: "default" | "destructive"
}

export function MedicalRecordCard({
  title,
  value,
  icon,
  description,
  items,
  variant = "default",
}: MedicalRecordCardProps) {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-all duration-200 hover:scale-105 text-slate-50",
        variant === "destructive" && "border-destructive/20 bg-destructive/5",
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg",
              variant === "destructive" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary",
            )}
          >
            {icon}
          </div>
          <Badge variant={variant === "destructive" ? "destructive" : "secondary"}>{value}</Badge>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-3">{description}</CardDescription>
        {items && (
          <div className="space-y-1">
            {items.map((item, index) => (
              <p key={index} className="text-sm text-muted-foreground">
                • {item}
              </p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
