import React from "react";
import Map from "../UserComponents/MapComponents/Map";
import AddressHeader from "../UserComponents/AddressComponents/AddressHeader";
import SingleAddress from "../UserComponents/AddressComponents/SingleAddress";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Address(props) {
  // const addressData = [
  //   {
  //     addressType: "Home",
  //     flatOrBuildingNo: "455",
  //     Address: "Ravi Nagar,Gurugram,haryana,Pincode-122001",
  //   },
  //   {
  //     addressType: "Office",
  //     flatOrBuildingNo: "455",
  //     Address: "Ravi Nagar,Gurugram,haryana,Pincode-122001",
  //   },
  //   {
  //     addressType: "Other",
  //     flatOrBuildingNo: "455",
  //     Address: "Ravi Nagar,Gurugram,haryana,Pincode-122001",
  //   },
  // ];
  const addressData = useSelector((store) => store.customer.addresses);

  const navigate = useNavigate();
  function navigateTo() {
    navigate("/addNewAddress");
  }
  return (
    <>
      <AddressHeader />
      <div className="px-4 py-5 flex flex-wrap gap-3">
        {addressData.map((item) => (
          <SingleAddress addressInfo={item} key={item.addressInfo} />
        ))}
      </div>
      <div className="flex items-center justify-center addressFooter py-3 fixed bottom-0 w-full">
        <button
          onClick={navigateTo}
          className="border border-[black] py-1  text-[#2e2e2e] font-semibold rounded-md px-2 w-[50%]"
        >
          Add New Address
        </button>
      </div>
    </>
  );
}
