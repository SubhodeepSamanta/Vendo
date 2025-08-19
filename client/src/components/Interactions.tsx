"use client"
import useCartStore from '@/stores/cartStore'
import { ProductType } from '@/types'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const Interactions = ({product,selectedSize,selectedColor}:{product:ProductType,selectedSize:string,selectedColor:string}) => {
    const [quantity,setQuantity]= useState(1);
    const router= useRouter();
    const searchParams= useSearchParams();
    const pathname= usePathname();
    const {addToCart}= useCartStore();

    const handleProductChange=(type:string,value:string)=>{
        const params= new URLSearchParams(searchParams.toString());
        params.set(type,value);
        router.push(`${pathname}?${params.toString()}`);
    }


    const handleQuantityChange=(type:"increment"|"decrement")=>{
        if(type==='increment') setQuantity(prev=>prev+1);
        if(type==='decrement' && quantity>1) setQuantity(prev=>prev-1);
    }

    const handleAddProduct=()=>{
        addToCart({
            ...product,
            quantity,
            selectedSize,
            selectedColor
        })
    }

  return (
    <div className='flex flex-col gap-2 mb-4'>
        <div className='flex flex-col gap-2 text-sm text-gray-700 mb-2'>
            <p>Size</p>
            <div className='flex gap-2'>
                {product.sizes.map((size)=>(
                    <div className={`${selectedSize.toLowerCase()===size && 'border-1 border-gray-700'} p-[2px] rounded cursor-pointer`} key={size}onClick={()=>handleProductChange("size",size)}>
                        <div className='h-8 w-8 flex items-center justify-center border-1 border-gray-300 rounded'>{size.toUpperCase()}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex flex-col gap-2 text-sm text-gray-700 mb-2'>
            <p>Color</p>
            <div className='flex gap-2'>
            {
                product.colors.map((color)=>(
                    <div className={`p-[2px] rounded ${selectedColor.toLowerCase()===color && 'border-1 border-gay-700'} cursor-pointer`} key={color} onClick={()=>handleProductChange("color",color)}>
                        <div className='h-6 w-6 flex rounded' style={{backgroundColor:color}}></div>
                    </div>
                ))
            }
            </div>

        </div>
        <div className='flex flex-col gap-2 text-sm text-gray-700'>
            <p>Quantity</p>
            <div className='flex items-center gap-4'>
                <div className='p-1 border-1 border-gray-500 hover:bg-gray-100 rounded cursor-pointer' onClick={()=>handleQuantityChange("decrement")}><Minus className='h-4 w-4'/></div>
                <p className='text-lg'>{quantity}</p>
                <div className='p-1 border-1 border-gray-500 hover:bg-gray-100 rounded cursor-pointer' onClick={()=>handleQuantityChange("increment")}><Plus className='h-4 w-4'/></div>
            </div>
        </div>
        
              <div className='flex flex-col gap-4'>
              <button className='bg-gray-700 border-1 border-gray-700 text-gray-200 hover:bg-gray-900 flex gap-2 items-center justify-center p-2 rounded-md cursor-pointer' onClick={handleAddProduct}><Plus className='h-4 w-4'/> Add to Cart</button>
              <button className='hover:bg-gray-50 flex gap-2 items-center justify-center border-1 border-gray-700 p-2 rounded-md cursor-pointer'><ShoppingCart className='h-4 w-4'/>Buy this item</button>
              </div>
    </div>
  )
}

export default Interactions