import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileLink({ imageLink, nameOflink, to }) {
  const navigate = useNavigate();
  function navigateTo() {
    navigate(to);
  }
  return (
    <>
      <div onClick={navigateTo} className="flex gap-8 items-center px-5 py-3">
        <img
          className="mix-blend-multiply h-[18px] w-[18px] "
          src={imageLink}
        ></img>
        <p className="text-[0.8rem]">{nameOflink}</p>
      </div>
    </>
  );
}
