import Header from '@/components/Header/Header'
import EresalOrder from '@/container/Card/EresalOrder'
import OrderCard from '@/container/Card/OrderCard'
import React from 'react'

export default function card() {
  return (

    <>
    
   <Header/>

   <div>
    <OrderCard/>
   </div>

   <EresalOrder/>
    </>
  )
}
