import React from "react";
import { useParams } from "react-router-dom";
import OrderDetailsHeader from "../UserComponents/OrderDetails/OrderDetailsHeader";
import OrderAddressTime from "../UserComponents/OrderDetails/OrderAddressTime";
import OrderNoTimeItems from "../UserComponents/OrderDetails/OrderNoTimeItems";
import SubTotalDiscountTaxesGrandTotal from "../UserComponents/OrderDetails/SubTotalDiscountTaxesGrandTotal";

export default function OrderDetails(props) {
  const data = useParams();
  console.log(data);
  return (
    <>
      <div className="bg-[#f2f2f2] ">
        <OrderDetailsHeader />
        <div className="bg-white my-[0.4rem] h-svh ">
          <OrderAddressTime />
          <div className="px-1 md:px-3  ">
            <OrderNoTimeItems />
            <SubTotalDiscountTaxesGrandTotal />
          </div>
          <div className="w-full shadow-2xl px-4 py-4 fixed bottom-0 bg-white">
            <button className="bg-[#e31837] w-full text-white px-4 rounded-md py-[0.4rem] font-semibold">
              Reorder
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
