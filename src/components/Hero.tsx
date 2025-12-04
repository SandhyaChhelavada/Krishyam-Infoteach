import React, { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

const createParticles = (count: number, width: number, height: number): Particle[] => {
  const arr: Particle[] = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
    });
  }
  return arr;
};

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = window.devicePixelRatio || 1;

    const setCanvasSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0); // scale drawing to device pixel ratio
    };

    setCanvasSize();
    particlesRef.current = createParticles(80, canvas.width / DPR, canvas.height / DPR);

    let last = performance.now();

    const animate = (time: number) => {
      const dt = Math.min((time - last) / 16.6667, 4); // normalized delta (approx frames)
      last = time;

      const width = canvas.width / DPR;
      const height = canvas.height / DPR;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.x < 0) p.x = 0, p.vx *= -1;
        if (p.x > width) p.x = width, p.vx *= -1;
        if (p.y < 0) p.y = 0, p.vy *= -1;
        if (p.y > height) p.y = height, p.vy *= -1;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, "rgba(255, 0, 43, 0.9)");
        gradient.addColorStop(1, "rgba(255, 77, 109, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 120;
          if (dist < maxDist) {
            ctx.strokeStyle = `rgba(255,0,43,${0.15 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      setCanvasSize();
      // recreate particles to cover the new area nicely
      particlesRef.current = createParticles(80, canvas.width / DPR, canvas.height / DPR);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-white/80 z-0 pointer-events-none" />

      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#ff002b]/20 to-[#ff4d6d]/20 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#ff4d6d]/20 to-[#ff002b]/20 rounded-full blur-3xl animate-float-delayed pointer-events-none"></div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fadeInUp">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff002b]/10 to-[#ff4d6d]/10 rounded-full border border-[#ff002b]/20 mb-4">
            <span className="text-[#ff002b] font-semibold">Welcome to the Kridhyam Infotech</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent">
              Transforming Ideas Into Intelligent Digital Experiences
            </span>
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            <span className="text-gray-500">
             Web Development • AI Chatbots • AI Images • Creative Branding
              Crafted with smart tech. Delivered with human warmth.
            </span>
          </h1>

          {/* <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
           Kridhyam Infotech offers Web Development, AI Chatbots, AI Image Systems, and Creative Branding services. Build fast, modern, and scalable digital experiences with our expert team
          </p> */}

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>

            <a
              href="https://wa.me/916351804604?text=Hello%20KridHyan%20Infotech%2C%20I%20need%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white border-2 border-[#ff002b] text-[#ff002b] rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-[#ff002b] hover:to-[#ff4d6d] hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { number: "5+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ff002b] to-[#ff4d6d] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 border-2 border-[#ff002b] rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-[#ff002b] to-[#ff4d6d] rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
