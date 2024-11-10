import React from "react";
import Header from "../dashbord/Header/page";
import Product from "../Product/page";
import Bime from "../Bimeh/page";
import Soalat from "../Soalat/page";
import Didgah from "../Didgah/page";
import Footer from "../Footer/page";

export default function page() {
  return (
    <>
     <Header />
      <Product />
      <Bime />
      <Soalat />
      <Didgah />
      <Footer /> 
         </>
  );
}
