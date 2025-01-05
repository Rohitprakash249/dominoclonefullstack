import React, { useEffect, useState } from "react";
import CartNavbar from "../UserComponents/CartComponents/CartNavbar";
import CartContent from "../UserComponents/CartComponents/CartContent";
import { useDispatch } from "react-redux";
import CartModal from "../UserComponents/CartComponents/CartTotalAddressOffers/CartModal";

export default function Cart(props) {
  const [displayError, setDisplayError] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong! kindly check!"
  );
  const dispatch = useDispatch();
  useEffect(() => {
    async function getUserDetails() {
      const res = await fetch(`https://dominoclonebackend.vercel.app/api/getUserDetails`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.name) {
        if (data.selectedAddress) {
          dispatch({
            type: "customer/selectedAddress",
            payload: data.selectedAddress,
          });
        }
      }
    }
    getUserDetails();
  });
  return (
    <>
      <div className="bg-[#f2f2f2] h-svh w-full">
        <CartModal
          setErrorOccured={setErrorOccured}
          errorOccured={errorOccured}
          errorMessage={errorMessage}
        />
        <CartNavbar />

        <CartContent
          setErrorOccured={setErrorOccured}
          setErrorMessage={setErrorMessage}
        />
      </div>
    </>
  );
}
