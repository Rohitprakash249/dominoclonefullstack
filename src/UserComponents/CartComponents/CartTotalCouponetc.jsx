import React from "react";
import CartAddress from "./CartTotalAddressOffers/CartAddress";
import CartOffers from "./CartTotalAddressOffers/CartOffers";
import CartCheckout from "./CartTotalAddressOffers/CartCheckout";

export default function CartTotalCouponetc({
  setErrorOccured,
  setErrorMessage,
}) {
  return (
    <>
      <div className=" flex flex-col md:w-[30%]  gap-3 lg:w-[380px]">
        {/* cart coupon total etc will go here */}
        <div className="">
          <CartAddress />
          <CartOffers />
          <CartCheckout
            setErrorOccured={setErrorOccured}
            setErrorMessage={setErrorMessage}
          />
        </div>
      </div>
    </>
  );
}
