"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GamesList } from "@/components/admin/games/GamesList"
import { GamesGrid } from "@/components/admin/games/GamesGrid"
import { GamesStats } from "@/components/admin/games/GamesStats"
import { GamesChart } from "@/components/admin/games/GamesChart"
import { GamesTrending } from "@/components/admin/games/GamesTrending"
import { Search, LayoutGrid, List, Plus } from "lucide-react"

export default function Page() {
  const [view, setView] = useState<"grid" | "list">("list")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Games</h1>
          <p className="text-muted-foreground">Total 117 games, manage your game collection</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Game
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search games..." className="pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant={view === "grid" ? "default" : "outline"} size="icon" onClick={() => setView("grid")}>
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button variant={view === "list" ? "default" : "outline"} size="icon" onClick={() => setView("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <GamesStats />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="md:col-span-1 lg:col-span-4">
          <GamesChart />
        </div>
        <div className="md:col-span-1 lg:col-span-3">
          <GamesTrending />
        </div>
      </div>

      {view === "list" ? <GamesList /> : <GamesGrid />}
    </div>
  )
}

