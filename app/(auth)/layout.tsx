import { auth } from '@/auth';
import { ThemeProvider } from 'next-themes';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {

const session = await auth();

if(session)redirect('/')

  return ( <>
    <ThemeProvider   attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange >
    <main className='auth-container'>
    <section className='auth-form'>
        
            <div>{children}</div>
        
    </section>
    </main>
  </ThemeProvider>
  </>
  );
};

export default Layout;
