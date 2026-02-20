"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { ArrowUpRight, Github, Linkedin, Cpu, Layout, User, Globe } from "lucide-react";
import PeerReviewForm from "@/components/PeerReviewForm";

// --- GABUNGAN SEMUA SKILL DARI CV DENGAN ICON ---
// Menggunakan skillicons.dev agar ikon stabil dan bertema gelap
const allSkills = [
  // Advanced (from CV)
  { name: "Python", icon: "https://skillicons.dev/icons?i=python&theme=dark" },
  { name: "C++", icon: "https://skillicons.dev/icons?i=cpp&theme=dark" },
  { name: "Next.js", icon: "https://skillicons.dev/icons?i=next&theme=dark" },
  { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres&theme=dark" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql&theme=dark" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git&theme=dark" },
  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github&theme=dark" },

  // Intermediate (from CV)
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js&theme=dark" },
  { name: "PHP", icon: "https://skillicons.dev/icons?i=php&theme=dark" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react&theme=dark" },
  { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind&theme=dark" },
  { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel&theme=dark" },
  { name: "Go", icon: "https://skillicons.dev/icons?i=go&theme=dark" },
  { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi&theme=dark" },
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb&theme=dark" },
  
  // Tools Tambahan
  { name: "Postman", icon: "https://skillicons.dev/icons?i=postman&theme=dark" },
  { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode&theme=dark" },
];

export default function HomePage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [time, setTime] = useState<string>("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Development", "UI/UX Design"];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          setReviews(data);
        }
      } catch (err) {
        console.error("Gagal mengambil review:", err);
      } finally {
        setIsLoadingReviews(false);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-[#050505] text-white p-4 md:p-8 font-sans selection:bg-lime-400 selection:text-black">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* 1. HERO BLOCK */}
        <div className="md:col-span-8 bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[450px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="z-10">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-lime-400">Available for Opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-4 uppercase">
              MUHAMMAD<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">ABDUL AZIS.</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-lime-400 font-medium tracking-tight mb-8 font-mono">
              SOFTWARE ENGINEER.
            </h2>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
              Building scalable web systems and thoughtful digital experiences. Currently studying at Universitas Pendidikan Indonesia.
            </p>
          </div>
          
          <div className="z-10 grid grid-cols-2 md:grid-cols-3 gap-6 text-[10px] uppercase tracking-widest text-zinc-500 mt-12 font-mono pt-8 border-t border-zinc-800/50">
            <div>
              <p className="mb-2 text-zinc-600">Location</p>
              <p className="text-zinc-300">Bandung, ID</p>
            </div>
            <div>
              <p className="mb-2 text-zinc-600">Local Time</p>
              <p className="text-zinc-300">{time || "--:--"} WIB</p>
            </div>
             <div className="col-span-2 md:col-span-1 flex gap-4 items-center">
               <a href="https://github.com/NasiHangat" target="_blank" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-lime-400 hover:bg-zinc-800 transition-all"><Github size={18} /></a>
               <a href="https://linkedin.com/in/muhamad-azis-8493001a0/" target="_blank" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-lime-400 hover:bg-zinc-800 transition-all"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>

        {/* 2. DOWNLOAD CV BLOCK */}
        <div className="md:col-span-4 bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-1 flex flex-col gap-1 min-h-[450px]">
          <a 
            href="/cv-muhammad-abdul-azis.pdf" 
            target="_blank"
            className="bg-lime-400 h-full rounded-[20px] p-8 flex flex-col justify-between group transition-transform active:scale-[0.98]"
          >
            <div className="flex justify-between items-start">
              <span className="text-black font-bold uppercase text-xs tracking-widest font-mono">Professional Record</span>
              <div className="p-3 bg-black/10 rounded-full group-hover:bg-black group-hover:text-lime-400 transition-colors">
                <ArrowUpRight className="text-black group-hover:text-lime-400 transition-colors" size={24} />
              </div>
            </div>
            <div>
              <span className="text-black text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter italic">DOWNLOAD<br/>RESUME</span>
            </div>
          </a>
        </div>

        {/* 3. EXPERTISE BLOCK (KEMBALI KE DESAIN IKON) */}
        <div className="md:col-span-12 bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 shrink-0">
              <div className="flex items-center gap-2 mb-6">
                <Cpu size={14} className="text-lime-400" />
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">System Core</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter uppercase leading-none mb-4">TECHNICAL<br/>EXPERTISE</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                A comprehensive arsenal of modern technologies utilized to architect robust applications. Strong foundation in <strong>Data Structures</strong> and <strong>System Design</strong>.
              </p>
            </div>
            
            {/* Grid Ikon Tech Stack */}
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
              {allSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 p-3.5 bg-zinc-900/30 rounded-xl border border-zinc-800/50 hover:border-lime-400/40 transition-all group cursor-default">
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xs text-zinc-400 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. SELECTED WORKS */}
        <div className="md:col-span-12 bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layout size={14} className="text-lime-400" />
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Portfolio</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter uppercase leading-none">SELECTED WORKS</h2>
            </div>
            
            <div className="bg-zinc-950 p-1.5 rounded-full border border-zinc-800/50 flex flex-wrap gap-1">
              {categories.map(cat => {
                const isSelected = filter === cat;
                const displayName = cat === "Web Development" ? "Web" : cat;
                return (
                  <button 
                    key={cat} 
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                      isSelected 
                        ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/20' 
                        : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    {displayName}
                  </button>
                );
              })}
            </div>
          </div>
          
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center border border-dashed border-zinc-800 rounded-2xl text-zinc-600 font-mono text-xs uppercase">
              No projects found in this category.
            </div>
          )}
        </div>

        {/* 5. PEER REVIEWS & FORM */}
        <div className="md:col-span-12 bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Globe size={14} className="text-lime-400" />
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Social Proof</span>
              </div>
              <h2 className="text-4xl font-bold mb-12 tracking-tighter italic text-zinc-100 uppercase leading-none">COLLABORATES ON</h2>
              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                {isLoadingReviews ? (
                  <div className="animate-pulse flex flex-col gap-4">
                    <div className="h-24 bg-zinc-900 rounded-2xl" />
                    <div className="h-24 bg-zinc-900 rounded-2xl" />
                  </div>
                ) : reviews.length > 0 ? (
                  reviews.map(rev => (
                    <div key={rev.id} className="p-8 border border-zinc-800/50 bg-zinc-950/50 rounded-2xl">
                      <p className="text-zinc-300 text-lg italic mb-6 leading-relaxed">"{rev.message}"</p>
                      <div className="flex items-center gap-3 text-[10px] font-mono uppercase text-zinc-500 tracking-widest">
                        <span className="text-lime-400">●</span>
                        <span>{rev.name}</span>
                        <span className="text-zinc-800">|</span>
                        <span>{rev.project || "General"}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-zinc-700 font-mono text-xs uppercase italic tracking-widest">Waiting for first feedback...</p>
                )}
              </div>
            </div>
            <div className="bg-zinc-950/50 p-8 md:p-10 rounded-3xl border border-zinc-800/30">
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">LEAVE A FEEDBACK</h3>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Contribute to the professional record.</p>
              </div>
              <PeerReviewForm />
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-center pb-8">
        <p className="text-zinc-700 text-[10px] font-mono uppercase tracking-[0.5em]">
          © 2026 MUHAMMAD ABDUL AZIS — BUILT FOR PERFORMANCE
        </p>
      </footer>
    </main>
  );
}