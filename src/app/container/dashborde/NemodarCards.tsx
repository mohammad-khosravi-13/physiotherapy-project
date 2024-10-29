import React from 'react'

function NemodarCards() {
     const nemodar = [
       { text: "خدمات منزل", color: "bg-[#34B53A]" },
       { text: "خدمات کلینیک", color: "bg-[#FF3A29]" },
       { text: "محصولات", color: "bg-[#4339F2]" },
     ];
  return (
    <div className=" flex justify-end">
      {nemodar.map((iteme, index) => (
        <div key={index} className=" text-black flex items-center   m-2">
          <p>{iteme.text}</p>
          <span className={`${iteme.color} w-4 h-4 rounded-full mr-2`}></span>
        </div>
      ))}
    </div>
  );
}

export default NemodarCards