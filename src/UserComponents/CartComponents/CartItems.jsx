import React from "react";
import Cartitem from "./Cartitem";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCartQty,
  decreaseCartQty,
  updateQuantityOfSpecificProduct,
} from "../../redux/Actions/CartActions";
export default function CartItems(props) {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cartData.cart);
  const cartQuantity = useSelector((store) => store.cartData.cartQty);

  async function increaseQuantityOfItem(idOfItem) {
    const data = cartData.find((item) => item.id === idOfItem);
    let index = cartData.findIndex((obj) => obj.id === idOfItem);
    const modifyThisData = JSON.parse(JSON.stringify(cartData));
    console.log(index);
    if (data && index >= 0) {
      modifyThisData[index] = {
        ...modifyThisData[index],
        quantity: data.quantity + 1,
      };
      modifyThisData[index] = {
        ...modifyThisData[index],
        totalValue: data.totalValue + data.price,
      };

      dispatch(updateQuantityOfSpecificProduct(modifyThisData));
      dispatch(increaseCartQty());
    }
  }
  async function decreaseQuantityOfItem(idOfItem) {
    const data = cartData.find((item) => item.id === idOfItem);
    let index = cartData.findIndex((obj) => obj.id === idOfItem);
    const modifyThisData = JSON.parse(JSON.stringify(cartData));
    const filteredData = cartData.filter((item) => item.id !== idOfItem);
    if (!data) return;
    if (!cartData) return;

    if (data.quantity === 1) {
      console.log(filteredData);
      dispatch(updateQuantityOfSpecificProduct(filteredData));
      dispatch(decreaseCartQty());
      return;
    }
    // this will check if quantity is zero if its zero then it will filter out data
    if (data) {
      modifyThisData[index] = {
        ...modifyThisData[index],
        quantity: data.quantity - 1,
      };
      modifyThisData[index] = {
        ...modifyThisData[index],
        totalValue: data.totalValue - data.price,
      };
      dispatch(updateQuantityOfSpecificProduct(modifyThisData));
      dispatch(decreaseCartQty());
      return;
    }
    //now to filter out old data and insert data in cart
  }
  if (cartData.length === 0) {
    dispatch({ type: "cart/deleteCoupon" });
  }
  return (
    <>
      <div className="flex w-[100%] md:w-[70%] flex-col ">
        <div className="flex justify-between text-sm text-[1rem]  font-semibold  md:my-5">
          <p className="pl-2  "> {cartQuantity} items you have selected</p>
          <p className="text-[#0066a7] font-bold">Explore Menu</p>
        </div>
        {cartData.map((singleItem) => (
          <Cartitem
            itemInfo={singleItem}
            key={singleItem.id}
            increaseQty={increaseQuantityOfItem}
            decreaseQty={decreaseQuantityOfItem}
          />
        ))}
        {/* //Here cart items will go */}
      </div>
    </>
  );
}
{
  /* <Cartitem />; */
}
// export default function CartItems(props) {
//   return (
//     <>
//       <div className="flex w-[100%] md:w-[70%] flex-col ">
//         <div className="flex justify-between text-sm text-[1rem]  font-semibold  md:my-5">
//           <p className="pl-2  "> 1 item you have selected</p>
//           <p className="text-[#0066a7] font-bold">Explore Menu</p>
//         </div>

//         {/* //Here cart items will go */}

//         <Cartitem />
//         <Cartitem />
//       </div>
//     </>
//   );
// }
