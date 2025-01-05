import React from "react";
import CartButton from "../../CartComponents/CartButton";
import { useSelector } from "react-redux";
export default function UserFooter(props) {
  const cartQty = useSelector((store) => store.cartData.cartQty);
  // console.log(cartQty);
  return (
    <>
      <div className="flex justify-center w-full h-[54px] items-center fixed bottom-0 left-0 right-0 bg-white">
        <div className="flex justify-center">
          <div
            className={`flex items-center py-3 mx-8  ${
              cartQty > 0 ? "flex-col text-sm" : "px-1"
            }`}
          >
            <img
              alt="menuicon"
              className="h-[20px] w-[20px]"
              src="/icons/menuicon.png"
            ></img>
            <p className="ml-2">Menu</p>
          </div>
          {/* <div className="flex flex-col items-center py-3 mx-3 text-sm "> */}
          <div
            className={`flex items-center py-3 mx-3 ${
              cartQty > 0 ? "flex-col text-sm" : " px-7"
            }`}
          >
            <img
              alt="pizzaicon"
              className="h-[20px] w-[20px]"
              src="/icons/pizzaicon.png"
            ></img>
            {/* <span > 1+1 Offer</span> */}
            <p className="ml-2">1+1 Offer</p>
          </div>
        </div>
        {cartQty > 0 && <CartButton cartQty={cartQty} />}
      </div>
    </>
  );
}
// import React, { useState } from "react";
// import CartButton from "../../CartComponents/CartButton";
// import { useSelector } from "react-redux";
// export default function UserFooter(props) {
//   const [displayCart, setDisplayCart] = useState(true);
//   // const cartQty = useSelector((store) => store.cartData.cartQty);
//   // console.log(cartQty);
//   return (
//     <>
//       <div className="flex justify-center w-full h-[54px] items-center fixed bottom-0 left-0 right-0 bg-white">
//         <div className="flex justify-center">
//           <div
//             className={`flex items-center py-3 mx-8  ${
//               displayCart === true ? "flex-col text-sm" : "px-1"
//             }`}
//           >
//             <img
//               alt="menuicon"
//               className="h-[20px] w-[20px]"
//               src="/icons/menuicon.png"
//             ></img>
//             <p className="ml-2">Menu</p>
//           </div>
//           {/* <div className="flex flex-col items-center py-3 mx-3 text-sm "> */}
//           <div
//             className={`flex items-center py-3 mx-3 ${
//               displayCart === true ? "flex-col text-sm" : " px-7"
//             }`}
//           >
//             <img
//               alt="pizzaicon"
//               className="h-[20px] w-[20px]"
//               src="/icons/pizzaicon.png"
//             ></img>
//             {/* <span > 1+1 Offer</span> */}
//             <p className="ml-2">1+1 Offer</p>
//           </div>
//         </div>
//         {displayCart && <CartButton />}
//       </div>
//     </>
//   );
// }
