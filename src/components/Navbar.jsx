import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur shadow-md" : "bg-black"
    } text-white p-4 flex justify-between items-center`}>
      
      {/* Logo */}
      <Link to="/">
        <img className="tracking-wide w-20 lg:w-30" src="/logo-yacine.svg" alt="Yacine AutoX logo" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-red-700 transition-all duration-300">Home</Link>
        <Link to="/shop" className="hover:text-red-700 transition-all duration-300">Shop</Link>
        <Link to="/cart" className="hover:text-red-700 transition-all duration-300">Cart</Link>
        <Link to="/contact" className="hover:text-red-700 transition-all duration-300">Contact</Link>
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl text-white" />
          ) : (
            <FaBars className="text-2xl text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 right-0 w-2/3 h-screen bg-black text-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col items-start p-6 space-y-6">
          <li><Link to="/" onClick={closeMenu} className="hover:text-red-700">Home</Link></li>
          <li><Link to="/shop" onClick={closeMenu} className="hover:text-red-700">Shop</Link></li>
          <li><Link to="/cart" onClick={closeMenu} className="hover:text-red-700">Cart</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="hover:text-red-700">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
