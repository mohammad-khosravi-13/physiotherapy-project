import Bime from "@/components/Bimeh/page";
import Header from "@/components/dashbord/Header/page";
import Didgah from "@/components/Didgah/page";
import Footer from "@/components/Footer/page";
import Product from "@/components/Product/page";
import Soalat from "@/components/Soalat/page";
import React from "react";

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
