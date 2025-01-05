import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function SingleCoupon({ couponInfo, toApplyCoupon }) {
  return (
    <>
      <div className="flex justify-between bg-white md:w-[32%] ">
        <div className="flex flex-col px-3 py-3 gap-5">
          <div className="flex gap-1 items-center">
            <img
              className="h-8 border rounded-sm border-[#c5c5c5]"
              src="/icons/off.png"
            ></img>
            <p className="border border-dashed  text-md font-semibold">
              {couponInfo.couponCode}
            </p>
          </div>
          <p className="text-xs text-[#676666]">{couponInfo.description}</p>
          <button className="text-xs text-left text-[#005491]">
            More details <KeyboardArrowDownIcon />
          </button>
        </div>
        <div className="border-l border-dashed font-bold text-sm my-4 flex flex-col justify-center text-center items-center gap-4 px-5 md:px-11">
          <div className="w-[100px]">
            <p> Save up to</p>
            <p> ₹{couponInfo.discount} with this</p>
            <p> offer</p>
          </div>
          <button
            onClick={() => toApplyCoupon(couponInfo)}
            className="bg-[#e31837] text-white px-6 rounded-md py-[0.6rem] font-semibold"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
// text-[#005491]
