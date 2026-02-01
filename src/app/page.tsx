"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { MapPin, GraduationCap, Briefcase, FileText, Quote } from "lucide-react";

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "PHP", "PostgreSQL", "Framer Motion", "Arch Linux", "Prisma"];

export default function HomePage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Development", "UI/UX Design"];
  const technicalSkills = [
  { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A24A" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
        {/* Glow Background Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full -z-10" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            I'm <span className="text-white">Aziss</span>.
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-8 text-zinc-500 text-sm font-mono uppercase tracking-widest"
        >
          <span className="flex items-center gap-2"><Briefcase size={14} /> Software Engineer</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> Bandung, Indonesia</span>
          <span className="flex items-center gap-2"><GraduationCap size={14} /> UPI Student</span>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 max-w-2xl text-lg md:text-xl leading-relaxed font-light italic mb-12"
        >
          "Crafting efficient code while obsessing over pixel-perfect user experiences."
        </motion.p>

        {/* Tombol CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="/cv-muhammad-abdul-azis.pdf" 
            target="_blank"
            className="group flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-2xl shadow-white/5"
          >
            <FileText size={20} className="group-hover:animate-pulse" />
            Download CV
          </a>
        </motion.div>
      </section>

      {/* --- TECH STACK MARQUEE --- */}
      <div className="w-full py-16 overflow-hidden bg-zinc-950/30 border-y border-zinc-900/50 mb-20">
        <motion.div 
          className="flex whitespace-nowrap gap-24"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <span key={index} className="text-zinc-800 font-mono text-4xl font-black uppercase tracking-[0.4em] hover:text-blue-500/40 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- PROJECTS GALLERY --- */}
      <section id="projects-gallery" className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-2">
            <div className="h-1.5 w-16 bg-blue-600 mb-4" />
            <h2 className="text-5xl font-bold text-white tracking-tight">Selected Works.</h2>
            <p className="text-zinc-500 text-lg">Penyelesaian masalah melalui baris kode dan estetika visual.</p>
          </div>
          
          <div className="flex bg-zinc-900/40 p-1.5 rounded-2xl border border-zinc-800/50 backdrop-blur-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? "bg-white text-black shadow-2xl scale-[1.02]" 
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* --- SECTION: TECHNICAL SKILLS --- */}
      <section className="max-w-7xl mx-auto py-24 px-6 border-t border-zinc-900">
        <div className="flex flex-col gap-12">
          <div className="space-y-2">
            <div className="h-1.5 w-16 bg-emerald-500 mb-4" />
            <h2 className="text-4xl font-bold text-white tracking-tight">Technical Skills</h2>
            <p className="text-zinc-500 text-lg">Teknologi dan tools yang saya gunakan untuk membangun solusi digital.</p>
          </div>

          {/* Skill Cloud Container */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 lg:gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full hover:border-zinc-600 hover:bg-zinc-800/80 transition-all cursor-default shadow-lg"
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- SECTION: ABOUT & SOCIAL PROOF --- */}
      <section className="max-w-7xl mx-auto py-32 px-6 border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Kolom Kiri: About Me */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white tracking-tight">About Me</h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
                <p>
                  Halo! Saya <span className="text-white font-medium">Muhammad Abdul Azis</span>, seorang Software Engineer dari Bandung. 
                  Saat ini saya menempuh pendidikan di <span className="text-white">Universitas Pendidikan Indonesia</span>, fokus pada pengembangan web dan riset data mining.
                </p>
                <p>
                  Saya memiliki ketertarikan mendalam pada ekosistem <span className="text-blue-400">Next.js</span>, manajemen database PostgreSQL, dan optimasi sistem. 
                  Di luar coding, saya antusias dengan kustomisasi <span className="text-zinc-200">Arch Linux</span> dan tata kelola IT menggunakan framework COBIT.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-400">
                📍 Bandung, Indonesia
              </div>
              <div className="px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs font-mono text-blue-400 font-bold">
                🚀 Open for Internships
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Testimoni */}
          <div className="lg:col-span-5">
            <div className="relative p-10 bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] overflow-hidden group">
              <Quote className="absolute -top-6 -right-6 w-32 h-32 text-zinc-800/30 group-hover:text-blue-500/10 transition-colors" />
              
              <div className="relative z-10">
                <p className="text-zinc-300 italic leading-relaxed text-lg mb-10">
                  "Azis memiliki kemampuan luar biasa dalam menerjemahkan kebutuhan sistem yang kompleks menjadi desain yang intuitif dan kode yang rapi. Dedikasinya pada detail proyek sangat terlihat."
                </p>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg">
                    PR
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Peer Reviewer</h4>
                    <p className="text-sm text-zinc-500">Project Partner @ UPI</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-center text-[10px] text-zinc-700 font-mono tracking-[0.3em] uppercase">
              Engineering Excellence • 2026
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto pb-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 border-t border-zinc-900 pt-20">
          <div>
            <h3 className="text-5xl font-bold mb-8 tracking-tighter text-zinc-200">Mari berkolaborasi.</h3>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-10 text-lg">
              Tersedia untuk proyek freelance, diskusi IT Governance, hingga kustomisasi Linux.
            </p>
            <a 
              href="mailto:muhammadabdulazis747@gmail.com" 
              className="inline-flex items-center justify-center bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-all hover:bg-blue-500 hover:text-white"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="flex flex-col md:items-end justify-center gap-8">
            <div className="flex gap-12 text-zinc-500 font-mono uppercase tracking-[0.2em] text-xs">
              <a href="https://www.linkedin.com/in/muhamad-azis-8493001a0/" target="_blank" className="hover:text-blue-500 transition-colors">LinkedIn</a>
              <a href="https://github.com/NasiHangat" target="_blank" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.instagram.com/nasi_pisgor/" target="_blank" className="hover:text-pink-500 transition-colors">Instagram</a>
            </div>
            <p className="text-zinc-800 text-[10px] font-mono tracking-widest">
              LOCAL TIME: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} WIB
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}