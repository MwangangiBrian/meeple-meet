import { auth } from '@/auth';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  // if (!session) redirect('/sign-in');
  return (
    <main className="root-container">
      <div className="mx-auto my-w-7xl">
        <Header session={session} />
        <div className="mt-20 pb-20">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
