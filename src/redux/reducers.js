const initialState = {
  cart: [
    { id: 1, name: 'All day Ticket', price: 260, quantity: 2 },
    { id: 2, name: 'Cabana', price: 1200, quantity: 1 }
  ],
  totalPrice: 260 * 2 + 1200 * 1
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalPrice:
          state.totalPrice + action.payload.price * action.payload.quantity
      }

    case 'UPDATE_QUANTITY':
      const cartWithUpdatedQuantity = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      const newTotalPrice = cartWithUpdatedQuantity.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
      return {
        ...state,
        cart: cartWithUpdatedQuantity,
        totalPrice: newTotalPrice
      }

    default:
      return state
  }
}

export default cartReducer
