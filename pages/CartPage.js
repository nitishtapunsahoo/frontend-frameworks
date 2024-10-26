import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../redux/actions/cartActions';
import './CartPage.css';

function CartPage() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalCost = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div>
              <button onClick={() => dispatch(decreaseItem(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseItem(item.id))}>+</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No items in cart.</p>
      )}
      <div className="cart-summary">
        <p>Total Cost: ${totalCost}</p>
        <button>Checkout (Coming Soon)</button>
        <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
      </div>
    </div>
  );
}

export default CartPage;
