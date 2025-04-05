import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Basic sanitation: strip tags & trim
    const cleanValue = value.replace(/<[^>]*>?/gm, "").trim();
    setForm({ ...form, [name]: cleanValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic front-end validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.");
      return;
    }

    // Optional: Check for suspicious content
    const suspiciousPatterns = /<script|onerror|onload|<iframe|javascript:/gi;
    if (
      suspiciousPatterns.test(form.name) ||
      suspiciousPatterns.test(form.email) ||
      suspiciousPatterns.test(form.message)
    ) {
      alert("Suspicious content detected. Message not sent.");
      return;
    }

    // Simulate successful submission
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-30 px-6 flex flex-col justify-center items-center text-gray-900">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>

      {/* Contact Form */}
      <form
  action="https://formspree.io/f/mqapyvzy"  // <-- replace with your real Formspree link
  method="POST"
  className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl space-y-6"
>
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
    <input
      type="text"
      name="name"
      required
      placeholder="Your name"
      className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
    <input
      type="email"
      name="email"
      required
      placeholder="Your email"
      className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
    <textarea
      name="message"
      required
      rows="5"
      placeholder="Your message"
      className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    ></textarea>
  </div>
  <button
    type="submit"
    className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 w-full"
  >
    Send Message
  </button>
</form>


      {/* Contact Info & Socials */}
      <div className="mt-12 text-center space-y-4">
        <p className="text-gray-700">Email: <span className="text-red-600">support@yacineautox.com</span></p>
        <p className="text-gray-700">Phone: <span className="text-red-600">+123 456 7890</span></p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4 text-2xl text-gray-800">
          <a href="#" className="hover:text-red-600 transition-colors"><FaFacebook /></a>
          <a href="#" className="hover:text-red-600 transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-red-600 transition-colors"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
