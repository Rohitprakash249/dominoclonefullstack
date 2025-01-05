import React, { useEffect, useState } from "react";
import OrderHeader from "../UserComponents/OrderComponents/OrderHeader";
import SingleOrder from "../UserComponents/OrderComponents/SingleOrder";

export default function Orders(props) {
  const [order, setOrders] = useState([]);
  useEffect(function getOrders() {
    async function getAllOrders() {
      const res = await fetch(`http://localhost:4000/api/getAllOrders`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();

      if (!data.orders) {
        setOrders([]);
      } else {
        setOrders(data.orders);
      }
    }
    getAllOrders();
  }, []);

  return (
    <>
      <OrderHeader />
      <div className="flex flex-wrap gap-3 px-3 py-3">
        {order.map((item) => (
          <SingleOrder key={item.itemsOrdered} orderInfo={item} />
        ))}

        {/* <SingleOrder />
        <SingleOrder /> */}
      </div>
    </>
  );
}
