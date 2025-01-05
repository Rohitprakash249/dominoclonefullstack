const customerInitialState = {
  name: "",
  contactNo: "",
  email: "",

  addresses: [],
  selectedAddress: {},
};

export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/updateName":
      return { ...state, name: action.payload };
    case "customer/updateContactNo":
      return { ...state, contactNo: action.payload };
    case "customer/updateEmail":
      return { ...state, email: action.payload };
    case "customer/updateAddress":
      return { ...state, addresses: action.payload };
    case "customer/selectedAddress":
      return { ...state, selectedAddress: action.payload };
    default:
      return state;
  }
}
