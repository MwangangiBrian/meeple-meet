import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const trendingGames = [
  {
    id: 1,
    name: "Catan",
    image: "/placeholder.svg",
    borrowCount: 15,
    trend: "up",
  },
  {
    id: 2,
    name: "Ticket to Ride",
    image: "/placeholder.svg",
    borrowCount: 12,
    trend: "up",
  },
  {
    id: 3,
    name: "Pandemic",
    image: "/placeholder.svg",
    borrowCount: 10,
    trend: "down",
  },
]

export function GamesTrending() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Games</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {trendingGames.map((game) => (
            <div key={game.id} className="flex items-center">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                <Image src={game.image || "/placeholder.svg"} alt={game.name} fill className="object-cover" />
              </div>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{game.name}</p>
                <p className="text-sm text-muted-foreground">{game.borrowCount} borrows this month</p>
              </div>
              <Badge variant={game.trend === "up" ? "default" : "secondary"} className="ml-auto">
                {game.trend === "up" ? "Trending" : "Declining"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

