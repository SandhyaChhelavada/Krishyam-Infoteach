import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Web Devlopment",
    "AI Prompt Engineering",
    "No-Code Website Development",
    "AI-Based UI/UX Design",
    "AI Chatbots",
    "AI Image Generation",
    "Graphic Design & Branding",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service || "Not specified"}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/916351804604?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    content: string;
  }[] = [
    {
      icon: MapPin,
      title: "Location",
      content: "Rajkot, Gujarat, India",
    },
    {
      icon: Mail,
      title: "Email",
      content: "schhelavadawork@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6351804604",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ff4d6d]/10 to-[#ff002b]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-full border border-[#ff002b]/20 mb-4">
            <span className="text-[#ff002b] font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Let's discuss
            how we can help transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#ff002b] to-[#ff4d6d] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Quick Contact</h4>
                <a
                  href="https://wa.me/916351804604?text=Hello%20KridHyan%20Infotech%2C%20I%20need%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#ff002b] to-[#ff4d6d] rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Fast turnaround time</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Competitive pricing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Expert team of developers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff002b]/20 to-[#ff4d6d]/20 rounded-3xl blur-2xl transform rotate-6"></div>

            <form
              onSubmit={handleSubmit}
              className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-[#ff002b]/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h3>

              <div className="space-y-5">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#ff002b] focus:bg-white focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#ff002b] focus:bg-white focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#ff002b] focus:bg-white focus:outline-none transition-all duration-300"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                {/* Service dropdown */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#ff002b] focus:bg-white focus:outline-none transition-all duration-300"
                  >
                    <option value="" disabled>
                      — Select a service —
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#ff002b] focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message via WhatsApp</span>
                  <Send
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                This will open WhatsApp with your message pre-filled
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
