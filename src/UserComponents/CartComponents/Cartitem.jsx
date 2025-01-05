import React from "react";
import CartPageQtyModificationButton from "./CartPageQtyModificationButton";

export default function Cartitem({ itemInfo, increaseQty, decreaseQty }) {
  return (
    <>
      <div className="bg-white px-3 py-3 md:px-6 md:py-6 my-2 flex justify-between shadow-md rounded-sm">
        <div className="flex items-stretch ">
          <img
            className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-sm"
            src={itemInfo.imageSource}
            alt="blahehe"
          ></img>
          <div className="ml-2 md:ml-5">
            <p className="font-semibold text-xs md:text-lg">
              {itemInfo.itemName}
            </p>
          </div>
        </div>
        <CartPageQtyModificationButton
          quantity={itemInfo.quantity}
          totalPrice={itemInfo.totalValue}
          increaseQty={increaseQty}
          itemId={itemInfo.id}
          decreaseQty={decreaseQty}
        />
      </div>
    </>
  );
}
// export default function Cartitem({ itemInfo }) {
//   console.log(itemInfo);
//   return (
//     <>
//       <div className="bg-white px-3 py-3 md:px-6 md:py-6 my-2 flex justify-between shadow-md rounded-sm">
//         <div className="flex items-stretch ">
//           <img
//             className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-sm"
//             src="/photos/bestsellers/extravegenza.png"
//             alt="blahehe"
//           ></img>
//           <div className="ml-2 md:ml-5">
//             <p className="font-semibold text-xs md:text-lg">
//               Burger Pizza - Classic Veg
//             </p>
//           </div>
//         </div>
//         <CartPageQtyModificationButton />
//       </div>
//     </>
//   );
// }
