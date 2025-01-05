import React from "react";

export default function AddToCart({ addToCart, productData, setQuantity }) {
  function addProductToCart(data) {
    setQuantity(1);
    addToCart(data);
  }
  return (
    <>
      <button
        onClick={() => addProductToCart(productData)}
        className="bg-[#e31837] w-[90px] h-[40px] px-4 py-2 rounded-lg font-semibold"
      >
        Add +
      </button>
    </>
  );
}
