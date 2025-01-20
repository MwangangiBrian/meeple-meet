import { auth } from '@/auth';
import { Header } from '@/components/admin/Header';
import { Sidebar } from '@/components/admin/Sidebar';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';


const Layout = async ({ childern }: { childern: ReactNode }) => {
  const session = await auth();
  if(!session?.user) redirect('/sign-in');

  return (
    <>
      <main className="flex min-h-screen w-full flex-row">
        <Sidebar session={session} />

        <div className="admin-container">
          <Header session={session} />
          {childern}
        </div>
      </main>
    </>
  );
};

export default Layout;
