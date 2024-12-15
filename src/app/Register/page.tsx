import React from "react";
import Footer from "@/components/Footer/Footer";
import FormContent from "../../container/Register/FormContent";
import InformationForm from "../../container/Register/InformationForm";
import MainHeader from "@/container/MainHeader/MainHeader";

export default function register() {
  return (
    <>
      <MainHeader/>
      <div className="flex  w-full mt-14 ">
        <FormContent />
        <div className="h-[593px] border-l-2 border-[#0974A2] ml-24 mt-32">
        </div>
        <div className=" w-1/2 mt-32 ">
          <InformationForm />
        </div>
      </div>
      <div className="flex flex-col  items-center mt-14 gap-4 mb-10">
        <div className="flex items-center gap-2 ">
          <input type="radio" />
          <h3>پذیرش قوانین مرکز</h3>
        </div>
        <button className="btn bg-[#269200] text-white px-6 py-2 rounded-lg">
          ثبت
        </button>
      </div>

      <Footer />
    </>
  );
}
