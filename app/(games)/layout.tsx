import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { Search, SlidersHorizontal } from "lucide-react"
import Header from "@/components/Header"

export default function Games() {
  return (<>
    <Header />
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Browse Games</h1>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search games..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="strategy">Strategy</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="party">Party</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="sr-only">Filter games</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {games.map((game) => (
            <Card key={game.id} className="overflow-hidden">
              <Link href={`/games/${game.id}`}>
                <div className="relative aspect-[4/3]">
                  <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h2 className="font-bold">{game.title}</h2>
                  <p className="text-sm text-muted-foreground mb-2">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{game.players} Players</Badge>
                    <Badge variant="secondary">{game.time} min</Badge>
                    <Badge variant="secondary">{game.category}</Badge>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

const games = [
  {
    id: 1,
    title: "Catan",
    description: "Classic strategy game of settling, trading and building",
    players: "3-4",
    time: 60,
    category: "Strategy",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Ticket to Ride",
    description: "Build train routes across countries and continents",
    players: "2-5",
    time: 45,
    category: "Family",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Pandemic",
    description: "Cooperative game of saving humanity from disease outbreaks",
    players: "2-4",
    time: 45,
    category: "Strategy",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Codenames",
    description: "Word-guessing party game of secret agents",
    players: "4-8",
    time: 15,
    category: "Party",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "7 Wonders",
    description: "Card drafting game of ancient civilizations",
    players: "3-7",
    time: 30,
    category: "Strategy",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Splendor",
    description: "Renaissance merchants compete for prestige",
    players: "2-4",
    time: 30,
    category: "Family",
    image: "/placeholder.svg?height=400&width=600",
  },
]

