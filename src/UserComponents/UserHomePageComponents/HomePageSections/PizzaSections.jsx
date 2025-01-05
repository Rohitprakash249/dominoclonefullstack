import React from "react";
import SectionBestSellers from "./SectionBestSellers";
import { bestSellers } from "../../../data";
import OnlyBestSellers from "../PizzaItemComponents/OnlyBestSellers";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseCartQty,
  decreaseCartQty,
  updateQuantityOfSpecificProduct,
} from "../../../redux/Actions/CartActions";
export default function PizzaSections(props) {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cartData.cart);
  const cartQuantity = useSelector((store) => store.cartData);
  function addToCart(pizzaDetails) {
    const checkIfExist = cartData.some((item) => item.id === pizzaDetails.id);
    if (checkIfExist === false) {
      const newData = [...cartData, pizzaDetails];
      dispatch(addItem(newData));
      dispatch(increaseCartQty());
    }
    console.log(cartData);
  }

  async function increaseQuantityOfItem(idOfItem) {
    const data = cartData.find((item) => item.id === idOfItem);
    let index = cartData.findIndex((obj) => obj.id === idOfItem);
    const modifyThisData = JSON.parse(JSON.stringify(cartData));
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

    if (!data) return;
    if (!cartData) return;
    const filteredData = cartData.filter((item) => item.id !== idOfItem);

    if (data.quantity === 0) {
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
  return (
    <>
      <SectionBestSellers>
        {bestSellers.map((data) => (
          <OnlyBestSellers
            cartData={cartData}
            addToCart={addToCart}
            productData={data}
            increaseQuantityOfItem={increaseQuantityOfItem}
            decreaseQuantityOfItem={decreaseQuantityOfItem}
            key={data.id}
          />
        ))}
      </SectionBestSellers>
    </>
  );
}
