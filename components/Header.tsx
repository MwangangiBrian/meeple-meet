'use client';
import { cn, getInitials } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Session } from 'next-auth';
import { Button } from './ui/button';
import { ModeToggle } from './modeToggle';

function Header({ session }: { session: Session | null }) {
  const pathname = usePathname();

  return (
    <>
      <header className="mx-auto w-[90%] justify-center sticky top-0 z-50  border-b-gray-400 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mr-4 flex items-center  gap-4 justify-between">
          <div className="container flex h-14 items-center">
            <Link href={'/'} className="mr-6 flex items-center space-x-2">
              <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
              <span className="font-sans hidden font-extrabold sm:inline-block text-orange-600 text-lg">Meeple</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href={'/games'}
                className="transition-colors hover:text-foreground/80"
              >
                Browse Games
              </Link>
              <Link
                href={'/'}
                className="transition-colors hover:text-foreground/80"
              >
                How it Works
              </Link>
              <Link
                href={'/'}
                className="transition-colors hover:text-foreground/80"
              >
                Community
              </Link>
            </nav>
          </div>
          {session ? (
            <Link href="#">
              <Avatar>
                {session.user?.image ? (
                  <AvatarImage
                    src={session.user.image}
                    alt={session.user.name || 'User Avatar'}
                  />
                ) : (
                  <AvatarFallback className="bg-cyan-100">
                    {getInitials(session.user?.name || 'Guest')}
                  </AvatarFallback>
                )}
              </Avatar>
            </Link>
          ) : (
            <div className="flex flex-1 items-center justify-end space-x-2">
              <nav className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link href={'/sign-in'}>Login</Link>
                </Button>
                <Button asChild>
                  <Link href={'/sign-up'}>Sign Up</Link>
                </Button>
                <ModeToggle />
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
