
import React from "react";
import Image from "next/image";
import prframe from "@/svg/Rectangle Frame.svg";
import ProductContent from "@/container/ProductsView/ProductContent";
import ExplainProducts from "@/container/ProductsView/ExplainProducts";
import OtherProducts from "@/container/ProductsView/OtherProducts";
import MainHeader from "@/container/MainHeader/MainHeader";

export default function products() {
  return (
    <>
      <MainHeader/>
      <div className="flex justify-center rounded-[8px] relative mt-[70px]">
        <Image src={prframe} alt="" className="  w-[1240px] h-[272px]  " />
      </div>

     
      <ProductContent/>

      <ExplainProducts/>

      <OtherProducts/>
    </>
  );
}
