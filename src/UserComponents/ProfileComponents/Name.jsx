import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
export default function Name({ name }) {
  const firstLetter = name.slice(0, 1);

  return (
    <>
      <div className="flex bg-[#cde6f6] py-4 px-2 mx-[2px] flex justify-between">
        <div className="flex gap-2 px-2">
          <p className="text-white rounded-full uppercase bg-[#0066a7] px-2">
            {firstLetter}
          </p>
          <p className="text-[#333333]">{name}</p>
        </div>
        <div className="text-[#6f7c85] mx-2">
          <BorderColorIcon fontSize="small" />
        </div>
      </div>
    </>
  );
}
