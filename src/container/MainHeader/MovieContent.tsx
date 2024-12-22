import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import vectorfilm from "@/svg/Vector film.svg";
import vectorbishtar from "@/svg/Vector bishtar.svg";


export default function MovieContent() {
  return (

    <>
    
    <div className="pr-20 flex items-center gap-2 mt-10">
          <Image
            className=""
            src={vectorfilm}
            alt="Vector"
            width={23}
            height={17}
          />
          <h3>فیلم آموزشی</h3>
          <div className="flex justify-end gap-2 mr-[1050px]">
            <Link className="btn text-[16px]" href={"/video"}>
              بیشتر
            </Link>
            <Image
              className=""
              src={vectorbishtar}
              alt="Vector"
              width={5}
              height={11}
            />
          </div>
        </div>
    </>
  )
}
