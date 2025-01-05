import React, { useState } from "react";
import { Link } from "react-router";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Drawer from "./Drawer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function UserNavbar(props) {
  const [location, setLocation] = useState("");
  const currentAddress = useSelector((store) => store.customer.selectedAddress);

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white flex justify-between items-center px-3 py-4">
        <div className="text-sm ">
          <div className="flex ">
            <LocationOnIcon className="text-red-500 " fontSize="inherit" />
            <p className="text-red-600 flex text-md font-bold mx-1">
              {currentAddress && currentAddress.addressType}
              {!currentAddress && "No Location Selected"}
            </p>
          </div>
          <div className="text-[#898989]">
            <p className="text-sm ">
              {currentAddress && currentAddress.flatNo}{" "}
              {currentAddress && currentAddress.addressInfo}
              {!currentAddress && "Exact Location Required"}
            </p>
          </div>
        </div>
        <Drawer />
        {/* <img onClick={openDrawer} className="h-[30px]" src="logo.png"></img> */}
      </div>
      {/* Detect Location navbar */}
      <div className="bg-[#005491] py-3 text-xs  flex justify-between items-center text-white px-2">
        <div className="flex items-center ">
          <div className="text-white  h-auto px-1 py-1 ml-2  rounded-full bg-[#4d9ad1]">
            <LocationOnIcon />
          </div>
          <div className="px-2 ">
            <p>Give us your exact location</p>
            <p>for seamless delivery</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/UpdateCurrentAddress")}
          className=" border px-2 font-bold py-[7px] rounded-lg text-xs "
        >
          Detect location
        </button>
      </div>
    </>
  );
}
