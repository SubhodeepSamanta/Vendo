"use client"
import React from 'react'

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

const page = () => {
  return (
    <div className='flex flex-col items-center gap-8 justify-center mt-8'>
        <h1 className='text-2xl font-medium'>Your Shopping Cart</h1>
            <div className='flex flex-col md:flex-row items-center gap-8 lg:gap-16 '>
                {
                steps.map((step)=>(
                    <div className='flex items-center justify-between text-gray-500 pb-2 text-lg border-b' key={step.id}>
                        <div className='bg-gray-200 text-gray-500 h-6 w-6 flex items-center justify-center text-sm mr-2 rounded-full'>{step.id}</div>
                        {step.title}
                    </div>
                ))
            }
            </div>
            <div className='w-full flex flex-col lg:flex-row gap-16'>
                <div className='w-full shadow-xl rounded-xl h-100 p-4'>dcssdsc</div>
                <div className='w-full shadow-xl rounded-xl h-max p-4'>dcssdsc</div>
            </div>
    </div>
  )
}

export default page