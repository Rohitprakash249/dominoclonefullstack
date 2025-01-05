import React from "react";
import { useNavigate } from "react-router-dom";

export default function DrawerNavigation({ toNavigate, nameOfNaviation }) {
  const navigate = useNavigate();

  function drawerNavigate() {
    navigate(toNavigate);
  }
  return (
    <>
      <div className="px-5 py-3 text-black text-md">
        <p onClick={drawerNavigate}>{nameOfNaviation}</p>
      </div>
    </>
  );
}
