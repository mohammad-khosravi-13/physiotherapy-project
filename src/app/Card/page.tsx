
import EresalOrder from '@/container/Card/EresalOrder'
import OrderCard from '@/container/Card/OrderCard'
import MainHeader from '@/container/MainHeader/MainHeader'
import React from 'react'

export default function card() {
  return (

    <>
    
   <MainHeader/>

   <div>
    <OrderCard/>
   </div>

   <EresalOrder/>
    </>
  )
}
