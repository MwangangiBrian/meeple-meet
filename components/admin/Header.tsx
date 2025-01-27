import { Session } from 'next-auth'
import React from 'react'

export const Header = ( {session}: {session: Session}) => {
  return (
    <>
    <div className='flex gap-3 items-center'>
    <div>
    <h2 className='text-2xl font-bold'>Hello, {session.user?.name}</h2>
    <p className='text-sm text-gray-700'>Track User Activity here</p>
    </div>
    <div className='px-10 py-2 bg-gray-200 rounded-full'>search</div>
    </div>
    </>
  )
}
