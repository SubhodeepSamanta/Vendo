import { paymentFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

const PaymentForm = () => {
    const {register,handleSubmit,formState:{errors}}= useForm({resolver:zodResolver(paymentFormSchema)});
    const router= useRouter();
    const handlePaymentForm=()=>{

    }
  return (
    <form onSubmit={handleSubmit(handlePaymentForm)}>
        <p className='font-medium'>Payment Details</p>
        <div className='flex flex-col mt-4'>
            <label htmlFor="cardHolder" className='text-sm'>Card Holder</label>
            <input type="text" placeholder='Name' id='cardHolder' className='border-b-1 border-gray-600 outline-none p-1' {...register("cardHolder")} />
            {errors.cardHolder && (<p className='text-xs text-red-500 '>{errors.cardHolder.message}</p>)}
        </div>
        <div className='flex flex-col mt-4'>
            <label htmlFor="cardNumber" className='text-sm'>Email</label>
            <input type="text" placeholder='4242 4242 4242 4242' id='cardNumber' className='border-b-1 border-gray-600 outline-none p-1' {...register("cardNumber")} />
            {errors.cardNumber && (<p className='text-xs text-red-500 '>{errors.cardNumber.message}</p>)}
        </div>
        <div className='flex flex-col mt-4'>
            <label htmlFor="expirationDate" className='text-sm'>Expiration Date</label>
            <input type="text" placeholder='03/05' id='expirationDate' className='border-b-1 border-gray-600 outline-none p-1' {...register("expirationDate")} />
            {errors.expirationDate && (<p className='text-xs text-red-500 '>{errors.expirationDate.message}</p>)}
        </div>
        <div className='flex flex-col mt-4'>
            <label htmlFor="cvv" className='text-sm'>CVV</label>
            <input type="text" placeholder='123 Main Street' id='cvv' className='border-b-1 border-gray-600 outline-none p-1' {...register("cvv")} />
            {errors.cvv && (<p className='text-xs text-red-500 '>{errors.cvv.message}</p>)}
        </div>
        <button type='submit' className='w-full flex justify-center items-center gap-2 mt-8 bg-gray-800 hover:bg-gray-900 text-white rounded-lg py-2 cursor-pointer'>
                    Continue 
                    <ArrowRight className='h-4 w-4'/>
                  </button>
    </form>
  )
}

export default PaymentForm