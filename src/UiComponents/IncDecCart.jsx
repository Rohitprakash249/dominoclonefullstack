import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function IncDecCart({
  qty,
  increaseQuantityOfItem,
  productid,
  decreaseQuantityOfItem,
  setQuantity,
}) {
  // const cartData = useSelector((store) => store.cartData.cart);
  // const updatedData = cartData.filter((item) => item.id === productid);
  // useEffect(
  //   function () {
  //     console.log(updatedData);
  //     setQuantity(updatedData.quantity);
  //   },
  //   [cartData]
  // );
  // console.log(cartData);
  function increase(id) {
    increaseQuantityOfItem(id);
    setQuantity(qty + 1);
  }
  function decrease(id) {
    decreaseQuantityOfItem(id);
    setQuantity(qty - 1);
  }

  return (
    <>
      <div className="flex w-[90px] h-[40px]  justify-center items-center text-lg border  rounded-lg font-semibold">
        <button onClick={() => decrease(productid)} className="mr-2 ml-2 ">
          &minus;
        </button>

        <span className="text font-bold  mx-2">{qty}</span>
        <button onClick={() => increase(productid)} className="ml-2 mr-2 ">
          &#43;
        </button>
      </div>
    </>
  );
}
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";

// export default function IncDecCart({
//   qty,
//   increaseQuantityOfItem,
//   productid,
//   decreaseQuantityOfItem,
//   setQuantity,
// }) {
//   // const cartData = useSelector((store) => store.cartData.cart);
//   // const updatedData = cartData.filter((item) => item.id === productid);
//   // useEffect(
//   //   function () {
//   //     console.log(updatedData);
//   //     setQuantity(updatedData.quantity);
//   //   },
//   //   [cartData]
//   // );
//   // console.log(cartData);
//   function increase(id) {
//     increaseQuantityOfItem(id);
//     setQuantity(qty + 1);
//   }
//   function decrease(id) {
//     decreaseQuantityOfItem(id);
//     setQuantity(qty - 1);
//   }

//   return (
//     <>
//       <div className="flex w-[90px] h-[40px]  justify-center items-center text-lg border  rounded-lg font-semibold">
//         <button onClick={() => decrease(productid)} className="mr-2 ml-2 ">
//           &minus;
//         </button>

//         <span className="text font-bold  mx-2">{qty}</span>
//         <button onClick={() => increase(productid)} className="ml-2 mr-2 ">
//           &#43;
//         </button>
//       </div>
//     </>
//   );
// }
