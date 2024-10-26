export const addToCart = (plant) => ({
  type: 'ADD_TO_CART',
  payload: plant,
});

export const increaseItem = (id) => ({
  type: 'INCREASE_ITEM',
  payload: id,
});

export const decreaseItem = (id) => ({
  type: 'DECREASE_ITEM',
  payload: id,
});

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});
