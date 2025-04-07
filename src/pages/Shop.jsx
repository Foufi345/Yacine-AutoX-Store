import { useEffect, useState } from 'react';
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen pt-30 px-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-red-800">
        Shop <span className="text-gray-900">Car Accessories</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product._id}
            product={{
              id: product._id,
              name: product.name,
              price: product.price,
              image: product.image || '/default-product.jpg',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;