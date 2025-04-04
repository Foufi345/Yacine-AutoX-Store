import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import BestSellingProducts from "../components/BestSellingProducts";
import CustomerReviews from "../components/CustomerReviews";

const Home = () => {
  const images = ["/hero-1.jpg", "/hero-2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white text-black">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>

        {/* Content on top */}
        <div className="relative z-20 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold animate-fadeIn">
            Upgrade Your Ride with Yacine AutoX
          </h1>
          <p className="mt-4 text-lg animate-fadeIn delay-200">
            Discover high-quality car accessories at unbeatable prices.
          </p>
          <a
            href="/shop"
            className="mt-6 inline-block bg-red-700 hover:bg-white text-white hover:text-red-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 animate-fadeIn delay-400"
          >
            Shop Now
          </a>
        </div>
      </section>


      {/* Best-Selling Products Section */}
      <BestSellingProducts />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* Footer */}
      <footer className="bg-gray-100 text-black mt-16 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Links */}
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="/about" className="hover:text-red-700">About Us</a></li>
              <li><a href="/shop" className="hover:text-red-700">Shop</a></li>
              <li><a href="/contact" className="hover:text-red-700">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold">Follow Us</h2>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-black hover:text-red-700 text-2xl"><FaFacebook /></a>
              <a href="#" className="text-black hover:text-red-700 text-2xl"><FaInstagram /></a>
              <a href="#" className="text-black hover:text-red-700 text-2xl"><FaTwitter /></a>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h2 className="text-xl font-bold">Our Location</h2>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097896!2d144.9556511153167!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df0f4c9b9%3A0x5045675218ce6e0!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1633100418597!5m2!1sen!2sus"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <p className="text-center mt-8">&copy; 2025 Yacine AutoX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
