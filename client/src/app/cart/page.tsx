"use client"
import PaymentForm from '@/components/PaymentForm';
import ShippingDetails from '@/components/ShippingDetails';
import useCartStore from '@/stores/cartStore';
import { CartItemsType, shippingDetailsInputs } from '@/types';
import { ArrowRight, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

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
  const searchParams= useSearchParams();
  const router= useRouter();
  const activeStep= searchParams.get("step") || "1";
  const [shippingForm,setShippingForm]= useState<shippingDetailsInputs>();
  const {cart,removeFromCart}= useCartStore();

  return (
    <div className='flex flex-col items-center gap-8 justify-center mt-8'>
        <h1 className='text-2xl font-medium'>Your Shopping Cart</h1>
            <div className='flex flex-col md:flex-row items-center gap-8 lg:gap-16 '>
                {
                steps.map((step)=>(
                    <div className={`flex items-center justify-between ${activeStep==step.id.toString()?"text-black border-black":"text-gray-400"} pb-2 text-lg border-b`} key={step.id}>
                        <div className={` ${activeStep==step.id.toString()?"bg-black text-white":"bg-gray-200 text-gray-500"} h-6 w-6 flex items-center justify-center text-sm mr-2 rounded-full`}>{step.id}</div>
                        {step.title}
                    </div>
                ))
            }
            </div>
            <div className='w-full flex flex-col lg:flex-row gap-16'>
                <div className='w-full lg:w-7/12 shadow-xl rounded-xl p-4'>
                  {
                    activeStep=='1'? 
                    <>
                    <p className='font-medium '>Cart Items</p>
                    {cart.map((item)=>(
                      <div className='flex justify-between items-center p-4' key={item.id+item.selectedSize+item.selectedColor}>
                        <div className='flex items-center'>
                          <div className='relative h-32 w-32 bg-gray-50 rounded-xl object-cover overflow-hidden'>
                            <Image src={item.images[item.selectedColor]} fill alt={`${item.id}`} className='object-contain' />
                          </div>
                          <div className='text-sm'>
                            <p className='py-2 text-base font-medium'>{item.name}</p>
                            <p className='text-gray-500'>Quantity: {item.quantity}</p>
                            <p className='text-gray-500'>Size: {item.selectedSize}</p>
                            <p className='text-gray-500'>Color: {item.selectedColor}</p>
                            <p className='mt-4'>${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className='flex items-center justify-center h-8 w-8 rounded-full bg-red-200 text-red-600 cursor-pointer' onClick={()=>removeFromCart(item)}><Trash2 className='h-4 w-4'/></div>
                      </div>
                    ))}
                    </>
                    :
                    activeStep=='2' ?
                    <ShippingDetails setShippingForm={setShippingForm}/>
                    : (activeStep==='3' && shippingForm) ? <PaymentForm/> : <p className='text-red-500'>You need to fill out shipping details first.</p>
                  }
                </div>
                
                <div className='w-full lg:w-5/12 shadow-xl rounded-xl h-max p-4'>
                  <p className='font-medium'>Cart Details</p>
                  <div className='flex font-bold justify-between py-4 px-2'>
                    <p>Subtotal</p>
                    <p>${cart.reduce((acc,item)=>(acc+(item.price*item.quantity)),0).toFixed(2)}</p>
                  </div>
                  <div className='flex text-sm justify-between pb-2 px-2'>
                    <p>Discount</p>
                    <p className='text-red-400'>-$10</p>
                  </div>
                  <div className='flex text-sm justify-between py-2 mb-4 px-2'>
                    <p>Shipping</p>
                    <p>$10</p>
                  </div>
                  <hr className='border-gray-400' />
                  <div className='flex text-sm justify-between py-4 px-2'>
                    <p>Total</p>
                    <p>${cart.reduce((acc,item)=>(acc+(item.price*item.quantity)),0).toFixed(2)}</p>
                  </div>
                  {
                    activeStep=='1' &&
                  <button className='w-full flex justify-center items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg py-2 cursor-pointer' onClick={()=>router.push("/cart?step=2")}>
                    Continue 
                    <ArrowRight className='h-4 w-4'/>
                  </button>
                  }
                </div>
            </div>
    </div>
  )
}

export default page