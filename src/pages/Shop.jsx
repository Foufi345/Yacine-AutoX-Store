import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Car Battery", price: 100, image: "/battery.jpg" },
  { id: 2, name: "LED Headlights", price: 50, image: "/headlights.jpg" },
];

const Shop = () => {
  return (
    <div className="bg-background min-h-screen p-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Shop <span className="text-primary">Car Accessories</span>
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
