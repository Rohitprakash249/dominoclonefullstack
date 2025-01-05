import React, { useState } from "react";
import IncDecCart from "../../../../UiComponents/IncDecCart";
import AddToCart from "../../../../UiComponents/AddToCart";

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
        <div className="text-black text-xs flex justify-end px-2 my-2">
          <p className="bg-white px-1 py-[1px] rounded-md uppercase opacity-80">
            BestSeller
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
            <p className="font-bold">$100</p>

            {quantity === 0 ? (
              <AddToCart incDecFunction={incDecFunction} />
            ) : (
              <IncDecCart incDecFunction={incDecFunction} qty={quantity} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// BestSeller Product starts

// export default function GarlicBreads(props) {
//     return (
//       <>
//         <div className="h-[350px] w-[350px] bg-purple-200 mx-2 my-10  garlicBreads flex flex-col justify-between rounded-lg">
//           <div className="text-black text-xs flex justify-end px-2 my-2">
//             <p className="bg-white px-1 py-[1px] rounded-md uppercase opacity-80">
//               BestSeller
//             </p>
//           </div>
//           <div>
//             <div className="flex flex-col px-3 py-4  bg-gradient-to-t from-black  opacity-[90%]">
//               <div className="flex items-center">
//                 <img
//                   className="h-[15px]"
//                   src="/vegsymbol.png"
//                   alt="vegsymbol"
//                 ></img>

//                 <p className="text-white text-lg font-bold mx-2">
//                   Garlic BreadSticks
//                 </p>
//               </div>
//               <p className="text-white text-xs">
//                 Baked to perfection. your perfect pizza partner
//               </p>
//             </div>
//             <div className="flex justify-between border-t-[2px] border-[#706f6f] text-white bg-gradient-to-t from-black to-[#414141] opacity-90 items-center px-5 py-3 backdrop-blur-sm rounded-b-lg">
//               <p className="">$100</p>
//               <button className="bg-[#e31837] px-4 py-2 rounded-lg font-semibold">
//                 Add +
//               </button>
//               {/* <div>Counter</div> */}
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

// BestSeller Product Ends

// export default function GarlicBreads(props) {
//     return (
//       <>
//         <div className="h-[300px] w-[300px] bg-purple-200 mx-10 my-10  garlicBreads flex flex-col justify-end rounded-lg">
//           <div className="flex flex-col px-3 py-4  bg-gradient-to-t from-black  opacity-[90%]">
//             <div className="flex items-center">
//               <img
//                 className="h-[15px]"
//                 src="/vegsymbol.png"
//                 alt="vegsymbol"
//               ></img>

//               <p className="text-white font-bold mx-2">Garlic BreadSticks</p>
//             </div>
//             <p className="text-white text-xs">
//               Baked to perfection. your perfect pizza partner
//             </p>
//           </div>
//           <div className="flex justify-between border-t-[2px] border-[#706f6f] text-white bg-gradient-to-t from-black to-[#414141] opacity-90 items-center px-5 py-5 backdrop-blur-sm rounded-b-lg">
//             <p className="">$100</p>
// {quantity === 0 ? (
//     <AddToCart incDecFunction={incDecFunction} />
//   ) : (
//     <IncDecCart incDecFunction={incDecFunction} qty={quantity} />
//   )}
//           </div>
//         </div>
//       </>
//     );
//   }
