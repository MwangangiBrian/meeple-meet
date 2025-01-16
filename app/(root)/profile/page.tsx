import Gamelist from '@/components/Gamelist'
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/constants'
import { signOut } from 'next-auth/react'
import React from 'react'

function Page() {
  return (
    <>
    <form action={async() =>{
        'use server'

        await signOut();
    }} className='mb-10'>
        <Button>Logout</Button>
    </form>
    <Gamelist title='Borrowed Books' books={sampleBooks} />
    </>
  )
}

export default Page