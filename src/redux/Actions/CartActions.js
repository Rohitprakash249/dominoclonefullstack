function addItem(item) {
  return { type: "cart/addItem", payload: item };
}

function updateQuantityOfSpecificProduct(item) {
  return { type: "cart/updateQuantity", payload: item };
}

function increaseCartQty() {
  return { type: "cart/increaseCartQty" };
}
function decreaseCartQty() {
  return { type: "cart/decreaseCartQty" };
}
export {
  addItem,
  increaseCartQty,
  decreaseCartQty,
  updateQuantityOfSpecificProduct,
};
