const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      // handle add to cart logic
      break;
    case 'INCREASE_ITEM':
      // handle increase item logic
      break;
    case 'DECREASE_ITEM':
      // handle decrease item logic
      break;
    case 'REMOVE_ITEM':
      // handle remove item logic
      break;
    default:
      return state;
  }
}
