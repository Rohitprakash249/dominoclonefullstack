import React, { useState } from "react";
import IncDecCart from "../../../UiComponents/IncDecCart";
import AddToCart from "../../CartComponents/AddToCart";

export default function OnlyBestSellers({
  productData,
  addToCart,
  cartData,
  increaseQuantityOfItem,
  decreaseQuantityOfItem,
}) {
  // const [quantity, setQuantity] = useState(0);
  const [quantity, setQuantity] = useState(setQTY);
  // console.log(productData);

  //this function will run on initial render
  function setQTY() {
    if (!cartData) return 0;
    if (cartData) {
      const data = cartData.filter((item) => item.id === productData.id);
      if (!data) return 0;
      const cartDataForThisItem = data[0];

      if (!cartDataForThisItem) return 0;
      if (cartDataForThisItem) {
        return cartDataForThisItem.quantity;
      }
    }
  }
  // setQTY();

  // above ends here
  const splittedDescription = productData.description.slice(0, 50) + "...";

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${productData.imageSource})`,
          backgroundSize: "100%",
        }}
        className="h-[350px] w-[350px] bg-purple-200 mx-2 my-10  garlicBreads flex flex-col justify-between rounded-lg"
      >
        <div className="flex justify-end relative  ">
          <div className=" absolute  bottom-[-75px] sm:bottom-[-75px]  xl:bottom-[-75px] xl:left-[230px] md:left-[230px] lg:left-[230px]  ">
            <img className="h-20 md:w-[80px]" src="top10.png" alt="badge"></img>
            <div className="absolute bottom-10 left-3 xl:bottom-10 xl:left-3 flex flex-col">
              <p className="font-semibold text-sm text-[#8d5d00]">Domino's</p>
              <p className="text-[#8d5d00] font-bold ml-[3px]  mt-[-7px]">
                TOP 10
              </p>
            </div>
          </div>
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
                  {productData.itemName}
                </p>
              </div>
              <p className="text-white text-xs">{splittedDescription}</p>
            </div>
            <div className="flex  justify-between border-t-[2px] border-[#706f6f] text-white bg-gradient-to-t from-black to-[#414141] opacity-90 items-center px-5 py-3 backdrop-blur-sm rounded-b-lg">
              <div>
                <p className="font-bold text-left">{productData.price}</p>
                <div className="flex items-center">
                  <p className=" border-b pb-1 border-dashed font-semibold text-xs">
                    Regular Plus | Cheese Volcano
                  </p>
                  <p className="mx-1 pb-1">&gt; </p>
                </div>
              </div>

              {quantity === 0 ? (
                <AddToCart
                  addToCart={addToCart}
                  productData={productData}
                  setQuantity={setQuantity}
                />
              ) : (
                <IncDecCart
                  increaseQuantityOfItem={increaseQuantityOfItem}
                  productid={productData.id}
                  qty={quantity}
                  decreaseQuantityOfItem={decreaseQuantityOfItem}
                  setQuantity={setQuantity}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// import React, { useState } from "react";
// import IncDecCart from "../../../UiComponents/IncDecCart";
// import AddToCart from "../../CartComponents/AddToCart";

// export default function OnlyBestSellers({
//   productData,
//   addToCart,
//   cartData,
//   increaseQuantityOfItem,
//   decreaseQuantityOfItem,
// }) {
//   // const [quantity, setQuantity] = useState(0);
//   const [quantity, setQuantity] = useState(setQTY);
//   // console.log(productData);

//   //this function will run on initial render
//   function setQTY() {
//     if (!cartData) return 0;
//     if (cartData) {
//       const data = cartData.filter((item) => item.id === productData.id);
//       if (!data) return 0;
//       const cartDataForThisItem = data[0];

//       if (!cartDataForThisItem) return 0;
//       if (cartDataForThisItem) {
//         return cartDataForThisItem.quantity;
//       }
//     }
//   }
//   setQTY();

//   // above ends here
//   const splittedDescription = productData.description.slice(0, 50) + "...";

//   return (
//     <>
//       <div
//         style={{
//           backgroundImage: `url(${productData.imageSource})`,
//           backgroundSize: "100%",
//         }}
//         className="h-[350px] w-[350px] bg-purple-200 mx-2 my-10  garlicBreads flex flex-col justify-between rounded-lg"
//       >
//         <div className="flex justify-end relative  ">
//           <div className=" absolute  bottom-[-75px] sm:bottom-[-75px]  xl:bottom-[-75px] xl:left-[230px] md:left-[230px] lg:left-[230px]  ">
//             <img className="h-20 md:w-[80px]" src="top10.png" alt="badge"></img>
//             <div className="absolute bottom-10 left-3 xl:bottom-10 xl:left-3 flex flex-col">
//               <p className="font-semibold text-sm text-[#8d5d00]">Domino's</p>
//               <p className="text-[#8d5d00] font-bold ml-[3px]  mt-[-7px]">
//                 TOP 10
//               </p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="text-black text-xs flex justify-end my-2">
//             <p className="bg-black text-white pt-[2px] pb-[4px] rounded-l-md px-2 opacity-80 bg-gradient-to-l from-black to-[#414141] font-semibold">
//               Customise &gt;
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
//                   {productData.itemName}
//                 </p>
//               </div>
//               <p className="text-white text-xs">{splittedDescription}</p>
//             </div>
//             <div className="flex  justify-between border-t-[2px] border-[#706f6f] text-white bg-gradient-to-t from-black to-[#414141] opacity-90 items-center px-5 py-3 backdrop-blur-sm rounded-b-lg">
//               <div>
//                 <p className="font-bold text-left">{productData.price}</p>
//                 <div className="flex items-center">
//                   <p className=" border-b pb-1 border-dashed font-semibold text-xs">
//                     Regular Plus | Cheese Volcano
//                   </p>
//                   <p className="mx-1 pb-1">&gt; </p>
//                 </div>
//               </div>

//               {quantity === 0 ? (
//                 <AddToCart
//                   addToCart={addToCart}
//                   productData={productData}
//                   setQuantity={setQuantity}
//                 />
//               ) : (
//                 <IncDecCart
//                   increaseQuantityOfItem={increaseQuantityOfItem}
//                   productid={productData.id}
//                   qty={quantity}
//                   decreaseQuantityOfItem={decreaseQuantityOfItem}
//                   setQuantity={setQuantity}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
