const PizzaInitialState = {
  bestSellers: [],
  cheeseVolcano: [],
};

export default function pizzaDataReducer(state = PizzaInitialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.name + action.payload };
    default:
      return state;
  }
}
