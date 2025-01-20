import { Session } from 'next-auth'
import React from 'react'

export const Header = ( {session}: {session: Session}) => {
  return (
    <>
    <div>
    <h2 className='text-2xl font-bold'>Welcome, {session.user?.name}</h2>
    <p className='text-base text-gray-700'>Track User Activity here</p>
    </div>
    <div>search</div>
    </>
  )
}
