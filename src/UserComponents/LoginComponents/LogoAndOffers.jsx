import React from "react";

export default function LogoAndOffers(props) {
  return (
    <>
      <div className="px-2 md:px-4 py-3 border-b-[1px]">
        <div className="mb-8">
          <img
            className="mix-blend-multiply  "
            src="/sectionlogos/appLogo.png"
          ></img>
        </div>
        <div className="my-5 flex flex-col gap-7">
          <p className="font-semibold text-xl">
            Login to unlock awesome benefits
          </p>
          <div className="flex justify-center md:justify-between ">
            <div className="flex items-center">
              <img
                className="h-[25px] w-[25px] mr-3"
                src="/sectionlogos/loginpage/offers.png"
              ></img>
              <div className="text-sm md:text-[0.8rem]">
                <p>Personalized </p>
                <p>Offers</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[30px] w-[30px] mr-3"
                src="/sectionlogos/loginpage/loyaltyRewards.png"
              ></img>
              <div className="text-sm md:text-[0.8rem]">
                <p>Loyalty</p>
                <p>Rewards</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[25px] w-[25px] mr-3"
                src="/sectionlogos/loginpage/easyPayments.png"
              ></img>
              <div className="text-sm md:text-[0.8rem]">
                <p>Easy </p>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
