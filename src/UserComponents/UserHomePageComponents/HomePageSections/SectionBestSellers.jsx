import React from "react";
import { bestSellers } from "../../../data";
import OnlyBestSellers from "../PizzaItemComponents/OnlyBestSellers";

export default function SectionBestSellers({ children }) {
  return (
    <>
      <div className=" w-full bg-gradient-to-t block text-center from-white via-[#ffe0a4] to-white ">
        <div className="w-full py-3 flex flex-col items-center">
          <div className="flex flex-col justify-center ">
            <img
              className="h-[40px]"
              alt="sectionlogo"
              src="/sectionlogos/Bestsellers.png"
            ></img>
            <p className="bg-gradient-to-r py-2 text-xl font-bold from-[#e1b144]  to-[#855322] inline-block text-transparent bg-clip-text">
              Top 10 Bestsellers
            </p>
          </div>

          <p className="bg-gradient-to-r py-1 text-[#7f5300] block w-full text-center from-[#fff2da] via-[#ffe6b7] to-[#fff2da] ">
            in Gurgaon
          </p>
        </div>
        <div className="flex flex-row overflow-auto whitespace-nowrap ">
          {children}
          {/* {bestSellers.map((data) => (
            <OnlyBestSellers productData={data} />
          ))} */}
        </div>
      </div>
    </>
  );
}
