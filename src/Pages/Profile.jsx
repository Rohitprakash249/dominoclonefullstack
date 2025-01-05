import React from "react";
import ProfileNavbar from "../UserComponents/ProfileComponents/ProfileNavbar";
import Name from "../UserComponents/ProfileComponents/Name";
import ProfileLink from "../UserComponents/ProfileComponents/ProfileLink";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
  const data = useSelector((store) => store.customer);
  // console.log(data);
  const navigate = useNavigate();
  async function logout() {
    const res = await fetch(`http://localhost:4000/api/logout`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    // navigate("/login");
    if ((await data.message) === "logout success") {
      navigate("/login");
      // console.log("working");
    }
  }
  return (
    <>
      <ProfileNavbar />
      <div className="flex flex-col items-center md:pt-[50px] h-svh">
        <div className="w-full md:w-[30%]">
          <div className=" mx-2 my-3 shadow-md">
            <Name name={data.name} />
            <ProfileLink
              imageLink="/profile/phone.png"
              nameOflink={data.contactNo}
            />
            <ProfileLink
              imageLink="/profile/mail.png"
              nameOflink={data.email}
            />
          </div>
          <div className=" mx-2 my-3 shadow-md">
            <ProfileLink
              imageLink="/profile/wallet.png"
              nameOflink={"Domino's Wallet"}
            />
            <ProfileLink
              imageLink="/profile/orders.png"
              nameOflink={"My Orders"}
            />
            <ProfileLink
              to="/address"
              imageLink="/profile/location.png"
              nameOflink={"My Addresses"}
            />
            <div onClick={logout}>
              <ProfileLink
                imageLink="/profile/logout.png"
                nameOflink={"Logout"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
