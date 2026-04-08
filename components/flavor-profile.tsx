'use client'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { FlavorProfile } from '@/lib/products'
import { Card } from '@/components/ui/card'

interface FlavorProfileChartProps {
  profile: FlavorProfile
}

export function FlavorProfileChart({ profile }: FlavorProfileChartProps) {
  const data = [
    {
      name: 'Spice',
      value: profile.spice,
    },
    {
      name: 'Sweetness',
      value: profile.sweetness,
    },
    {
      name: 'Earthiness',
      value: profile.earthiness,
    },
    {
      name: 'Fruitiness',
      value: profile.fruitiness,
    },
    {
      name: 'Florality',
      value: profile.florality,
    },
  ]

  return (
    <Card className="p-6 border-border bg-card">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Flavor Profile
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid stroke="var(--color-border)" />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 10]}
            tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
          />
          <Radar
            name="Intensity"
            dataKey="value"
            stroke="var(--color-primary)"
            fill="var(--color-primary)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <div>
              <p className="font-medium text-foreground">{item.name}</p>
              <p className="text-muted-foreground">{item.value}/10</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
