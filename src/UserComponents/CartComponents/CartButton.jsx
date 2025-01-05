import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function CartButton({ cartQty }) {
  return (
    <>
      <Link to="/cart">
        <div>
          <div className="bg-[#e31837] mx-3 my-2 flex px-3 relative text-white items-center w-[165px] h-[45px] rounded-lg font-semibold">
            <p className="absolute bottom-[24px] left-[22px] bg-black rounded-lg border text-xs px-2">
              {cartQty}
            </p>
            <ShoppingCartIcon sx={{ color: "white" }} />

            <p className="px-2">View Cart </p>
          </div>
        </div>
      </Link>
    </>
  );
}
