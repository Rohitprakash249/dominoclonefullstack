import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header(props) {
  const nameOfUser = useSelector((store) => store.customer.name);
  const contactNoOfUser = useSelector((store) => store.customer.contactNo);

  const navigate = useNavigate();

  function goback() {
    navigate(-1);
  }
  return (
    <>
      <div className=" bg-[#0066a7] flex items-center justify-between px-1 ">
        <div className="flex items-center px-2 md:ml-7 my-[3px] ">
          <img
            onClick={goback}
            src="/sectionlogos/backarrow.png"
            alt="go back arrow"
          ></img>
          <img
            onClick={goback}
            className="py-1 px-4"
            src="/sectionlogos/domino.png "
            alt="logodomino"
          ></img>
        </div>
        <div className=" md:mr-6  ">
          <div className="text-white flex items-center px-2 md:pl-7 border-l-[1px] border-[#00cbbc]  ">
            <AccountCircleIcon fontSize="large" />
            <div className="md:px-4">
              {/* <p className="text-xs">Customer Name</p> */}
              <p className="text-xs md:text-sm">{nameOfUser}</p>
              <p className="text-[#55ccf6] text-xs">{contactNoOfUser}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
