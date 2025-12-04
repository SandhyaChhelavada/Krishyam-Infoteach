// src/components/Projects.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  tech: string[];
  description: string;
  image: string;
  fullDescription: string;
  // If you want real-time sorting later, add createdAt: string | Date
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        tech: ["React", "Node.js", "MongoDB"],
        description: "Modern online shopping experience with AI recommendations",
        image:
          "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=800",
        fullDescription:
          "A comprehensive e-commerce solution featuring real-time inventory management, AI-powered product recommendations, secure payment processing, and an intuitive admin dashboard. Built with scalability in mind to handle thousands of concurrent users.",
      },
      {
        id: 2,
        title: "AI Chatbot Suite",
        category: "AI",
        tech: ["Python", "TensorFlow", "React"],
        description: "Intelligent customer support automation system",
        image:
          "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        fullDescription:
          "Advanced conversational AI platform that understands context, learns from interactions, and provides personalized responses. Integrated with multiple communication channels including web chat, WhatsApp, and social media platforms.",
      },
      {
        id: 3,
        title: "Business Dashboard",
        category: "Analytics",
        tech: ["Next.js", "TypeScript", "PostgreSQL"],
        description: "Real-time analytics and reporting platform",
        image:
          "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        fullDescription:
          "Comprehensive business intelligence platform offering real-time data visualization, custom reporting, predictive analytics, and automated insights. Helps businesses make data-driven decisions with confidence.",
      },
      {
        id: 4,
        title: "Healthcare App",
        category: "Mobile",
        tech: ["React Native", "Firebase", "AI"],
        description: "Telemedicine platform with AI diagnostics",
        image:
          "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        fullDescription:
          "Revolutionary healthcare application connecting patients with doctors through secure video consultations, AI-assisted preliminary diagnostics, prescription management, and health tracking features.",
      },
      {
        id: 5,
        title: "Marketing Automation",
        category: "Automation",
        tech: ["Python", "API Integration", "AI"],
        description: "Multi-channel marketing campaign automation",
        image:
          "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800",
        fullDescription:
          "Sophisticated marketing automation platform that orchestrates campaigns across email, social media, and SMS. Features AI-powered content generation, audience segmentation, and performance analytics.",
      },
      {
        id: 6,
        title: "Smart IoT System",
        category: "IoT",
        tech: ["IoT", "Cloud", "Machine Learning"],
        description: "Industrial automation and monitoring solution",
        image:
          "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
        fullDescription:
          "Enterprise IoT platform for real-time monitoring and control of industrial equipment. Includes predictive maintenance, energy optimization, and automated alert systems powered by machine learning.",
      },
      {
        id: 7,
        title: "Product UI Redesign",
        category: "UI/UX",
        tech: ["Figma", "React", "Accessibility"],
        description: "High-conversion UI/UX redesign for SaaS",
        image:
          "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=800",
        fullDescription:
          "End-to-end design system and product redesign focused on accessibility and conversion. Includes prototypes, usability testing reports, and a component library for faster engineering adoption.",
      },
      {
        id: 8,
        title: "Branding & Graphics Pack",
        category: "Graphic Design",
        tech: ["Illustrator", "Photoshop", "Figma"],
        description: "Complete brand identity and marketing assets",
        image:
          "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800",
        fullDescription:
          "Full branding suite: logos, color palettes, social templates, and print-ready assets. Created for a multi-country product launch to ensure consistent visual identity.",
      },
      {
        id: 9,
        title: "Image Processing Tool",
        category: "Image",
        tech: ["Python", "OpenCV", "Docker"],
        description: "Automated image enhancement & tagging",
        image:
          "https://images.pexels.com/photos/1643381/pexels-photo-1643381.jpeg?auto=compress&cs=tinysrgb&w=800",
        fullDescription:
          "Server-side image pipeline performing denoise, resize, auto-crop and smart-tagging. Designed to integrate into CMS and CDN workflows for performant media delivery.",
      },
      // add more projects if desired...
    ],
    []
  );

  const tabs = useMemo(
    () => [
      "All",
      "Web Development",
      "UI/UX",
      "AI",
      "Image",
      "Graphic Design",
      "Mobile",
      "IoT",
      "Analytics",
      "Automation",
    ],
    []
  );

  // group projects by category and sort each group desc by id (newest first)
  const groupedByCategory = useMemo(() => {
    const map = new Map<string, Project[]>();
    for (const p of projects) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    }
    // sort each category's array by id desc
    for (const [k, arr] of map.entries()) {
      arr.sort((a, b) => b.id - a.id);
      map.set(k, arr);
    }
    return map;
  }, [projects]);

  // visibleProjects respects the user's new rules:
  // - All: only the latest project per category, max 6 total (most recent first)
  // - Category tab: up to 2 newest projects for that category
  const visibleProjects = useMemo(() => {
    if (activeTab === "All") {
      // take latest (first) from each category
      const latestPerCategory: Project[] = [];
      for (const [, arr] of groupedByCategory) {
        if (arr.length > 0) latestPerCategory.push(arr[0]);
      }
      // sort latestPerCategory by id desc and limit to 6
      latestPerCategory.sort((a, b) => b.id - a.id);
      return latestPerCategory.slice(0, 6);
    } else {
      const arr = groupedByCategory.get(activeTab) ?? [];
      return arr.slice(0, 2); // up to 2 newest in this category
    }
  }, [activeTab, groupedByCategory]);

  // keyboard tablist handling
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  useEffect(() => {
    if (tabsRef.current[0]) tabsRef.current[0].setAttribute("tabIndex", "0");
  }, []);

  const onTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    const max = tabs.length - 1;
    if (e.key === "ArrowRight") {
      const next = idx === max ? 0 : idx + 1;
      tabsRef.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      const prev = idx === 0 ? max : idx - 1;
      tabsRef.current[prev]?.focus();
    } else if (e.key === "Home") {
      tabsRef.current[0]?.focus();
    } else if (e.key === "End") {
      tabsRef.current[max]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      setActiveTab(tabs[idx]);
    }
  };

  // close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 animate-fadeInUp">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-full border border-[#ff002b]/20 mb-4">
            <span className="text-[#ff002b] font-semibold">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio across disciplines — web, mobile, AI, design
            and more.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div
            role="tablist"
            aria-label="Project categories"
            className="flex flex-wrap gap-3 items-center justify-center"
          >
            {tabs.map((tab, idx) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`panel-${tab}`}
                  id={`tab-${tab}`}
                  tabIndex={active ? 0 : -1}
                  onKeyDown={(e) => onTabKeyDown(e, idx)}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    active
                      ? "bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] text-white shadow-md"
                      : "bg-white/40 text-gray-700 border border-gray-200 hover:scale-[1.02]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects grid */}
        <div
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
        >
          {visibleProjects.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No projects in "{activeTab}" yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] rounded-full text-xs font-semibold">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-200 text-sm mb-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded border border-white/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>View Details</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
          aria-hidden={false}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Close project"
              >
                <X size={20} className="text-gray-700" />
              </button>
            </div>

            <div className="p-8">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] text-white rounded-full text-sm font-semibold">
                  {selectedProject.category}
                </span>
              </div>

              <h3
                id="project-title"
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
              >
                {selectedProject.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-[#ff002b]/10 to-[#ff4d6d]/10 text-[#ff002b] rounded-lg font-medium border border-[#ff002b]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </button>

                <button
                  type="button"
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
