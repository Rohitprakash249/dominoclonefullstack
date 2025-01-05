import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function OrderTotalAndReorderButton({
  orderTotal,
  itemsOrdered,
}) {
  console.log(itemsOrdered);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function reOrderItems() {
    const total = itemsOrdered.reduce((accumulator, currentObject) => {
      return accumulator + currentObject.quantity;
    }, 0);

    // console.log(total);
    dispatch({ type: "cart/addItem", payload: itemsOrdered });
    dispatch({ type: "cart/setQuantity", payload: total });

    navigate("/cart");
  }
  return (
    <>
      <div className="flex justify-between px-3 py-3 items-center">
        <p>₹ {orderTotal}</p>
        <button
          onClick={reOrderItems}
          className="bg-[#e31837] text-white font-semibold py-2 px-5 rounded-md"
        >
          Reorder
        </button>
      </div>
    </>
  );
}
