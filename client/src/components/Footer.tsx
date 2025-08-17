import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 p-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 w-full bg-gray-800 text-white rounded-md'>
        <div className=' text-gray-500 text-sm flex flex-col items-start gap-2'>
            <Link href='/' className='flex items-center'>
            <Image src='/logo.png' alt='logo' height={36} width={36} className='h-9 w-9'/>
            <p className='font-medium tracking-wider text-gray-200'>Vendo</p>
            </Link>
            <p>&copy;Copyright Vendo</p>
            <p>All Rights Reserved</p>
        </div>
        <div className=' text-gray-500 text-sm flex flex-col items-center md:items-start gap-2'>
            <div className='flex items-center'>
            <p className='font-medium tracking-wider text-gray-200'>Links</p>
            </div>
            <p>Homepage</p>
            <p>Contact</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
        </div>
        
        <div className=' text-gray-500 text-sm flex flex-col items-center md:items-start gap-2'>
            <div className='flex items-center'>
            <p className='font-medium tracking-wider text-gray-200'>Sections</p>
            </div>
            <p>All Products</p>
            <p>New Arrivals</p>
            <p>Best Sellers</p>
            <p>Sale</p>
        </div>
        
        <div className=' text-gray-500 text-sm flex flex-col items-center md:items-start gap-2'>
            <div className='flex items-center'>
            <p className='font-medium tracking-wider text-gray-200'>More</p>
            </div>
            <p>About</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>Affiliate Program</p>
        </div>
    </div>
  )
}

export default Footer