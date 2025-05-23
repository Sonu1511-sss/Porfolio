import React, { useState } from "react";

const contactMethods = [
  { id: 1, title: "Email", detail: "Shubhamuprade0@gmail.com", icon: "📧" },
  { id: 2, title: "Phone", detail: "+91 9977423362", icon: "📞" },
  {
    id: 3,
    title: "LinkedIn",
    detail: "linkedin.com/shubham-uprade",
    icon: "🔗",
  },
  {
    id: 4,
    title: "GitHub",
    detail: "https://github.com/Sonu1511-sss",
    icon: "🐱",
  },
  {
    id: 5,
    title: "Location",
    detail: "Bhopal, Madhya Pradesh, India",
    icon: "📍",
  },
];

const Contact = () => {
  // Add form data state
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // Add status state for feedback messages
  const [status, setStatus] = useState("");

  // Handler to update form data state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Optional: Add form submit handler here

  return (
    <section className="py-12 mt-10 max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-gray-900 dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col">
          <label
            className="mb-2 font-semibold text-gray-300"
            htmlFor="from_name"
          >
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="mb-6 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            placeholder="Your full name"
          />

          <label
            className="mb-2 font-semibold text-gray-300"
            htmlFor="from_email"
          >
            Email
          </label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="mb-6 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
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
            className="mb-6 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
            placeholder="Write your message here..."
          />

          <button
            type="submit"
            className="relative inline-block w-44 px-6 py-3 border-2 border-white rounded-lg text-white font-semibold 
             bg-indigo-00 overflow-hidden group focus:outline-none 
             focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 shadow-lg transition-all duration-300 ease-in-out"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 
               transform -translate-x-full group-hover:translate-x-0 
               transition-transform duration-500 ease-out z-0"
            ></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
             <a href="#"> Send Message <span className="animate-bounce">↓</span></a>
            </span>
          </button>

          {status && (
            <p className="mt-4 text-center text-yellow-400 font-medium animate-pulse">
              {status}
            </p>
          )}
        </form>

        {/* Contact Methods */}
        <div className="bg-gray-900 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-teal-500">
            Contact Methods
          </h3>
          <ul className="space-y-5">
            {contactMethods.map(({ id, title, detail, icon }) => (
              <li
                key={id}
                className="flex items-center space-x-4 text-gray-300 hover:text-teal-400 transition cursor-pointer"
                onClick={() => {
                  if (title === "Email")
                    window.location.href = `mailto:${detail}`;
                  else if (title === "Phone")
                    window.location.href = `tel:${detail}`;
                  else if (title === "GitHub" || title === "LinkedIn")
                    window.open(
                      detail.startsWith("http") ? detail : `https://${detail}`,
                      "_blank"
                    );
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
