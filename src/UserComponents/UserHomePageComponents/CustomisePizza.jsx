import React from "react";

export default function CustomisePizza(props) {
  return (
    <>
      <div className="garlicBreads h-[390px] w-[390px] flex flex-col justify-between ">
        <div className="flex justify-end">
          <button className="bg-white mx-3 my-3 px-3 py-1 rounded-full text-gray-400">
            X
          </button>
        </div>
        <div className="bg-gradient-to-t from-black from-45% via-black via-30% to-100% ">
          <div className=" text-white mt-7 px-3 pb-3 ">
            <div className="font-bold flex items-center">
              <img
                className="h-[15px] pr-2"
                src="/vegsymbol.png"
                alt="vegsymbol"
              ></img>
              <p>Farmhouse</p>
            </div>
            <div className="text-xs text-gray-200">
              Delightful combination of onion, capsicum,tomato & grilled
              mushroom
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
