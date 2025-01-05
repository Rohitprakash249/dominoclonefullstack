import React, { useEffect, useState } from "react";
import UpdateLocationMap from "../UserComponents/UpdateCurrentLocation/UpdateLocationMap";
import { useSelector } from "react-redux";
import { replace, useNavigate } from "react-router-dom";

export default function UpdateCurrentLocation(props) {
  const [mapPosition, setMapPosition] = useState([28.4595, 75.0266]);
  const [updatingLocation, setUpdatingLocation] = useState(false);
  const navigate = useNavigate();
  const selectedAddress = useSelector(
    (store) => store.customer.selectedAddress
  );

  useEffect(function () {
    if (selectedAddress.location) {
      setMapPosition(selectedAddress.location);
    }
    if (!selectedAddress.location) {
      navigate("/address", { replace: true });
    }
  }, []);

  async function setCurrentLocation() {
    setUpdatingLocation(true);

    const newSelectedAddress = { ...selectedAddress, location: mapPosition };

    const res = await fetch("http://localhost:4000/api/setSelectedAddress", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSelectedAddress), // Send updated data as JSON
    });
    const response = await res.json();
    console.log(response);
    if (response.message === "success") {
      setTimeout(function () {
        setUpdatingLocation(false);
      }, 1000);
    }
  }

  // const [updatingAddress, setUpdatingAddress] = useState(false);
  // const dispatch = useDispatch();
  // async function setSelectedAddress() {
  //   setUpdatingAddress(true);

  //   const res = await fetch("http://localhost:4000/api/setSelectedAddress", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(addressInfo), // Send updated data as JSON
  //   });
  //   const response = await res.json();
  //   console.log(response);
  //   if (response.message === "success") {
  //     dispatch({ type: "customer/selectedAddress", payload: addressInfo });
  //     setTimeout(function updating() {
  //       setUpdatingAddress(false);
  //     }, 1000);
  //   }
  // }
  return (
    <>
      <div className="h-svh w-[100%] ">
        <UpdateLocationMap
          mapPosition={mapPosition}
          toSetMapPosition={setMapPosition}
        />
        <div className="w-full py-6 px-6">
          <button
            onClick={setCurrentLocation}
            className={`px-4 rounded-md py-2 w-full duration-1000 text-white font-semibold ${
              updatingLocation === true ? `bg-[#005491]` : `bg-[#e12a47]`
            } `}
          >
            {updatingLocation === true
              ? "Updating Location"
              : "Update Location"}
          </button>
        </div>
      </div>
    </>
  );
}
