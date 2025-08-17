import ProductsList from '@/components/ProductsList'
import React from 'react'

const products = ({searchParams}:{searchParams:{category:string}}) => {
    const category=searchParams.category;
  return (
    <div>
        <ProductsList category={category} params='products'/>
    </div>
  )
}

export default products