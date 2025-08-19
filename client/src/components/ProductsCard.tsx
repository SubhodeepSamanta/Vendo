"use client"

import useCartStore from '@/stores/cartStore'
import { ProductType } from '@/types'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ProductsCard = ({product}:{product:ProductType}) => {
  const [productTypes,setProductTypes]= useState({
    size:product.sizes[0],
    color:product.colors[0]
  })
  const {addToCart}= useCartStore();

  const handleProductType=({type,value}:{type:"size"|"color",value:string})=>{
    setProductTypes((prev)=>({...prev,[type]:value}))
  }

  const handleAddToCart=()=>{
    addToCart({
      ...product,
      quantity:1,
      selectedSize: productTypes.size,
      selectedColor: productTypes.color 
    })
  }

  return (
    <div className='shadow-lg rounded-lg overflow-hidden mt-4'>
      <div className='relative aspect-[2/3]'>
        <Link href={`products/${product.id}`}>
        <Image src={product.images[productTypes.color]} fill alt={product.name} className='object-cover hover:scale-105 transition-all duration-300'/>
        </Link>
      </div>
        <div className='flex flex-col gap-1 p-4'>
          <p className='font-medium'>{product.name}</p>
          <p className='text-sm text-gray-500'>{product.shortDescription}</p>
        </div>
        <div className='flex items-center justify-start pl-4 gap-6 mb-4'>
          <div className='flex flex-col text-gray-700 gap-1'>
            Size
            <select name="size" id="size" className='px-2 py-1 rounded-md ring ring-gray-300 text-black cursor-pointer' onChange={(e)=>handleProductType({type:"size",value:e.target.value})}>
              {product.sizes.map((size)=>(
                <option key={size} value={size}>{size.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div className='flex flex-col gap-2 text-gray-500 px-2 py-1'>
            Colors
            <div className='flex gap-4'>
              {product.colors.map((color)=>(
                <div key={color} className={`flex gap-4 border rounded-full cursor-pointer p-[2px] ${productTypes.color===color? 'border-gray-700':' border-gray-200'}`} onClick={()=>handleProductType({type:"color",value:color})}>
                <div className='h-[20px] w-[20px] rounded-full' style={{backgroundColor: color}}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between m-4'>
          <p className='text-md font-medium'>${product.price.toFixed(2)}</p>
          <div className='ring ring-gray-300 flex gap-2 text-sm items-center px-2 py-1 rounded-md shadow-xl cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-200' onClick={handleAddToCart}>
            <ShoppingCart/>
            Add to Cart
          </div>
        </div>
    </div>
  )
}

export default ProductsCard