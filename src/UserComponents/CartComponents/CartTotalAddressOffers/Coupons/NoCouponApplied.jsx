import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
export default function NoCouponApplied(props) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate("/deals")}
        className="bg-white shadow-md flex justify-between items-center pl-2 pr-4 py-4  rounded-sm"
      >
        <div className="flex items-center justify-center ">
          <div className="px-3 flex ">
            <img src="/icons/coupon.png" alt="couponimage"></img>
          </div>
          <div>
            <p className="text-[0.70rem] text-black font-semibold">
              Select offer / Apply coupon
            </p>
            <p className="text-[#717171]  text-[0.70rem]">
              Get discount with your order
            </p>
          </div>
        </div>
        <button className="uppercase md:font-bold text-[#7b868f] bg-white text-sm font-semibold px-1 rounded-sm md:py-[5px]">
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
}
