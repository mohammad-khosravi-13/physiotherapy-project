import React from "react";
import HeaderPanel from "@/container/Panel-Dashboard/HeaderPanel";
import Crod from "@/container/Panel-Dashboard/Crod";
import Form from "@/container/Panel-Dashboard/Form";

export default function paneldashboard() {
  return (
    <>
      <HeaderPanel/>

      <div className="flex w-full justify-between mt-20 ">
        <Crod />
        <Form />
      </div>
    </>
  );
}
