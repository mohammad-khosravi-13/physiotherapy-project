import React from "react";
import Image from "next/image";
import Bime1 from "@/svg/Vector bime.svg";
import bimetamin from "@/svg/bime tamin.svg";
import bimemoalem from "@/svg/bime moalem.svg";
import bimeasia from "@/svg/bime asia.svg";
import bimedana from "@/svg/bime dana.svg";
import bimesaman from "@/svg/bime saman.svg";
import bimesalamt from "@/svg/bime salamat.svg";
import bimepasargad from "@/svg/bime pasargad.svg";
import bimeiran from "@/svg/bime iran.svg";

function Bime() {
  const bime = [
    {
      id: 1,
      name: "بیمه تامین اجتماعی",
      image: bimetamin,
    },
    {
      id: 2,
      name: "بیمه معلم",
      image: bimemoalem,
    },
    {
      id: 1,
      name: "بیمه آسیا",
      image: bimeasia,
    },
    {
      id: 1,
      name: "بیمه دانا",
      image: bimedana,
    },
    {
      id: 1,
      name: "بیمه سامان",
      image: bimesaman,
    },
    {
      id: 1,
      name: "بیمه سلامت",
      image: bimesalamt,
    },
    {
      id: 1,
      name: "بیمه پاسارگاد",
      image: bimepasargad,
    },
    {
      id: 1,
      name: "بیمه ایران",
      image: bimeiran,
    },
  ];

  return (
    <>
      <div className="flex justify-start mr-20 gap-2 mt-10">
        <Image src={Bime1} alt="Vector" width={19} height={21} />

        <h3 className="text-[18px]">بیمه های طرف قرار داد</h3>
      </div>
      <div className=" mr-24 mt-5 flex justify-around w-[1266px] h-[134px] gap-12 p-2">
        {bime.map((bime) => (
          <div key={bime.id}>
            <div>
              <Image src={bime.image} alt={bime.name} width={100} height={98} />
              <div className="mt-2 text-[16px] p-2 flex justify-center pr-5">{bime.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Bime;
