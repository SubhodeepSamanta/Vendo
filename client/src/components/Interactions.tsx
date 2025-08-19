import { ProductType } from '@/types'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

const Interactions = ({product,selectedSize,selectedColor}:{product:ProductType,selectedSize:string,selectedColor:string}) => {
  return (
    <div className='flex flex-col gap-2 mb-4'>
        <div className='flex flex-col gap-2 text-sm text-gray-700 mb-2'>
            <p>Size</p>
            <div className='flex gap-2'>
                {product.sizes.map((size)=>(
                    <div className={`${selectedSize.toLowerCase()===size && 'border-1 border-gray-700'} p-[2px] rounded cursor-pointer`} key={size}>
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
                    <div className={`p-[2px] rounded ${selectedColor.toLowerCase()===color && 'border-1 border-gay-700'}`}>
                        <div className='h-6 w-6 flex rounded' style={{backgroundColor:color}}></div>
            </div>
                ))
            }
            </div>

        </div>
        <div className='flex flex-col gap-2 text-sm text-gray-700'>
            <p>Quantity</p>
            <div className='flex items-center gap-4'>
                <div className='p-1 border-1 border-gray-500 hover:bg-gray-100 rounded cursor-pointer'><Plus className='h-4 w-4'/></div>
                <p className='text-lg'>1</p>
                <div className='p-1 border-1 border-gray-500 hover:bg-gray-100 rounded cursor-pointer'><Minus className='h-4 w-4'/></div>
            </div>
        </div>
    </div>
  )
}

export default Interactions