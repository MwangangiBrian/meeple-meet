import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react"
import { games } from "@/constants"


export function GamesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {games.map((game) => (
        <Card key={game.id}>
          <CardHeader className="relative">
            <div className="absolute right-4 top-4 z-10">
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src={game.image || "/placeholder.svg"} alt={game.name} fill className="object-cover" />
              <Badge variant={game.status === "available" ? "default" : "secondary"} className="absolute left-2 top-2">
                {game.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <CardTitle>{game.name}</CardTitle>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={game.owner.image} />
                <AvatarFallback>{game.owner.initials}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">{game.owner.name}</p>
                <p className="text-muted-foreground">Owner</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-muted-foreground">Condition</p>
              <p className="font-medium">{game.condition}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Last Borrowed</p>
              <p className="font-medium">{game.lastBorrowed}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

