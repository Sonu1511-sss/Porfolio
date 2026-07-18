import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast"; // npm install react-hot-toast

const contactMethods = [
  { id: 1, title: "Email", detail: "Shubhamuprade0@gmail.com", icon: "📧" },
  { id: 2, title: "Phone", detail: "+91 9977423362", icon: "📞" },
  { id: 3, title: "LinkedIn", detail: "linkedin.com/shubham-uprade", icon: "🔗" },
  { id: 4, title: "GitHub", detail: "https://github.com/Sonu1511-sss", icon: "🐱" },
  { id: 5, title: "Location", detail: "Bhopal, Madhya Pradesh, India", icon: "📍" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    toast.promise(
      emailjs.send(
        "service_fdrkusw", // replace with your EmailJS service ID
        "template_g7h0uq9", // replace with your EmailJS template ID
        formData,
        "gFzus2HCWYTPCvbsu" // replace with your EmailJS public key
      ),
      {
        loading: "Sending message...",
        success: "Message sent successfully ✅",
        error: "Failed to send message ❌",
      }
    );

    setFormData({ from_name: "", from_email: "", message: "" });
  };

  return (
    <section className="py-12 mt-10 max-w-5xl mx-auto px-6">
      <Toaster position="top-right" />
      <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-xl shadow-xl flex flex-col bg-gray-900"
        >
          <label className="mb-2 font-semibold text-gray-300" htmlFor="from_name">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="mb-6 p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            placeholder="Your full name"
          />

          <label className="mb-2 font-semibold text-gray-300" htmlFor="from_email">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="mb-6 p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            placeholder="you@example.com"
          />

          <label className="mb-2 font-semibold text-gray-300" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="mb-6 p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
            placeholder="Write your message here..."
          />

          <button
            type="submit"
            className="w-44 px-6 py-3 border-2 border-teal-400 rounded-lg text-teal-400 font-semibold hover:bg-teal-500 hover:text-white transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Methods */}
        <div className="p-8 rounded-xl shadow-xl bg-gray-900">
          <h3 className="text-3xl font-bold mb-6 text-teal-400">Contact Methods</h3>
          <ul className="space-y-5">
            {contactMethods.map(({ id, title, detail, icon }) => (
              <li
                key={id}
                className="flex items-center space-x-4 text-gray-300 hover:text-teal-400 transition cursor-pointer"
                onClick={() => {
                  if (title === "Email") window.location.href = `mailto:${detail}`;
                  else if (title === "Phone") window.location.href = `tel:${detail}`;
                  else if (title === "GitHub" || title === "LinkedIn")
                    window.open(detail.startsWith("http") ? detail : `https://${detail}`, "_blank");
                }}
                title={title}
              >
                <span className="text-3xl">{icon}</span>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="truncate max-w-xs">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
