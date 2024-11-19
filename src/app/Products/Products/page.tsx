import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import prframe from "@/app/SVG/Rectangle Frame.svg";
import ProductContent from "@/app/container/ProductsView/ProductContent";
import ExplainProducts from "@/app/container/ProductsView/ExplainProducts";
import OtherProducts from "@/app/container/ProductsView/OtherProducts";

export default function Products() {
  return (
    <>
      <Header />
      <div className="flex justify-center rounded-[8px] relative mt-[70px]">
        <Image src={prframe} alt="" className="  w-[1240px] h-[272px]  " />
      </div>

     
      <ProductContent/>

      <ExplainProducts/>

      <OtherProducts/>
    </>
  );
}
