import React from 'react'

function Page() {
  return (
    <main className='root-container flex min-h-screen flex-col items-center justify-center'>
        <h1 className='font-bebas-neue'>Rate Limit Exceeded</h1>
        <p className='mt-3 text-center text-light-500'>Try again in a few minutes</p>
    </main>
  )
}

export default Page