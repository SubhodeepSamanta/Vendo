import { shippingDetailsInputs, shippingDetailsSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const ShippingDetails = ({setShippingForm}:{setShippingForm:(data: shippingDetailsInputs)=>void}) => {
    const {register,handleSubmit,formState:{errors}}= useForm({resolver:zodResolver(shippingDetailsSchema)});
    const router= useRouter();
    const handleShippingForm:SubmitHandler<shippingDetailsInputs>=(data)=>{
        setShippingForm(data),
        router.push('/cart?step=3',{scroll:false})
    }
  return (
    <form onSubmit={handleSubmit(handleShippingForm)}>
        <p className='font-medium'>Shipping Details</p>
        <div className='flex flex-col mt-4'>
            <label htmlFor="name" className='text-sm'>Name</label>
            <input type="text" placeholder='Name' id='name' className='border-b-1 border-gray-600 outline-none p-1' {...register("name")} />
            {errors.name && (<p className='text-xs text-red-500 '>{errors.name.message}</p>)}
        </div>
        <div className='flex flex-col mt-4'>
            <label htmlFor="email" className='text-sm'>Email</label>
            <input type="text" placeholder='email@email.com' id='email' className='border-b-1 border-gray-600 outline-none p-1' {...register("email")} />
            {errors.email && (<p className='text-xs text-red-500 '>{errors.email.message}</p>)}
        </div>
        <div className='flex flex-col mt-4'>
            <label htmlFor="phone" className='text-sm'>Phone</label>
            <input type="text" placeholder='1234567890' id='phone' className='border-b-1 border-gray-600 outline-none p-1' {...register("phone")} />
            {errors.phone && (<p className='text-xs text-red-500 '>{errors.phone.message}</p>)}
        </div>
        <div className='flex flex-col mt-4'>
            <label htmlFor="address" className='text-sm'>Address</label>
            <input type="text" placeholder='123 Main Street' id='address' className='border-b-1 border-gray-600 outline-none p-1' {...register("address")} />
            {errors.address && (<p className='text-xs text-red-500 '>{errors.address.message}</p>)}
        </div>
        <div className='flex flex-col mt-4'>
            <label htmlFor="city" className='text-sm'>City</label>
            <input type="text" placeholder='New York' id='city' className='border-b-1 border-gray-600 outline-none p-1' {...register("city")} />
            {errors.city && (<p className='text-xs text-red-500 '>{errors.city.message}</p>)}
        </div>
        <button type='submit' className='w-full flex justify-center items-center gap-2 mt-8 bg-gray-800 hover:bg-gray-900 text-white rounded-lg py-2 cursor-pointer'>
            Continue 
        <ArrowRight className='h-4 w-4'/>
        </button>
    </form>
  )
}

export default ShippingDetails