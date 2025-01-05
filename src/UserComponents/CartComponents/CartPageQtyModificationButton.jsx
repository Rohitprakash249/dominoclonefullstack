import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function CartContent({
  totalPrice,
  quantity,
  increaseQty,
  itemId,
  decreaseQty,
}) {
  return (
    <>
      <div className="flex flex-col">
        <p className="text-sm text-right md:text-lg text-[#0066a7] font-semibold">
          Rs.{totalPrice}
        </p>
        <div className="flex items-center justify-center border-[#bababa] border-[1px] rounded-sm">
          {quantity === 1 ? (
            <button
              onClick={() => decreaseQty(itemId)}
              className="text-[#bababa] text-xs "
            >
              <DeleteForeverIcon fontSize="small" />
            </button>
          ) : (
            <button
              onClick={() => decreaseQty(itemId)}
              className="text-[#bababa] text-xs "
            >
              <RemoveIcon fontSize="small" />
            </button>
          )}

          <p className="border-x-[1px] text-sm sm:px-2 px-1 border-[#bababa] font-bold">
            {quantity}
          </p>

          <button
            onClick={() => increaseQty(itemId)}
            className="text-xs text-[#bababa]"
          >
            <AddIcon fontSize="small" />
          </button>
        </div>
      </div>
    </>
  );
}
