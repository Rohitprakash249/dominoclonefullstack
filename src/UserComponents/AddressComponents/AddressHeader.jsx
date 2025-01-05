import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
export default function AddressHeader(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-2 items-center py-3 px-2 bg-white border-b-[1px]">
        <p>
          <ArrowBackIcon onClick={() => navigate(-1)} />
        </p>
        <p className="font-bold md:text-lg ">My Addresses</p>
      </div>
    </>
  );
}
