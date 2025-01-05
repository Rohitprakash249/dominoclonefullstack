import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function OrderAddressTime(props) {
  return (
    <>
      <div className="flex  justify-between py-3 px-1 md:px-3 md:py-3 flex-shrink-0">
        <div>
          <div className="flex md:gap-1 gap-0 ">
            <p>
              <LocationOnIcon fontSize="small" />
            </p>

            <div>
              <span className="flex flex-row text-sm md:text-[1rem]">
                <p>Delivered to : </p>
                <p className="font-semibold md:mx-2">location Name</p>
              </span>

              <p className="text-sm md:text-[0.95rem] ">
                complete Address, gurugram, haryana 122001
              </p>
            </div>
          </div>
        </div>
        <div className="flex  gap-2 items-center  md:pr-3">
          <img className="h-8 md:h-10 md:w-10" src="/delivered.png"></img>
          <div>
            <p className="font-semibold text-sm md:text-md  ">
              Order Delivered
            </p>
            <p className="text-sm md:text-[0.9rem]">on 16 Oct 2024 20:44</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-3 mt-1 sm:mt-3">
        <p className="text-[#417c45] py-2 text-[0.84rem] font-semibold px-3 rounded-lg bg-[#dfede0]">
          You've saved 60 on this order 🎉
        </p>
      </div>
    </>
  );
}
