import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dices, Clock, AlertCircle } from "lucide-react"

const stats = [
  {
    title: "Available Games",
    value: "94",
    description: "Active in the system",
    icon: Dices,
  },
  {
    title: "Currently Borrowed",
    value: "23",
    description: "Games in circulation",
    icon: Clock,
  },
  {
    title: "Needs Attention",
    value: "5",
    description: "Reported issues",
    icon: AlertCircle,
  },
]

export function GamesStats() {
  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

