import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activity = [
  {
    id: 1,
    user: {
      name: "John Doe",
      image: "/placeholder.svg",
      initials: "JD",
    },
    action: "borrowed",
    game: "Catan",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Sarah Smith",
      image: "/placeholder.svg",
      initials: "SS",
    },
    action: "returned",
    game: "Ticket to Ride",
    time: "4 hours ago",
  },
  {
    id: 3,
    user: {
      name: "Mike Johnson",
      image: "/placeholder.svg",
      initials: "MJ",
    },
    action: "registered",
    time: "5 hours ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activity.map((item) => (
        <div key={item.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={item.user.image} alt={item.user.name} />
            <AvatarFallback>{item.user.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.user.name}</p>
            <p className="text-sm text-muted-foreground">
              {item.action === "registered" ? "joined the platform" : `${item.action} ${item.game}`}
            </p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">{item.time}</div>
        </div>
      ))}
    </div>
  )
}

