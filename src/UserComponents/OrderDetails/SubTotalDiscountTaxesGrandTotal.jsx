import React from "react";

export default function SubTotalDiscountTaxesGrandTotal(props) {
  return (
    <>
      <div className="px-2 md:px-3 py-2 flex flex-col rounded-b-md gap-1 border-x-[1px] border-b-[1px] text-sm sm:text-md">
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>₹558.00</p>
        </div>
        <div className="flex justify-between ">
          <p className="text-[#666666]">Discount</p>
          <p className="text-[#ea8c1e] font-bold">-₹60 </p>
        </div>
        <div className="flex justify-between">
          <p>Taxes & Charges</p>
          <p>₹44</p>
        </div>
        <div className="flex justify-between border-t-[1px] py-[0.4rem]">
          <p>Grand Total</p>
          <p>₹543.00</p>
        </div>
      </div>
    </>
  );
}
