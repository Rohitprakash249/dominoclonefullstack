import React, { useState } from "react";
import SingleCoupon from "./SingleCoupon";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CouponSection({ setErrorMessage, setErrorOccured }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cartData.cart);
  console.log(cartItems);
  const data = [
    {
      couponCode: "PIZZA30",
      discount: 30,
      description: "Up to ₹30 Off on orders of ₹200 or more",
      minimumOrderValue: 200,
    },
    {
      couponCode: "PARTY40",
      discount: 40,
      description: "Up to ₹40 Off on orders of ₹200 or more",
      minimumOrderValue: 200,
    },
    {
      couponCode: "PARTY60",
      discount: 60,
      description: "Up to ₹60 Off on orders of ₹400 or more",
      minimumOrderValue: 400,
    },
    {
      couponCode: "PARTY120",
      discount: 120,
      description: "Up to ₹120 Off on orders of ₹600 or more",
      minimumOrderValue: 600,
    },
  ];

  function applyCoupon(couponData) {
    if (cartItems.length === 0) {
      setErrorMessage(
        "No items are added in cart. First add items in cart before applying a coupon"
      );
      setErrorOccured(true);
      return;
    } else {
      const cartValue = cartItems.reduce(
        (acc, currentValue) => acc + currentValue.totalValue,
        0
      );

      if (cartValue > couponData.minimumOrderValue) {
        dispatch({ type: "cart/applyCoupon", payload: couponData });
        navigate("/cart");
      } else {
        setErrorMessage(
          `total cart value is less than ₹${couponData.minimumOrderValue}. Add more items in your cart.`
        );
        setErrorOccured(true);
      }
    }
    // setErrorMessage
    // dispatch({ type: "cart/applyCoupon", payload: couponData });
    // navigate("/cart");
  }
  return (
    <>
      <div className=" bg-[#eeeef1] px-3 py-3 flex gap-3 flex-wrap">
        {data.map((item) => (
          <SingleCoupon
            key={item.couponCode}
            couponInfo={item}
            toApplyCoupon={applyCoupon}
          />
        ))}
      </div>
    </>
  );
}
