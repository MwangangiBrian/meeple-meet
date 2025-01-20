import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Users, MapPin, Star } from "lucide-react"

export default function GamePage({ params }: { params: { id: string } }) {
  const game = {
    id: 1,
    title: "Catan",
    description:
      "Collect and trade resources to build the most powerful settlements in this classic strategy game. Will you build the longest road, amass the largest army, or gather the most victory points to win?",
    players: "3-4",
    time: 60,
    category: "Strategy",
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.8,
    owner: {
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=40&width=40",
      location: "Brooklyn, NY",
      rating: 4.9,
    },
    details: {
      age: "10+",
      complexity: "Medium",
      language: "English",
      condition: "Like New",
    },
  }

  return (
    <div className="container py-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-4xl font-bold">{game.title}</h1>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="secondary">{game.players} Players</Badge>
              <Badge variant="secondary">{game.time} min</Badge>
              <Badge variant="secondary">{game.category}</Badge>
            </div>
          </div>
          <p className="text-muted-foreground">{game.description}</p>
          <Card>
            <CardHeader>
              <CardTitle>Game Owner</CardTitle>
              <CardDescription>Contact to arrange borrowing</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={game.owner.image} />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">{game.owner.name}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {game.owner.location}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  {game.owner.rating} rating
                </div>
              </div>
              <Button>Contact Owner</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Game Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Age: {game.details.age}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Complexity: {game.details.complexity}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Language: {game.details.language}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Condition: {game.details.condition}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
