import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function CartAddress(props) {
  const address = useSelector((store) => store.customer.selectedAddress);
  const navigate = useNavigate();
  console.log(address);
  return (
    <>
      <div>
        <p className="text-sm ml-2  font-semibold md:text-[1rem] md:my-5 my-3">
          Choose a delivery address
        </p>
        <div
          className={` bg-white shadow-md flex justify-between items-center pl-2 pr-4 py-4  rounded-sm ${
            !address.addressType && `bg-pink-100`
          }`}
        >
          <div
            onClick={() => navigate("/address")}
            className="flex items-start justify-center "
          >
            <div className="px-3 flex pb-3">
              <PlaceIcon />
            </div>
            <div>
              <p className="text-[0.70rem] font-semibold">
                {address.addressType} {address.flatNo}{" "}
                {!address.addressType &&
                  "no address selected kindly choose one"}
              </p>
              <p className="text-[#b3b3b3] text-[0.70rem]">
                {address.addressInfo}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/address")}
            className="uppercase md:font-bold text-white bg-[#65ab0b] text-sm font-semibold px-1 md:px-5 rounded-sm md:py-[5px]"
          >
            Change
          </button>
        </div>
      </div>
    </>
  );
}
