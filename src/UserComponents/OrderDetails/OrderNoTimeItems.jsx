import React from "react";

export default function OrderNoTimeItems(props) {
  return (
    <>
      <div className="border-x-[1px] border-t-[1px] rounded-t-md ">
        <div className="border-b-[1px] px-2  md:px-3 py-2 ">
          <p className="font-bold md:text-[1.05rem]">Order #154</p>
          <div className="flex gap-2 md:text-sm">
            <p className="">16 Oct 2024 20:14</p> <p>I</p>
            <p> Payment Mode: Cash</p>
            <p>I</p> <p>1 item</p>
          </div>
        </div>
        <div className="px-2 md:px-3 py-2 text-[0.9rem] border-b-[1px] border-dashed">
          <div className="flex justify-between ">
            <p className="text-[#666666]">Qty & Item Name</p>
            <p className="text-[#666666]">Total</p>
          </div>
          <div>1 x Mexican Green Wave</div>
        </div>
      </div>
    </>
  );
}
