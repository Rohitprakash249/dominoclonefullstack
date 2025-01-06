import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch } from "react-redux";
export default function SingleAddress({ addressInfo }) {
  console.log(addressInfo);
  const [updatingAddress, setUpdatingAddress] = useState(false);
  const dispatch = useDispatch();
  async function setSelectedAddress() {
    setUpdatingAddress(true);

    const res = await fetch("https://dominoclonebackend.vercel.app/api/setSelectedAddress", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addressInfo), // Send updated data as JSON
    });
    const response = await res.json();
    console.log(response);
    if (response.message === "success") {
      dispatch({ type: "customer/selectedAddress", payload: addressInfo });
      setTimeout(function updating() {
        setUpdatingAddress(false);
      }, 1000);
    }
  }
  return (
    <>
      <div className="rounded-lg shadow-md shadow-gray-200 border-[1px] w-full sm:w-[50%] md:w-[32%] ">
        <div className="flex px-[7px] py-[9px]">
          <div className="text-[#5a5a5a]">
            {addressInfo.addressType === "Home" && (
              <HomeIcon fontSize="small" />
            )}
            {addressInfo.addressType === "Office" && (
              <ApartmentIcon fontSize="small" />
            )}
            {addressInfo.addressType === "Other" && (
              <LocationOnIcon fontSize="small" />
            )}
            {/* <ApartmentIcon fontSize="small" />
            <LocationOnIcon fontSize="small" /> */}
          </div>

          <div className="px-1 text-xs md:text-sm flex flex-col gap-1">
            <p className="font-semibold py-1 ">{addressInfo.addressType}</p>
            <p>{addressInfo.addressInfo}</p>
          </div>
        </div>
        <div className="flex text-[#005491] border-t-[1px] px-8 py-2 gap-4 font-bold text-xs">
          <button>Edit</button>
          <button className="border-l-[1px] border-black px-[14px]">
            Delete
          </button>
          <button
            onClick={setSelectedAddress}
            className={`border-l-[1px] border-black px-[14px] duration-1000 ${
              updatingAddress === true && `text-red-500`
            }`}
          >
            Delivery to this Address
          </button>
        </div>
      </div>
    </>
  );
}
