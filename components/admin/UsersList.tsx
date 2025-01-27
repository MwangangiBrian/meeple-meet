import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    image: "/placeholder.svg",
    initials: "JD",
    games: 5,
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    image: "/placeholder.svg",
    initials: "SS",
    games: 3,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    image: "/placeholder.svg",
    initials: "MJ",
    games: 7,
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma@example.com",
    image: "/placeholder.svg",
    initials: "EW",
    games: 2,
  },
]

export function UsersList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Games</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <span>{user.name}</span>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.games}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

