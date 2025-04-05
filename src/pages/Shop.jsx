import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Car Battery", price: 100, image: "/product-2.jpg" },
  { id: 2, name: "LED Headlights", price: 50, image: "/product-1.jpg" },
];

const Shop = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-30 px-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-red-800">
        Shop <span className="text-gray-900">Car Accessories</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
