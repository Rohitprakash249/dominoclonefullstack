import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import NoCouponApplied from "./Coupons/NoCouponApplied";
import CouponApplied from "./Coupons/CouponApplied";
import { useSelector } from "react-redux";
export default function CartOffers(props) {
  const couponData = useSelector((store) => store.cartData.coupon);
  useEffect(function update() {}, [couponData]);
  console.log(couponData);
  return (
    <>
      <div>
        <p className="text-sm ml-2 font-semibold md:text-[1rem] md:my-5 my-3">
          Offers
        </p>
        {couponData === "noCouponApplied" ? (
          <NoCouponApplied />
        ) : (
          <CouponApplied couponInfo={couponData} />
        )}

        {/*  */}
      </div>
    </>
  );
}
