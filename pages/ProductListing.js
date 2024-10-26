import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import plantsData from '../data/plants';
import './ProductListing.css';

function ProductListing() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing">
      {plantsData.map((plant) => (
        <div key={plant.id} className="plant-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => handleAddToCart(plant)} disabled={plant.inCart}>
            {plant.inCart ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
