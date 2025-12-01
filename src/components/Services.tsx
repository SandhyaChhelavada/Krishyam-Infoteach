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
        "Modern, responsive websites built with React, Next.js, and cutting-edge no-code tools for rapid deployment.",
      features: ["React & Next.js", "Responsive Design", "No-Code Solutions", "Fast Performance"],
      gradient: "from-[#ff002b] to-[#ff4d6d]",
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions that save time and reduce costs.",
      features: ["Process Automation", "Smart Workflows", "API Integration", "Efficiency Boost"],
      gradient: "from-[#ff4d6d] to-[#ff002b]",
    },
    {
      icon: Bot,
      title: "AI Chatbot Development",
      description: "Intelligent conversational AI chatbots that engage customers 24/7 and provide instant support.",
      features: ["Natural Language", "24/7 Support", "Multi-Platform", "Smart Responses"],
      gradient: "from-[#ff002b] to-[#ff4d6d]",
    },
    {
      icon: ImageIcon,
      title: "AI Image Generation",
      description: "Create stunning, unique visuals using advanced AI technology for marketing, branding, and content.",
      features: ["Custom Designs", "High Quality", "Fast Generation", "Multiple Styles"],
      gradient: "from-[#ff4d6d] to-[#ff002b]",
    },
    {
      icon: Workflow,
      title: "Business Workflow Automation",
      description: "Optimize operations with automated workflows that connect your tools and eliminate manual tasks.",
      features: ["Task Automation", "Tool Integration", "Cost Reduction", "Scalable Solutions"],
      gradient: "from-[#ff002b] to-[#ff4d6d]",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to delight users and drive engagement across all platforms.",
      features: ["User-Centered", "Modern Design", "Prototyping", "Brand Identity"],
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
