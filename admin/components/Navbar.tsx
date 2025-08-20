import Link from 'next/link'
import React from 'react'
import {Moon} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Navbar = () => {
  return (
    <div className='w-full bg-amber-400 flex items-center justify-between p-4'>
        CollapseSidebar
        <div className='flex items-center gap-8'>
            <Link href='/'>Dashboard</Link>
            <Moon/>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </div>
  )
}

export default Navbar