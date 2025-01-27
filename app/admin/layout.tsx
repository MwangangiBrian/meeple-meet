import { auth } from '@/auth';
import { Header } from '@/components/admin/Header';
import { Sidebar } from '@/components/admin/Sidebar';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';


const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if(!session?.user) redirect('/sign-in');

  return (
    <>
      <div className="flex min-h-screen w-full flex-row">
        <Sidebar session={session} />

        <main className="flex-1 overflow-auto">
          <Header session={session} />
        <div className="container space-y-6 p-8 pt-6">{children}</div>
        </main>
      </div>
    </>
  );
};

<main className="flex-1 overflow-auto">
        
      </main>
export default Layout;
