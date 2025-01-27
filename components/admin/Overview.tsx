"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { chartData } from "@/constants/index"


export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={chartData}>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Month</span>
                      <span className="font-bold">{payload[0].payload.name}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Total</span>
                      <span className="font-bold">{payload[0].value}</span>
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
          dataKey="total"
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
      </LineChart>
    </ResponsiveContainer>
  )
}

