import { ProductType } from '@/types';
import { Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const product:ProductType={
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  }

const ProductPage = ({params,searchParams}:{params:{id:string},searchParams:{size:string,color:string}}) => {
  const {size,color}= searchParams;
  const selectedSize= size || product.sizes[0] as string;
  const selectedColor= color || product.colors[0] as string;
  console.log(selectedColor);
  return (
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
      <div className='flex w-5/12 shadow-lg aspect-[2/3] relative bg-gray-50'>
      <Image src={product.images[selectedColor]} alt={product.name} fill className='object-contain rounded-md' />
      </div>
      <div className='flex flex-col w-7/12 shadow-lg p-4'>
      <p className='font-medium text-2xl mb-4'>{product.name}</p>
      <p className='text-sm text-gray-700 mb-4'>{product.description}</p>
      <p className='text-xl font-medium mb-4'>${product.price.toFixed(2)}</p>
      <div>
        Interaction
      </div>
      <div className='flex flex-col gap-4'>
      <button className='bg-gray-700 border-1 border-gray-700 text-gray-200 hover:bg-gray-900 flex gap-2 items-center justify-center p-2 rounded-md cursor-pointer'><Plus className='h-4 w-4'/> Add to Cart</button>
      <button className='hover:bg-gray-50 flex gap-2 items-center justify-center border-1 border-gray-700 p-2 rounded-md cursor-pointer'><ShoppingCart className='h-4 w-4'/>Buy this item</button>
      </div>
      <div className='flex gap-2 py-4'>
        <Image src='/klarna.png' alt='klarna' height={25} width={50} className='rounded-md'/>
        <Image src='/cards.png' alt='card' height={25} width={50} className='rounded-md'/>
        <Image src='/stripe.png' alt='stripe' height={25} width={50} className='rounded-md'/>
      </div>
      <div className='text-xs text-gray-500'>
        By clicking Pay Now, you agree to our <span className='underline hover:text-black'>Terms & Conditions</span> and <span className='underline hover:text-black'>Privacy Policy</span>. You authorised us to charge your selected payment method for the total amount shown. And sales are subject to our return and <span className='underline hover:text-black'>Refund Policies</span>.
      </div>
      </div>
    </div>
  )
}

export default ProductPage