'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { HelpCircle, LogOut } from 'lucide-react';
import { sidebarItems } from '@/constants';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { getInitials } from '@/lib/utils';
import { Session } from 'next-auth';
import Image from 'next/image';

export function Sidebar({ session }: { session: Session }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-auto flex-col border-r bg-background sticky top-0">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <Image src={"/favicon.ico"} alt="logo" width={40} height={40}/>
        <div className='flex-col hidden sm:block '>
          <span>Meeple</span>
          <span className="hidden sm:block text-xs text-muted-foreground font-normal">Admin Panel</span>
          </div>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              className={cn(
                'w-full justify-start',
                pathname === item.href && 'bg-accent shadow-sm bg-orange-300'
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                <span className="hidden sm:block">{item.title}</span>
              </Link>
            </Button>
          ))}
        </nav>
      </div>
      <div className="border-t p-4 ">
        <nav className="grid gap-1 cursor-pointer">
          <div className="flex gap-4 items-center mb-3">
            <Avatar className="ml-4 ">
              <AvatarFallback className="bg-red-600 px-3 py-1 rounded-full ">
                {getInitials(session.user?.name || 'Guest')}
              </AvatarFallback>
            </Avatar>
            <div className="hidden sm:flex flex-col">
              <p className="font-semibold text-sm">{session.user?.name}</p>
              <p className="text-xs text-slate-500"> {session.user?.email} </p>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/admin/help">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span className="hidden sm:block">Help</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-100"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span className="hidden sm:block">Log out</span>
          </Button>
        </nav>
      </div>
    </div>
  );
}
