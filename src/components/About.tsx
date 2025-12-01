import React from "react";
import { Target, Eye, Award, Users, Zap, Shield } from "lucide-react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type FeatureItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const About: React.FC = () => {
  const timeline: TimelineItem[] = [
    { year: "2020", title: "Company Founded", description: "Started our journey with a vision to transform digital experiences" },
    { year: "2021", title: "AI Integration", description: "Pioneered AI-driven solutions for business automation" },
    { year: "2022", title: "Global Expansion", description: "Expanded services to international markets" },
    { year: "2023", title: "Industry Leader", description: "Recognized as a leading IT solutions provider" },
  ];

  const whyChooseUs: FeatureItem[] = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized performance for blazing-fast load times and smooth experiences" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security with 99.9% uptime guarantee" },
    { icon: Users, title: "Expert Team", description: "Skilled professionals with years of industry experience" },
    { icon: Award, title: "Quality Assured", description: "Rigorous testing and quality control for every project" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-3xl blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-full border border-[#ff002b]/20 mb-4">
            <span className="text-[#ff002b] font-semibold">About Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Who <span className="bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">We Are</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of innovators, dedicated to building cutting-edge digital solutions that empower businesses to thrive in the modern era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-[#ff002b]/20">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff002b] to-[#ff4d6d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses worldwide with innovative AI-driven digital solutions that enhance productivity, streamline operations, and drive sustainable growth in an ever-evolving technological landscape.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-[#ff002b]/20">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff002b] to-[#ff4d6d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the global leader in digital transformation, creating intelligent solutions that bridge the gap between human potential and technological innovation, making advanced technology accessible to all.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">Journey</span>
          </h3>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#ff002b] to-[#ff4d6d]" />
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="md:flex md:items-start md:justify-between">
                    <div className={`md:w-1/2 ${isLeft ? "md:pr-6 md:text-right" : "md:pl-6 md:ml-auto"}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-[#ff002b]/20 hover:scale-105 relative">
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isLeft ? "right-[-40px]" : "left-[-40px]"}`}>
                          <div className="w-12 h-12 bg-gradient-to-br from-[#ff002b] to-[#ff4d6d] rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                        </div>

                        <div className="text-3xl font-bold bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent mb-2">
                          {item.year}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why <span className="bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">Choose Us</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-[#ff002b]/20 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff002b]/5 to-[#ff4d6d]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#ff002b] to-[#ff4d6d] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
