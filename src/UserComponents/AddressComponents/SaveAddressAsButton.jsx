import React, { useState } from "react";
import ModeIcon from "@mui/icons-material/Mode";
import { useDispatch, useSelector } from "react-redux";

export default function SaveAddressAsButton({
  setTypeAddress,
  typeAddress,
  address,
  flatOrBuilding,
  mapPosition,
}) {
  const [clicked, setClicked] = useState();
  const [editOther, setEditOther] = useState(false);
  const [other, setOther] = useState("location name");
  const [ifAddressSaved, setAddressSaved] = useState(false);
  const dispatch = useDispatch();
  const addressData = useSelector((store) => store.customer.addresses);
  const currentAddress = useSelector((store) => store.customer.selectedAddress);

  // console.log(addressData);
  function setWhichButtonIsClicked(item) {
    setClicked(item);
  }
  // console.log(currentAddress);

  async function blabla() {
    if (!mapPosition || !address) return;
    if (!flatOrBuilding) return;
    const data = {
      location: mapPosition,
      addressInfo: address,
      flatNo: flatOrBuilding,
      addressType: typeAddress,
    };
    const newData = [...addressData, data];

    const res = await fetch("http://localhost:4000/api/updateAddress", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData), // Send updated data as JSON
    });
    const response = await res.json();

    if ((await response.message) === "success") {
      dispatch({ type: "customer/updateAddress", payload: newData });
    }
    if (Object.entries(currentAddress).length === 0) {
      const res = await fetch("http://localhost:4000/api/setSelectedAddress", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send updated data as JSON
      });
      const response = await res.json();
      console.log(response);
    } else {
      console.log("Object is not empty");
    }
    // if (!currentAddress) {
    //   dispatch({ type: "customer/lastSelectedAddress", payload: data });
    // }
    setAddressSaved(true);

    setTimeout(function () {
      setAddressSaved(false);
    }, 1000);
  }
  return (
    <>
      <div>
        <p className="text-[#7a7a7a] mb-1">Save this address as</p>
        <div className="flex text-[0.8rem] gap-1">
          <p
            onClick={() => setTypeAddress("Home")}
            className={`border  px-2 py-[0.4rem] rounded-md ${
              typeAddress === "Home"
                ? `border-[#005491] text-[#155491] bg-[#ecf7ff]`
                : `border-[#dddddd] text-[#2e2e2e]`
            }`}
          >
            Home
          </p>
          <p
            onClick={() => setTypeAddress("Office")}
            className={`border  px-2 py-[0.4rem] rounded-md ${
              typeAddress === "Office"
                ? `border-[#005491] text-[#155491] bg-[#ecf7ff]`
                : `border-[#dddddd] text-[#2e2e2e]`
            }`}
          >
            Office
          </p>
          <p
            onClick={() => setTypeAddress("Other")}
            className={`border flex gap-2  px-2 py-[0.4rem] rounded-md ${
              typeAddress === "Other"
                ? `border-[#005491] text-[#155491] bg-[#ecf7ff]`
                : `border-[#dddddd] text-[#2e2e2e]`
            }`}
          >
            Other
            <p className="">
              <ModeIcon fontSize="small" />
            </p>
          </p>
        </div>
      </div>
      <button
        onClick={blabla}
        className={`text-white duration-1000 w-full py-[0.4rem] text-md font-bold mb-2 rounded-md ${
          ifAddressSaved === true ? `bg-[#005491]` : `bg-[#a6a6a6] `
        }`}
        // className="text-white w-full bg-[#a6a6a6] py-[0.4rem] text-md font-bold mb-2 rounded-md"
      >
        {ifAddressSaved === true ? "Address Saved Successfuly" : "Save Address"}
      </button>
    </>
  );
}
