import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DeliveryTakeawayDinein(props) {
  const [activeTab, setActiveTab] = useState("delivery");

  return (
    <>
      <div className="flex justify-center  my-4 mx-4 text-xs items-center w-auto ">
        {/* background color bg-[#fafafa]  */}
        <div
          onClick={() => setActiveTab("delivery")}
          className={`rounded-md font-semibold py-2 w-full px-8 flex justify-center ${
            activeTab === "delivery"
              ? "bg-[#2e2e2e] text-white"
              : "bg-[#fafafa]  border text-[#676767]"
          }`}
        >
          <Link>
            <p>Delivery</p>
            <p>🗲 20 Mins</p>
            {/* <p>Select Store</p> */}
          </Link>
        </div>
        <div
          onClick={() => setActiveTab("takeaway")}
          className={`rounded-md font-semibold px-6 w-full   py-2 flex justify-center ${
            activeTab === "takeaway"
              ? "bg-[#2e2e2e] text-white"
              : "bg-[#fafafa] border text-[#676767]"
          }`}
        >
          <Link>
            <p>Takeaway</p>
            <p>Select Store</p>
          </Link>
        </div>
        <div
          onClick={() => setActiveTab("Dinein")}
          className={`rounded-md font-semibold w-full py-2 px-6 flex justify-center ${
            activeTab === "Dinein"
              ? "bg-[#2e2e2e] text-white"
              : "bg-[#fafafa] border text-[#676767]"
          }`}
        >
          <Link>
            <p>Dine-in</p>
            <p>Select Store</p>
          </Link>
        </div>
      </div>
    </>
  );
}

//   const Data = [
//     {
//       navigateTo: "/setLocation",
//       firstLine: "Delivery",
//       secondLine: "🗲 20 Mins",
//     },
//     {
//       navigateTo: "/selectStore",
//       firstLine: "Takeaway",
//       secondLine: "Select Store",
//     },
//     {
//       navigateTo: "/selectStore",
//       firstLine: "Dine-in",
//       secondLine: "Select Store",
//     },
//   ];

//   //    const navigate = useNavigate();
//   function createButton(singleData) {
//     return (
//       <DeliveryNavigation
//         navigateTo={singleData.navigateTo}
//         firstLine={singleData.firstLine}
//         secondLine={singleData.secondLine}
//       />
//     );
//   }
