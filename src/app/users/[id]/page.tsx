'use client'

import React, { useEffect, useState } from 'react'
import { getUser } from '@/lib/data'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import { RiCloseFill } from "react-icons/ri";
import { format } from 'date-fns'
import type { User } from '@/lib/types'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface UserDetailPageProps {
  params: {
    id: string
  }
}
const UserDetailPage = ({ params: { id } }: UserDetailPageProps) => {
  const [user, setUser] = useState<User>()
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      await getUser(id).then((data) => setUser(data))
    }

    fetchUser()
  }, [id])

  return (
    <div className='fixed inset-0 bg-zinc-900/20 z-10'>
      <div className='flex items-center h-full max-w-lg mx-auto p-5'>
        <div className='relative bg-white w-full py-5 px-5 rounded-lg'>
          <div className='my-5'>
            <Image src={user?.avatar ?? ''} width={100} height={100} alt='avatar' className='rounded-full mx-auto my-5' />
          </div>
          <button className='absolute top-4 right-4 cursor-pointer' onClick={e => router.push('/')}><RiCloseFill className='text-2xl' /></button>
          <Card className='rounded-md'>
            <CardContent className='space-y-3 pt-4'>
              <p>ID: {user?.id}</p>
              <p>Name: {user?.first_name} {user?.last_name}</p>
              <p>Gender: {user?.sex}</p>
              <p>Date of Birth: {user?.dob && format(user?.dob as Date, 'yyyy-MM-dd')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

  )
}

export default UserDetailPage
