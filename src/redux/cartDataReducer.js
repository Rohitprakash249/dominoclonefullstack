const cartInitialState = {
  cart: [],
  cartQty: 0,
  coupon: "noCouponApplied",
};

export default function cartDataReducer(state = cartInitialState, action) {
  switch (action.type) {
    case "cart/addItem":
      return { ...state, cart: action.payload };
    case "cart/updateQuantity":
      return { ...state, cart: action.payload };
    case "cart/decreaseCartQty":
      return { ...state, cartQty: state.cartQty - 1 };
    case "cart/increaseCartQty":
      return { ...state, cartQty: state.cartQty + 1 };
    case "cart/applyCoupon":
      return { ...state, coupon: action.payload };
    case "cart/deleteCoupon":
      return { ...state, coupon: "noCouponApplied" };
    case "cart/setQuantity":
      return { ...state, cartQty: action.payload };
    default:
      return state;
  }
}
// {
//   id: "100",
//   itemName: "Margherita",
//   description: "Classic delight with 100% real mozzarella cheese.",
//   price: 250,
//   imageSource: "/photos/bestsellers/marghareeta.png",
//   quantity: 5,
//   totalValue: 1250,
// },
// {
//   id: "103",
//   itemName: "Peppy Paneer",
//   description:
//     "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika.",
//   price: 400,
//   imageSource: "/photos/bestsellers/peppypanner.png",
//   totalValue: 400,
//   quantity: 2,
// },
// {
//   id: "104",
//   itemName: "Veggie Paradise",
//   description:
//     "The awesome foursome! Golden corn, black olives, capsicum, red paprika.",
//   price: 375,
//   imageSource: "/photos/bestsellers/paradise.png",
//   quantity: 4,
//   totalValue: 375,
// },
