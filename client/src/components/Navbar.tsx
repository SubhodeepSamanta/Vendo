import Image from 'next/image'
import React from 'react'
import SearchBar from './Searchbar'
import Link from 'next/link'
import { Bell, Home, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between mb-4'>
        <Link href='/' className='flex items-center'>
        <Image src='/logo.png' alt='logo' height={36} width={36}/>
        <p className='font-medium tracking-wider hidden md:block'>Vendo</p>
        </Link>
        <div className='flex items-center gap-4 md:gap-6 mr-2'>
            <SearchBar/>
            <Link href='/'>
                <Home className='h-5 w-5 ml-4 md:ml-5'/>
            </Link>
            <Bell className='h-5 w-5'/>
            <ShoppingCart className='h-5 w-5 mr-2 md:mr-5'/>
            <Link href='/'>Sign in</Link>
        </div>
    </nav>
  )
}

export default Navbar