import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import GameCover from './GameCover';
import { ArrowRight, Calendar, Dice5, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GameOverview = ({ color, coverURL }: Book) => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Share the Joy of Board Games
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Borrow games from your local community. Try new games without
                  buying them. Share your collection with others.
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

            <div className="relative flex justify-center">
              <div className="relative">
                <GameCover
                  variant="wide"
                  className="z-10"
                  coverColor={color}
                  coverURL={coverURL}
                />
                <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
                  <GameCover
                    variant="wide"
                    coverColor={color}
                    coverURL={coverURL}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How It Works
              </h2>
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
                  Search for games in your area. Filter by genre, player count,
                  and availability.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 pt-8">
                <Calendar className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Request & Borrow</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Request to borrow a game and arrange a convenient pickup time
                  with the owner.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 pt-8">
                <Dice5 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Play & Return</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Enjoy the game and return it in the same condition. Leave a
                  review for the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default GameOverview;
