import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";
export default function OrderHeader(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-2 items-center py-3 px-2 bg-white border-b-[2px] border-[#f2f2f2]">
        <p>
          <ArrowBackIcon onClick={() => navigate(-1)} />
        </p>
        <p className="font-semibold md:text-lg ">My Orders</p>
      </div>
    </>
  );
}
