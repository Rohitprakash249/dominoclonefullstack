import React from "react";
import { useNavigate } from "react-router-dom";

export default function SkipButton(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-end">
        <button className="my-4 mx-3 text-[#005491]">Skip</button>
      </div>
    </>
  );
}
