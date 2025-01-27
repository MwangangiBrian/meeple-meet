import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const games = [
  {
    id: 1,
    name: "Catan",
    owner: "John Doe",
    status: "borrowed",
    condition: "Good",
  },
  {
    id: 2,
    name: "Ticket to Ride",
    owner: "Sarah Smith",
    status: "available",
    condition: "Excellent",
  },
  {
    id: 3,
    name: "Pandemic",
    owner: "Mike Johnson",
    status: "borrowed",
    condition: "Fair",
  },
  {
    id: 4,
    name: "7 Wonders",
    owner: "Emma Wilson",
    status: "available",
    condition: "Good",
  },
]

export function GamesList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Condition</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {games.map((game) => (
          <TableRow key={game.id}>
            <TableCell className="font-medium">{game.name}</TableCell>
            <TableCell>{game.owner}</TableCell>
            <TableCell>
              <Badge variant={game.status === "available" ? "default" : "secondary"}>{game.status}</Badge>
            </TableCell>
            <TableCell>{game.condition}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

