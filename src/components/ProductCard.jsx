import React from 'react';

const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
    console.log('Product object:', product); // Log product to check its structure
  
    try {
      const response = await fetch('http://localhost:5000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1, // Add a default quantity of 1
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Product added to cart', data);
      } else {
        console.error('Error adding to cart', data.message);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };
  

  return (
    <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-transform transform hover:scale-105">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="text-lg text-red-800 font-bold">${product.price}</p>

      <button 
        onClick={handleAddToCart}
        className="mt-4 bg-red-800 hover:bg-red-700 text-white px-5 py-2 rounded-lg w-full transition-all duration-300 font-medium"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
