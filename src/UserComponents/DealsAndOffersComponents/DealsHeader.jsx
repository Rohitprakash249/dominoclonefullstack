import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
export default function DealsHeader(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex gap-2 items-center py-3 px-2 bg-white">
        <p>
          <ArrowBackIcon onClick={() => navigate(-1)} />
        </p>

        <p>Coupons</p>
      </div>
    </>
  );
}
