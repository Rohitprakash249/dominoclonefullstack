import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function LocationFields(props) {
  return (
    <>
      <div className="flex flex-col">
        {/* div for top location field */}
        <p className="text-[0.8rem] text-[#7a7a7a]">Your Location</p>
        <div className="flex justify-between">
          <div className="flex">
            <p className="text-[#e31837]">
              <LocationOnIcon fontSize="small" />
            </p>
            <div className="flex flex-col">
              <p className="text-[0.95rem] font-semibold">Sector 37</p>
              <p className="text-[#7a7a7a]">sector etc, gurugram</p>
            </div>
          </div>

          <button className="text-xs font-semibold text-[#005491]">
            Change
          </button>
        </div>
      </div>
    </>
  );
}
