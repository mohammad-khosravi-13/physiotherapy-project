import React from "react";
import Footer from "@/components/Footer/Footer";
import ReserveContent from "../../container/Reserve/ReserveContent";
import MainHeader from "@/container/MainHeader/MainHeader";


function reserve() {
  return (
    <>
      <MainHeader/>
     <ReserveContent/>
      <Footer />
    </>
  );
}

export default reserve;
