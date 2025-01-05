import React, { useState } from "react";
import IncDecCart from "../UiComponents/IncDecCart";
import AddToCart from "../UiComponents/AddToCart";

export default function GarlicBreads(props) {
  const [quantity, setQuantity] = useState(0);

  function incDecFunction(typeOfAction) {
    if (typeOfAction === "increase") {
      setQuantity(quantity + 1);
    }
    if (typeOfAction === "decrease" && quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <>
      <div className="h-[350px] w-[350px] bg-purple-200 mx-2 my-10  garlicBreads flex flex-col justify-between rounded-lg">
        <div className="flex justify-end relative  ">
          <img
            className="h-20 absolute bottom-[-75px] left-[255px]  "
            src="pizzabadge.png"
            alt="badge"
          ></img>
        </div>

        <div>
          <div className="text-black text-xs flex justify-end my-2">
            <p className="bg-black text-white pt-[2px] pb-[4px] rounded-l-md px-2 opacity-80 bg-gradient-to-l from-black to-[#414141] font-semibold">
              Customise &gt;
            </p>
          </div>

          <div>
            <div className="flex flex-col px-3 py-4  bg-gradient-to-t from-black  opacity-[90%]">
              <div className="flex items-center">
                <img
                  className="h-[15px]"
                  src="/vegsymbol.png"
                  alt="vegsymbol"
                ></img>

                <p className="text-white text-lg font-bold mx-2">
                  Garlic BreadSticks
                </p>
              </div>
              <p className="text-white text-xs">
                Baked to perfection. your perfect pizza partner
              </p>
            </div>
            <div className="flex  justify-between border-t-[2px] border-[#706f6f] text-white bg-gradient-to-t from-black to-[#414141] opacity-90 items-center px-5 py-3 backdrop-blur-sm rounded-b-lg">
              <div>
                <p className="font-bold">$100</p>
                <div className="flex items-center">
                  <p className="text-sm border-b pb-1 border-dashed font-semibold text-xs">
                    Regular Plus | Cheese Volcano
                  </p>
                  <p className="mx-1 pb-1">&gt;</p>
                </div>
              </div>

              {quantity === 0 ? (
                <AddToCart incDecFunction={incDecFunction} />
              ) : (
                <IncDecCart incDecFunction={incDecFunction} qty={quantity} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
