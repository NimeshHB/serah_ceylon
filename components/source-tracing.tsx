'use client'

import { SourceInfo } from '@/lib/products'
import { Card } from '@/components/ui/card'
import { MapPin, Sprout, Calendar, Layers } from 'lucide-react'

interface SourceTracingProps {
  source: SourceInfo
}

export function SourceTracing({ source }: SourceTracingProps) {
  return (
    <div className="space-y-6">
      {/* Map Visualization */}
      <Card className="p-6 border-border bg-card overflow-hidden">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Source Location
        </h3>

        {/* Simple SVG Map representation */}
        <div className="relative w-full h-80 bg-gradient-to-b from-green-100 to-green-50 rounded-lg overflow-hidden mb-4">
          {/* Sri Lanka outline visualization */}
          <svg
            viewBox="0 0 400 500"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Land */}
            <path
              d="M 150 80 Q 180 70 200 100 Q 220 140 210 200 Q 200 250 180 280 Q 160 300 140 290 Q 130 250 135 180 Q 140 120 150 80"
              fill="#10b981"
              opacity="0.5"
            />
            {/* Gradient overlay */}
            <defs>
              <radialGradient id="locGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#d4a574" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#d4a574" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Location marker */}
            <circle
              cx="170"
              cy="180"
              r="8"
              fill="#d4a574"
              opacity="0.9"
            />
            <circle
              cx="170"
              cy="180"
              r="20"
              fill="url(#locGradient)"
            />
          </svg>

          {/* Location Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur rounded-lg p-3 border border-border">
            <p className="text-sm font-semibold text-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              {source.region}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          {source.story}
        </p>
      </Card>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Region */}
        <Card className="p-6 border-border bg-card">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                Region
              </p>
              <p className="font-semibold text-foreground">
                {source.region}
              </p>
            </div>
          </div>
        </Card>

        {/* Elevation */}
        <Card className="p-6 border-border bg-card">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Layers className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                Elevation
              </p>
              <p className="font-semibold text-foreground">
                {source.elevation}
              </p>
            </div>
          </div>
        </Card>

        {/* Harvest */}
        <Card className="p-6 border-border bg-card">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <Calendar className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                Harvest Season
              </p>
              <p className="font-semibold text-foreground">
                {source.harvest}
              </p>
            </div>
          </div>
        </Card>

        {/* Coordinates */}
        <Card className="p-6 border-border bg-card">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-orange-500/10">
              <Sprout className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                Coordinates
              </p>
              <p className="font-semibold text-foreground text-sm">
                {source.coordinates.lat.toFixed(4)}°, {source.coordinates.lng.toFixed(4)}°
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
