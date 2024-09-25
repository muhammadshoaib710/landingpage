import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "Scramble Tech Soft", // You can set a default value for the recipient's name
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_if1e4ap', // Replace with your EmailJS service ID
      'template_kovxyeg', // Replace with your EmailJS template ID
      formData,
      'QtdFLZ22rbFg7hXq1' // Replace with your EmailJS user ID (public key)
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({ from_name: "", to_name: "Scramble Tech Soft", message: "" });
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto py-20 px-4 md:px-0">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black" style={{ fontFamily: 'Poppins', fontWeight: '600' }}>
            Contact Me
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-medium text-gray-700" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                Name
              </label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#EDA751] text-black py-2 px-4 rounded-full transition duration-300 hover:bg-yellow-600"
                style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}