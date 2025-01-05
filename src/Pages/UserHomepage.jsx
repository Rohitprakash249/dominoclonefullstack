import React, { useEffect } from "react";
import DeliveryTakeawayDinein from "../UserComponents/UserHomePageComponents/HomePageSections/DeliveryTakeawayDinein";
import Offers from "../UserComponents/UserHomePageComponents/HomePageSections/Offers";
import Cravings from "../UserComponents/UserHomePageComponents/HomePageSections/Cravings";
import WhatsNew from "../UserComponents/UserHomePageComponents/HomePageSections/WhatsNew";
import SectionBestSellers from "../UserComponents/UserHomePageComponents/HomePageSections/SectionBestSellers";
import UserNavbar from "../UserComponents/UserHomePageComponents/HomePageSections/UserNavbar";
import UserFooter from "../UserComponents/UserHomePageComponents/HomePageSections/UserFooter";
import PizzaSections from "../UserComponents/UserHomePageComponents/HomePageSections/PizzaSections";
import { useDispatch } from "react-redux";

export default function UserHomepage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getUserDetails() {
      const res = await fetch(`http://localhost:4000/api/getUserDetails`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.name) {
        dispatch({ type: "customer/updateAddress", payload: data.addresses });
        dispatch({ type: "customer/updateName", payload: data.name });
        dispatch({ type: "customer/updateContactNo", payload: data.contactNo });
        dispatch({ type: "customer/updateEmail", payload: data.email });
        dispatch({ type: "cart/addItem", payload: data.cartItems });
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
      <UserNavbar />
      <DeliveryTakeawayDinein />
      <Offers />
      <Cravings />
      <WhatsNew />
      <div className="h-2 bg-[#f1f1f1] mt-5"></div>

      <PizzaSections />

      <UserFooter />
    </>
  );
}
