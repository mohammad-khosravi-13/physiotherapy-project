import React from "react";
import Footer from "@/components/Footer/Footer";
import MainProducts from "../../container/MainProducts/MainProducts";
import MainHeader from "@/container/MainHeader/MainHeader";

function products() {
  return (
    <>
      <MainHeader/>
     <MainProducts/>

      <Footer />
    </>
  );
  
}

export default products;
