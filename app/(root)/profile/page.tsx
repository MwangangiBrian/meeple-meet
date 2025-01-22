import Gamelist from '@/components/Gamelist'
import { Button } from '@/components/ui/button'
import { sampleGames } from '@/constants'
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
    <Gamelist title='Borrowed Games' games={sampleGames} />
    </>
  )
}

export default Page