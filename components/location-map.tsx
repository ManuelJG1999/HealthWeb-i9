import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function LocationMap() {
  return (
    <Card className="h-80">
      <CardContent className="p-0 h-full">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Map placeholder with markers */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50" />
          </div>

          {/* Hospital markers */}
          <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full shadow-lg">
              <MapPin className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>

          <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-full shadow-lg">
              <MapPin className="h-4 w-4 text-secondary-foreground" />
            </div>
          </div>

          {/* Center content */}
          <div className="text-center z-10">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Interactive Map</p>
            <p className="text-xs text-muted-foreground">Nearby medical facilities</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
