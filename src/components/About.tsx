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
  // timeline can be extended later if you want case-study links etc.
  const timeline: TimelineItem[] = [
    { year: "2020", title: "Company Founded", description: "Started our journey with a vision to transform digital experiences" },
    { year: "2021", title: "AI Integration", description: "Pioneered AI-driven solutions for business automation" },
    { year: "2022", title: "Global Expansion", description: "Expanded services to international markets" },
    { year: "2023", title: "Industry Leader", description: "Recognized as a leading IT solutions provider" },
  ];

  const whyChooseUs: FeatureItem[] = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized performance for blazing-fast load times and smooth experiences" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security with 99.9% uptime practices" },
    { icon: Users, title: "Expert Team", description: "Skilled professionals with years of industry experience" },
    { icon: Award, title: "Quality Assured", description: "Rigorous testing and quality control for every project" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* soft decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-3xl blur-3xl -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-full border border-[#ff002b]/20 mb-4">
            <span className="text-[#ff002b] font-semibold">About Us</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Who <span className="bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">We Are</span>
          </h2>

          {/* INSERTED: your full About text */}
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We started Kridhyam Infotech because we saw one big problem —
            businesses needed websites, branding, AI automations, and creative visuals…
            but they had to hire different agencies for each.
            <br /><br />
            We built a place where technology + creativity + AI come together.
            A place where every product feels smart, beautiful, and reliable.
            We didn’t just start a company…
            <br /><br />
            We started a movement of meaningful creation.
            <br /><br />
            At Kridhyam, every pixel has a purpose, every line of code has a meaning, and every project has a soul.
          </p>
        </div>

        {/* Mission & Vision (two-column responsive) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-[#ff002b]/20">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff002b] to-[#ff4d6d] rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative digital solutions that combine creativity, intelligence, and performance.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-[#ff002b]/20">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff002b] to-[#ff4d6d] rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a globally trusted brand for Web Development, AI Automation, and Digital Creativity — with a human-first approach.
            </p>
          </div>
        </div>

        {/* WHY WE STARTED (Your story copy) */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Why We Started
          </h3>

          <div className="max-w-4xl mx-auto text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              We started Kridhyam Infotech with one simple belief:
            </p>

            <p className="italic font-medium">
              Technology should feel personal. Not robotic, not complicated — just genuinely helpful.
            </p>

            <p>
              In a world full of rushed solutions and copy-paste work, we wanted to create a company that values:
            </p>

            <ul className="list-disc list-inside text-gray-700">
              <li>Quality over quantity</li>
              <li>Connection over transactions</li>
              <li>Innovation over imitation</li>
              <li>Service over shortcuts</li>
            </ul>

            <p>
              We saw how businesses struggled to find a team that understood <strong>design + code + AI + branding</strong> in one place — so we built that team.
            </p>

            <p>
              Kridhyam Infotech is our promise to do meaningful work, to respect every client’s vision, and to deliver solutions that elevate brands and empower people.
            </p>

            <p className="font-semibold">
              We didn’t just start a company… We started a movement of smart, soulful digital creation.
            </p>
          </div>
        </div>

        {/* Journey timeline */}
        {/* <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our <span className="bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">Journey</span>
          </h3>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#ff002b] to-[#ff4d6d]" />
            <div className="space-y-10">
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

                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent mb-2">
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
        </div> */}

        {/* Why choose us grid with optional image cards */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why <span className="bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">Choose Us</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-[#ff002b]/20 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff002b]/5 to-[#ff4d6d]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#ff002b] to-[#ff4d6d] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* optional visuals row - uses online images from Unsplash as examples - swap urls as needed */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c2a1b8b6b2da2d7e9f8deda3c16f3b4"
            alt="Team collaborating"
            className="rounded-2xl w-full h-56 object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8ed9e118a1b3f2e9baf5f7b20d6b1b8c"
            alt="AI concept"
            className="rounded-2xl w-full h-56 object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b1a6b9c077f6b1c9cfa19d88b4a2b56"
            alt="Design & code"
            className="rounded-2xl w-full h-56 object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
