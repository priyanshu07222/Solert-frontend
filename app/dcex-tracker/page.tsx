'use client'
import React from 'react'
import { getServerSession } from 'next-auth'
import authOptions from '@/lib/authOption'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { TrackAccount } from '@/components/trackAccount'

const WhaleAlert = () => {

  const {data} = useSession();
  const router = useRouter();

  if(!data?.user) {
    router.push('/login')
  }

  return (
    
      <div className='max-w-screen-lg mx-auto  '>
        <h1 className='text-center text-4xl font-bold font-bold text-black pt-10'>Add the address you want to Track</h1>
        <TrackAccount />
      </div>
      
 
  )
}

export default WhaleAlert
