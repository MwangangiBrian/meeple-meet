import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react"
import { games } from "@/constants"



export function GamesList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Games List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Members</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Borrow Time</TableHead>
              <TableHead>Last Borrowed</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {games.map((game) => (
              <TableRow key={game.id}>
                <TableCell className="font-medium">{game.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={game.owner.image} />
                      <AvatarFallback>{game.owner.initials}</AvatarFallback>
                    </Avatar>
                    {game.owner.name}
                  </div>
                </TableCell>
                <TableCell>{game.members}</TableCell>
                <TableCell>
                  <Badge variant={game.status === "available" ? "default" : "secondary"}>{game.status}</Badge>
                </TableCell>
                <TableCell>{game.condition}</TableCell>
                <TableCell>{game.borrowTime}</TableCell>
                <TableCell>{game.lastBorrowed}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

