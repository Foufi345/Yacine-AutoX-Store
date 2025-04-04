import React from "react";

const BestSellingProducts = () => {
  const products = [
    { id: 1, name: "Car LED Headlights", price: "$45.99" },
    { id: 2, name: "Leather Steering Cover", price: "$19.99" },
    { id: 3, name: "Portable Tire Inflator", price: "$35.50" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Best-Selling Products</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-red-500 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;
