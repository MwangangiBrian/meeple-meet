import type { Metadata } from 'next';
import './globals.css';
// import { SessionProvider } from 'next-auth/react'
// import { auth } from '@/auth';


export const metadata: Metadata = {
  title: 'MeepleMeet',
  description: 'Find board games and friends',
};


export default async function  RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

// const session = await auth();
{/* <SessionProvider session={session}></SessionProvider> */}

  return (
    <html lang="en">
      
      <body>

        {children}
      </body>
        
    </html>
  );
}