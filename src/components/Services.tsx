import React, { useState } from "react";
import { Code, Bot, Image as ImageIcon, Workflow, Palette, Zap } from "lucide-react";

type ServiceItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  features: string[];
  gradient: string;
};

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: ServiceItem[] = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "We build fast, secure, and visually stunning websites using modern technologies like React, Vite, Tailwind, MERN, and Laravel.",
      features: ["Full-stack web apps", "Business websites", "E-commerce solutions", "Custom dashboards", "SEO-optimized websites", "Responsive mobile-first UI"],
      gradient: "from-[#ff002b] to-[#ff4d6d]",
    },
    {
      icon: Bot,
      title: "AI Chatbot Development",
      description: "Your business never sleeps.Our chatbots talk like humans, solve doubts instantly, and boost customer experience.",
      features: ["Natural Language", "Customer service", "E-commerce support", "Smart Responses", "Custom tone & personality", "Integrations with WhatsApp, website, Instagram"],
      gradient: "from-[#ff002b] to-[#ff4d6d]",
    },
    {
      icon: ImageIcon,
      title: "AI Image Generation",
      description: "We deliver high-quality AI images for branding, marketing, and social media. Perfect for businesses needing fast visuals.",
      features: ["Custom Designs", "High Quality", "AI product images", "Social media creatives" ,"Custom background removals", "Multiple Styles"],
      gradient: "from-[#ff4d6d] to-[#ff002b]",
    },
    {
      icon: Workflow,
      title: "Graphic Design & Branding",
      description: "From logo design to full identity systems — everything we create looks premium, modern, and memorable.",
      features: ["Logos", "Posters", "UI graphics", "Brand identity"],
      gradient: "from-[#ff002b] to-[#ff4d6d]",
    },
    {
      icon: Palette,
      title: "AI-Based UI/UX Design",
      description: "We design clean, interactive, and conversion-focused interfaces using AI tools. From UI kits to full app wireframes — everything is crafted with intelligent insights.",
      features: ["User flow + journey design", "Modern Design", "Branding + color system", "AI-generated wireframes"],
      gradient: "from-[#ff4d6d] to-[#ff002b]",
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions that save time and reduce costs.",
      features: ["Process Automation", "Smart Workflows", "API Integration", "Efficiency Boost"],
      gradient: "from-[#ff4d6d] to-[#ff002b]",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-[#ff4d6d]/10 to-[#ff002b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-full border border-[#ff002b]/20 mb-4">
            <span className="text-[#ff002b] font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What <span className="bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">We Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and accelerate growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
                style={{
                  transform: isHovered ? "translateY(-8px) rotateX(5deg)" : "translateY(0) rotateX(0)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff002b]/20 to-[#ff4d6d]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-200/50 group-hover:border-transparent overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="text-white" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#ff002b] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      className={`mt-6 px-6 py-2.5 bg-gradient-to-r ${service.gradient} text-white rounded-full font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Don't see what you're looking for?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Request Custom Solution
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
