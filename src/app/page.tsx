"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { FileText, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import PeerReviewForm from "@/components/PeerReviewForm";

// --- Skills Configuration ---
const skillsRow1 = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
];

const skillsRow2 = [
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A24A" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
];

const skillsRow3 = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
  { name: "scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
];

const MarqueeRow = ({ 
  skills, 
  direction = "normal", 
  duration = "20s" 
}: { 
  skills: Array<{ name: string; icon: string }>; 
  direction?: "normal" | "reverse"; 
  duration?: string;
}) => (
  <div className="flex overflow-hidden relative w-full py-2">
    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
    <div 
      className="flex gap-4 pr-4 w-max animate-marquee will-change-transform"
      style={{ 
        '--duration': duration, 
        '--gap': '16px',
        animationDirection: direction 
      } as React.CSSProperties}
    >
      {[...skills, ...skills].map((skill, i) => (
        <div 
          key={i}
          className="flex items-center gap-2.5 px-5 py-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-lg shrink-0 transition-all duration-300 hover:bg-zinc-800/60 hover:border-zinc-700"
        >
          <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
          <span className="font-medium text-zinc-300 text-sm whitespace-nowrap">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function HomePage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [filter, setFilter] = useState("All");
  const [time, setTime] = useState<string>("");
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
      setTime(new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-tight font-medium">
              Muhammad<br />
              <span className="text-zinc-500">Abdul Azis</span>
            </h1>
            <p className="mt-8 max-w-xl text-zinc-400 text-lg leading-relaxed">
              Software Engineer focused on building scalable web systems and thoughtful digital experiences.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="text-zinc-500 mb-1">Role</div>
                <div className="font-medium">Software Engineer</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-1">Focus</div>
                <div className="font-medium">Web & Systems</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-1">Location</div>
                <div className="font-medium">Bandung, ID</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-1">Availability</div>
                <div className="font-medium">Open to Work</div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="/cv-muhammad-abdul-azis.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-colors"
              >
                <FileText size={18} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="space-y-16">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-zinc-800" />
              <span className="text-xs font-medium text-zinc-500 tracking-widest uppercase">Expertise</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-medium text-white">Technical Stack</h2>
          </div>
          <div className="flex flex-col gap-3">
            <MarqueeRow skills={skillsRow1} duration="30s" />
            <MarqueeRow skills={skillsRow2} direction="reverse" duration="35s" />
            <MarqueeRow skills={skillsRow3} duration="32s" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-gallery" className="max-w-7xl mx-auto py-32 px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-zinc-800" />
              <span className="text-xs font-medium text-zinc-500 tracking-widest uppercase">Selected Works</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-medium text-white">Featured Projects</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? "bg-white text-black" 
                    : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:bg-zinc-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div layout key={project.id}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Dynamic Peer Reviews Section */}
      <section className="max-w-7xl mx-auto py-32 px-6 border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-zinc-800" />
                <span className="text-xs font-medium text-zinc-500 tracking-widest uppercase">Identity</span>
              </div>
              <h2 className="font-display text-5xl font-medium text-white">About Me</h2>
              <p className="text-zinc-400 text-xl font-light leading-relaxed">
                I build digital systems with a focus on <span className="text-white">Next.js</span>, <span className="text-white">React</span>, and <span className="text-white">Prisma</span> [cite: 2026-02-01].
              </p>
            </div>

            <div className="space-y-12">
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Approved Feedbacks</h3>
              {isLoadingReviews ? (
                <p className="text-zinc-600 italic animate-pulse">Loading testimonials...</p>
              ) : reviews.length > 0 ? (
                reviews.map((rev) => (
                  <motion.div 
                    key={rev.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-12 border-t border-zinc-900 space-y-6"
                  >
                    <blockquote className="font-display text-3xl text-zinc-300 leading-tight italic">
                      "{rev.message}"
                    </blockquote>
                    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
                      <span className="text-white">{rev.name}</span>
                      <span>—</span>
                      <span>{rev.project || "General"}</span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-zinc-600 italic">Belum ada review yang disetujui.</p>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 sticky top-32 h-fit">
            <PeerReviewForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto py-32 px-6 border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-display text-4xl md:text-6xl font-medium leading-tight text-white">
              Let's collaborate on<br/>
              <span className="text-zinc-500">something remarkable</span>
            </h3>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:muhammadabdulazis747@gmail.com" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-all">
                <Mail size={18} /> Email Me
              </a>
              <div className="flex gap-2">
                <a 
                  href="https://github.com/NasiHangat" 
                  target="_blank"
                  className="p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhamad-azis-8493001a0/" 
                  target="_blank"
                  className="p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 text-right">
            <div className="text-xs text-zinc-600 font-mono tracking-widest uppercase space-y-2">
              <div>LOCAL TIME: {time || "--:--"} WIB</div>
              <div>BANDUNG, INDONESIA</div>
              <div className="pt-8 opacity-40">© 2026 Muhammad Abdul Azis</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}