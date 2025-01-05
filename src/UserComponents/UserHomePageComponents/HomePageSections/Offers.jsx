import React from "react";
import CouponDrawer from "../../../UiComponents/CouponDrawer";
export default function Offers(props) {
  const data = [
    {
      offerName: "Get ₹125 Off",
      offerDescription: "Up to 125 off on orders worth ₹699 or more.",
      couponCode: "PIZZA125",
      colorTop: "from-[#0050ae]",
      colorBottom: "to-[#1879d2]",
      terms: [
        "  Use code PIZZA125 and get upto 125 off on orders worth ₹699 or more.",
        "Offer is applicable on a minimum order value of €699 and above.",
        "Maximum discount to be availed via this coupon will be 125.",
        "    • Offer is applicable as per store operating hours",
        "• Offer cannot be combined with any other offer/coupon.",
        "Offer is applicable only on delivery orders.",
        "Coupon will not be applied if EveryDay Value Offers[EDV] are present in cart.",
        "• Coupon not applicable on Beverages, Meals, Combos, CLC box and on any item from Flat Price Menu.",
        " This offer is applicable only on orders via Dominos App, website and Mobile site.",
        "• Coupon is applicable once per day per user. In case of payment failure, please retry after 15 minutes.",
      ],
    },
    {
      offerName: "Get ₹80 Off",
      offerDescription: "Up to 80 off on orders worth ₹699 or more.",
      couponCode: "PIZZA80",
      colorTop: "from-[#c66002]",
      colorBottom: "to-[#d67a15]",
      terms: [
        "  Use code PIZZA80 and get upto 125 off on orders worth ₹699 or more.",
        "Offer is applicable on a minimum order value of €699 and above.",
        "Maximum discount to be availed via this coupon will be 125.",
        "    • Offer is applicable as per store operating hours",
        "• Offer cannot be combined with any other offer/coupon.",
        "Offer is applicable only on delivery orders.",
        "Coupon will not be applied if EveryDay Value Offers[EDV] are present in cart.",
        "• Coupon not applicable on Beverages, Meals, Combos, CLC box and on any item from Flat Price Menu.",
        " This offer is applicable only on orders via Dominos App, website and Mobile site.",
        "• Coupon is applicable once per day per user. In case of payment failure, please retry after 15 minutes.",
      ],
    },
    {
      offerName: "Get ₹30 Off",
      offerDescription: "Up to 80 off on orders worth ₹699 or more.",
      couponCode: "PIZZA30",
      colorTop: "from-[#04816a]",
      colorBottom: "to-[#04997e]",
      terms: [
        "  Use code PIZZA30 and get upto 30 off on orders worth ₹699 or more.",
        "Offer is applicable on a minimum order value of €699 and above.",
        "Maximum discount to be availed via this coupon will be 125.",
        "    • Offer is applicable as per store operating hours",
        "• Offer cannot be combined with any other offer/coupon.",
        "Offer is applicable only on delivery orders.",
        "Coupon will not be applied if EveryDay Value Offers[EDV] are present in cart.",
        "• Coupon not applicable on Beverages, Meals, Combos, CLC box and on any item from Flat Price Menu.",
        " This offer is applicable only on orders via Dominos App, website and Mobile site.",
        "• Coupon is applicable once per day per user. In case of payment failure, please retry after 15 minutes.",
      ],
    },
  ];

  function createCoupon(singleData) {
    return (
      <CouponDrawer
        key={singleData.offerName}
        couponName={singleData.offerName}
        couponDescription={singleData.offerDescription}
        gradientFrom={singleData.colorTop}
        gradientTo={singleData.colorBottom}
      />
    );
  }
  return (
    <>
      <div>
        <h1 className="font-bold mx-4 text-lg text-[#2e2e2e]">
          Offers for you
        </h1>
        <div className="flex flex-row overflow-auto px-3 whitespace-nowrap  text-center w-full sm:justify-start">
          {/* <div className="flex justify-between  text-center flex-wrap w-full sm:justify-start"> */}
          {data.map(createCoupon)}{" "}
        </div>
      </div>
    </>
  );
}
