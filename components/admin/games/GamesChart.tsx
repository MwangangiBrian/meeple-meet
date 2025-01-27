"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

const data = [
  { name: "Jan", borrowed: 40, returned: 24 },
  { name: "Feb", borrowed: 30, returned: 35 },
  { name: "Mar", borrowed: 45, returned: 40 },
  { name: "Apr", borrowed: 50, returned: 45 },
  { name: "May", borrowed: 55, returned: 50 },
  { name: "Jun", borrowed: 45, returned: 45 },
  { name: "Jul", borrowed: 60, returned: 55 },
]

export function GamesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Borrowed</span>
                          <span className="font-bold text-primary">{payload[0].value}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Returned</span>
                          <span className="font-bold text-blue-500">{payload[1].value}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line
              type="monotone"
              dataKey="borrowed"
              strokeWidth={2}
              activeDot={{
                r: 8,
              }}
              style={
                {
                  stroke: "hsl(var(--primary))",
                } as React.CSSProperties
              }
            />
            <Line
              type="monotone"
              dataKey="returned"
              strokeWidth={2}
              style={
                {
                  stroke: "hsl(217 91% 60%)",
                } as React.CSSProperties
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

