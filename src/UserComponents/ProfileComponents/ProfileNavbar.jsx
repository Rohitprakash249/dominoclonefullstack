import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function ProfileNavbar(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#0066a7] text-white flex py-3 px-2 items-center gap-3">
        <ArrowBackIcon onClick={() => navigate(-1)} />

        <p className="font-semibold text-lg">My Profile</p>
      </div>
    </>
  );
}
