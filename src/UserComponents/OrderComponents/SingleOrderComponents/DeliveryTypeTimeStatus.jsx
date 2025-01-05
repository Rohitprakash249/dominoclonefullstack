import React from "react";

export default function DeliveryTypeTimeStatus({ deliveryStatus, time }) {
  const date = time.split("T");
  console.log(date);
  return (
    <>
      <div className="flex justify-between py-3 px-3">
        <div className="flex flex-col  ">
          <p className="font-semibold text-[0.95rem]">Delivery</p>
          <p className="text-xs">Order #154</p>
          {/* <p className="text-xs text-[#666666]"> 16 Oct 2024 20:14</p> */}
          <p className="text-xs text-[#666666]">{date[0]}</p>
        </div>
        <p className="uppercase border h-[1.4rem] text-sm font-semibold px-1 rounded-md border-[#ccc5a8] bg-[#f0ffe4] text-[#008115]">
          {deliveryStatus}
        </p>
      </div>
    </>
  );
}
