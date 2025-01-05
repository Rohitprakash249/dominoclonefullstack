import React from "react";

export default function ItemsOrdered({ item }) {
  return (
    <>
      <div className="px-4 py-3 flex border-y-[1px] justify-between items-center">
        <div className="flex gap-2 items-center">
          <img className="h-[13px]" src="/vegsymbol.png"></img>
          <p className="text-sm text-[#2e2e2e]">{item.itemName}</p>
        </div>
        <p>{item.quantity}</p>
      </div>
    </>
  );
}
