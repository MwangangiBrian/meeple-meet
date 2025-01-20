import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dices,
  Users,
  Search,
  HandshakeIcon,
  Star,
  Trophy,
  MessageSquare,
} from 'lucide-react';
import { db } from '@/db/drizzle';
import { users } from '@/db/schema';

const Home = async () => {
  // const result = await db.select().from(users)
  // console.log(JSON.stringify(result, null, 2))

  return (
    <>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <div className="rounded-2xl bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
              🎲 Join 2,000+ board game enthusiasts
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Share the Joy of Board Games in Your Community
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Borrow and lend board games with people in your area. Join our
              community of game lovers and discover new favorites!
            </p>
            <div className="space-x-4">
              <Link href="/register">
                <Button size="lg" asChild>
                  Get Started
                </Button>
              </Link>
              <Link href={'/games'}>
                <Button size="lg" variant="outline" asChild>
                  Browse Games
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Games */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Featured Games
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Check out some of the most popular games in our community
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {featuredGames.map((game) => (
              <Card key={game.id} className="flex flex-col overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={game.image || '/placeholder.svg'}
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex flex-col space-y-2 p-4">
                  <h3 className="font-bold">{game.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {game.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{game.players} Players</Badge>
                    <Badge variant="secondary">{game.time} min</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-900 md:py-12 lg:py-24">
          <div className="mx-auto flex flex-col-reverse md:flex-row max-w-[64rem] space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex flex-col gap-1 items-center text-center md:w-1/2 justify-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                How It Works
              </h2>
              <p className="mt-4 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Start sharing games in three simple steps
              </p>
            </div>
            {/* Left side: Cards */}
            <div className="flex flex-col space-y-4 md:w-1/2">
              <Card className="flex flex-col items-center text-center">
                <CardContent className="pt-6">
                  <Search className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">1. Find Games</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse our collection of games available in your area
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardContent className="pt-6">
                  <MessageSquare className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">2. Connect</h3>
                  <p className="text-sm text-muted-foreground">
                    Message the owner and arrange a convenient pickup
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardContent className="pt-6">
                  <HandshakeIcon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">3. Share & Play</h3>
                  <p className="text-sm text-muted-foreground">
                    Borrow the game, have fun, and return when finished
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-2xl font-bold">2,000+</h3>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Dices className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-2xl font-bold">5,000+</h3>
                <p className="text-sm text-muted-foreground">Games Shared</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-2xl font-bold">4.8/5</h3>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Trophy className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-2xl font-bold">1,000+</h3>
                <p className="text-sm text-muted-foreground">Game Titles</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-900 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Ready to Start Sharing?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join our community today and start sharing the joy of board games!
            </p>
            <Button size="lg" asChild>
              <Link href="/register">Sign Up Now</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

const featuredGames = [
  {
    id: 1,
    title: 'Catan',
    description: 'Classic strategy game of settling, trading and building',
    players: '3-4',
    time: 60,
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 2,
    title: 'Ticket to Ride',
    description: 'Build train routes across countries and continents',
    players: '2-5',
    time: 45,
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 3,
    title: 'Pandemic',
    description: 'Cooperative game of saving humanity from disease outbreaks',
    players: '2-4',
    time: 45,
    image: '/placeholder.svg?height=400&width=600',
  },
];

export default Home;
