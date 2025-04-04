import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black text-white p-4 fixed top-0 w-full flex justify-between items-center shadow-lg z-50">
      {/* Logo */}

      <Link to="/"><img  className="tracking-wide w-30" src="/logo-yacine.svg" alt="Yacine AutoX logo" /></Link>

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
