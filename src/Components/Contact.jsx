import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  User,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Loader2,
} from "lucide-react";

const contactMethods = [
  {
    id: 1,
    title: "Email",
    detail: "Shubhamuprade0@gmail.com",
    actionType: "email",
    link: "mailto:Shubhamuprade0@gmail.com",
    icon: Mail,
    color: "from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/30",
  },
  {
    id: 2,
    title: "Phone",
    detail: "+91 9977423362",
    actionType: "phone",
    link: "tel:+919977423362",
    icon: Phone,
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    id: 3,
    title: "LinkedIn",
    detail: "linkedin.com/in/shubham-uprade-092542278",
    actionType: "link",
    link: "https://www.linkedin.com/in/shubham-uprade-092542278/",
    icon: Linkedin,
    color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
  },
  {
    id: 4,
    title: "GitHub",
    detail: "github.com/Sonu1511-sss",
    actionType: "link",
    link: "https://github.com/Sonu1511-sss",
    icon: Github,
    color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
  },
  {
    id: 5,
    title: "Location",
    detail: "Bhopal, Madhya Pradesh, India",
    actionType: "none",
    link: null,
    icon: MapPin,
    color: "from-rose-500/20 to-amber-500/20 text-rose-400 border-rose-500/30",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, id, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success(`Copied "${text}" to clipboard!`, {
      style: {
        background: "#111726",
        color: "#fff",
        border: "1px solid rgba(45, 212, 191, 0.3)",
      },
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error("Please fill in all fields before sending!", {
        style: {
          background: "#111726",
          color: "#fff",
          border: "1px solid rgba(239, 68, 68, 0.3)",
        },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_fdrkusw",
        "template_g7h0uq9",
        formData,
        "gFzus2HCWYTPCvbsu"
      );
      toast.success("Message sent successfully! I'll get back to you soon. 🚀", {
        duration: 4000,
        style: {
          background: "#111726",
          color: "#fff",
          border: "1px solid rgba(45, 212, 191, 0.4)",
        },
      });
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again later. ❌", {
        style: {
          background: "#111726",
          color: "#fff",
          border: "1px solid rgba(239, 68, 68, 0.3)",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#0b0f19] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <Toaster position="top-right" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles size={16} className="text-teal-400 animate-pulse" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Talk &{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg">
            Have a project in mind, want to discuss opportunities, or just want to say hi? 
            Send me a message and I'll get back to you as soon as possible!
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Methods Cards (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-[#111726]/80 backdrop-blur-xl border border-gray-800/80 rounded-2xl p-6 mb-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="text-teal-400" size={20} />
                Contact Info
              </h3>
              <p className="text-gray-400 text-sm">
                Feel free to connect directly through any of these channels.
              </p>
            </div>

            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isCopied = copiedId === method.id;

              return (
                <motion.div
                  key={method.id}
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group bg-[#111726]/60 backdrop-blur-xl border border-gray-800/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all duration-300 hover:border-teal-500/40 hover:bg-[#161f33]/80 shadow-lg hover:shadow-teal-500/5 cursor-pointer"
                  onClick={() => {
                    if (method.link) {
                      window.open(method.link, method.link.startsWith("mailto") || method.link.startsWith("tel") ? "_self" : "_blank");
                    }
                  }}
                >
                  <div className="flex items-center gap-4 min-w-0 pr-2">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${method.color} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider font-medium text-gray-400 mb-0.5">
                        {method.title}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-white truncate group-hover:text-teal-400 transition-colors">
                        {method.detail}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {(method.actionType === "email" || method.actionType === "phone") && (
                      <button
                        title="Copy to clipboard"
                        onClick={(e) => handleCopy(method.detail, method.id, e)}
                        className="p-2 rounded-lg bg-gray-800/80 text-gray-400 hover:text-teal-400 hover:bg-gray-700/80 transition-all duration-200"
                      >
                        {isCopied ? <Check size={16} className="text-teal-400" /> : <Copy size={16} />}
                      </button>
                    )}
                    {method.link && (
                      <div className="p-2 text-gray-500 group-hover:text-teal-400 transition-colors">
                        <ExternalLink size={16} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Status Card */}
            <div className="bg-[#111726]/60 backdrop-blur-xl border border-gray-800/80 rounded-2xl p-5 mt-6 flex items-center gap-4">
              <span className="relative flex h-3.5 w-3.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Current Status</p>
                <p className="text-xs text-gray-400">Available for internship & full-time roles!</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative bg-[#111726]/70 backdrop-blur-xl border border-gray-800/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/50 overflow-hidden">
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500" />

              <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form below and I'll respond as quickly as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="from_name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="from_name"
                      id="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      placeholder="Shubham Uprade"
                      className="w-full bg-[#0b0f19]/80 border border-gray-800 rounded-xl px-4 py-3.5 pl-11 text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="from_email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      name="from_email"
                      id="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-[#0b0f19]/80 border border-gray-800 rounded-xl px-4 py-3.5 pl-11 text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-500">
                      <MessageSquare size={18} />
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full bg-[#0b0f19]/80 border border-gray-800 rounded-xl px-4 py-3.5 pl-11 text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition duration-300 resize-none text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-slate-950 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-300 cursor-pointer text-base disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

