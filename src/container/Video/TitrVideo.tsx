import React from 'react'
import Image from 'next/image'
import framefilmm from "@/svg/Frame film.svg"

export default function TitrVideo() {
  return (

    <>
    
    <div className="flex justify-center relative mt-20">
        <Image src={framefilmm} alt="" className="  w-[1248px] h-[80px] " />
      </div>
    
    </>
  )
}
