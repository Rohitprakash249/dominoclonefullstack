import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
export default function OrderDetailsHeader(props) {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="flex gap-2 items-center py-3 px-2 bg-white border-b-[2px] border-[#f2f2f2]"></div> */}
      <div className="flex gap-2 items-center justify-between py-3 md:py-3 px-2 bg-white ">
        <div className="flex gap-2">
          <p>
            <CloseIcon onClick={() => navigate(-1)} />
          </p>
          <p className="font-semibold pt-1 text-sm md:text-lg ">
            Order Details
          </p>
        </div>

        <button className="text-[#005491] font-semibold text-sm pr-2">
          HELP
        </button>
      </div>
    </>
  );
}
