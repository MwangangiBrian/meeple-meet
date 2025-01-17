'use client';
import { cn, getInitials } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Session } from 'next-auth';

function Header({ session }: { session: Session | null }) {
  const pathname = usePathname();

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link className="flex items-center gap-2 font-bold text-xl" href={'/'}>
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        Meeple
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={'/'}
        >
          How It Works
        </Link>
        <Link
          className={cn(
            'text-sm font-medium hover:underline underline-offset-4',
            pathname === '/games' ? 'text-light-200' : 'text-light-100'
          )}
          href={'/games'}
        >
          Games
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href={'/community'}
        >
          Community
        </Link>
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
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 bg-blue-500 text-white px-4 py-2 rounded"
            href={'/sign-up'}
          >
            Sign Up
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
