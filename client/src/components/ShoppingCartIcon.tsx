"use client"
import useCartStore from '@/stores/cartStore'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ShoppingCartIcon = () => {
  const {cart}= useCartStore();
  const {hasHydrated}=useCartStore();
  if(!hasHydrated) return null;
  return (
    <Link href='/cart' className='relative cursor-pointer'>
        <ShoppingCart className='h-5 w-5 mr-2 md:mr-5'/>
        <div className='absolute h-5 w-5 text-sm flex items-center justify-center rounded-full -top-2 right-2 bg-amber-300'>{cart.reduce((acc,item)=>acc+item.quantity,0)}</div>
    </Link>
  )
}

export default ShoppingCartIcon