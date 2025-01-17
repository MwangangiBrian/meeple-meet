import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dice5, Users, MapPin, Calendar, Search, ArrowRight, Gamepad2, Dices } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Share the Joy of Board Games
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Borrow games from your local community. Try new games without buying them. Share your collection with others.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="inline-flex gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Browse Games
                  </Button>
                </div>
              </div>
              <Image
                alt="Hero Image of Board Games"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:aspect-square"
                height="600"
                src="/placeholder.svg?height=600&width=600"
                width="600"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our community and start sharing games in three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 pt-8">
                  <Search className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Find Games</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Search for games in your area. Filter by genre, player count, and availability.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 pt-8">
                  <Calendar className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Request & Borrow</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Request to borrow a game and arrange a convenient pickup time with the owner.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 pt-8">
                  <Dice5 className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Play & Return</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Enjoy the game and return it in the same condition. Leave a review for the community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Games */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Games</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the most borrowed games in your community
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 mt-12">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      alt={`Popular Game ${i}`}
                      className="object-cover"
                      fill
                      src={`/placeholder.svg?height=300&width=400`}
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Game Title {i}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2-4 Players • 30-60 mins</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <Users className="h-12 w-12 mb-2" />
                <h3 className="text-3xl font-bold">5,000+</h3>
                <p>Active Members</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <Gamepad2 className="h-12 w-12 mb-2" />
                <h3 className="text-3xl font-bold">2,500+</h3>
                <p>Available Games</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <Dice5 className="h-12 w-12 mb-2" />
                <h3 className="text-3xl font-bold">10,000+</h3>
                <p>Successful Borrows</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <MapPin className="h-12 w-12 mb-2" />
                <h3 className="text-3xl font-bold">50+</h3>
                <p>Cities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Sharing?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our community today and start sharing the joy of board games with others.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="inline-flex gap-2">
                  Sign Up Now <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 GameShare. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

