
const ProductCard = ({ product }) => {
  return (
    <div 
      className="p-4 bg-secondary rounded-lg shadow-lg text-white transform transition duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
      <p className="text-lg text-primary font-bold">${product.price}</p>
      <button className="mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
