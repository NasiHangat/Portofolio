import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Workflow, UserCircle, Cpu, Target, Rocket } from "lucide-react";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white p-4 md:p-8 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-4">
        
        {/* --- NAVIGATION & HEADER --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-12 bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <Link 
              href="/" 
              className="group flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-lime-400 hover:border-lime-400/30 transition-all font-mono text-[10px] uppercase tracking-widest"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to System</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_rgba(163,230,53,0.5)]" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">Project Protocol: {project.slug}</span>
            </div>
          </div>
        </div>

        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 relative aspect-video rounded-3xl overflow-hidden border border-zinc-800/50 shadow-2xl bg-zinc-900">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover opacity-80" 
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8">
               <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic leading-none">{project.title}</h1>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="md:col-span-4 grid grid-rows-2 gap-4 font-mono">
            <div className="bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-8 flex flex-col justify-between">
               <div className="flex items-center gap-2 text-zinc-500 mb-4">
                 <UserCircle size={14} />
                 <span className="text-[10px] uppercase tracking-widest">My Role</span>
               </div>
               <p className="text-xl font-bold text-lime-400">{project.myRole || project.category}</p>
            </div>
            <div className="bg-lime-400 rounded-3xl p-8 flex flex-col justify-between group cursor-pointer active:scale-[0.98] transition-transform">
              <div className="flex justify-between items-start text-black">
                <span className="font-bold uppercase text-[10px] tracking-widest">Live Preview</span>
                <ExternalLink size={18} />
              </div>
              <a href={project.demoUrl} target="_blank" className="text-black text-2xl font-black italic tracking-tighter leading-none">LAUNCH PROJECT</a>
            </div>
          </div>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Description */}
          <div className="md:col-span-8 bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-2 mb-8">
              <Target size={14} className="text-lime-400" />
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Mission Briefing</span>
            </div>
            <p className="text-2xl md:text-3xl text-zinc-300 font-light leading-tight mb-12">
              {project.fullDescription}
            </p>

            {/* Process Steps */}
            {project.process && (
              <div className="space-y-4 pt-12 border-t border-zinc-900">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-8">Deployment Process</h3>
                <div className="grid grid-cols-1 gap-3">
                  {project.process.map((step, index) => (
                    <div key={index} className="flex gap-6 p-6 bg-zinc-950/50 border border-zinc-800/30 rounded-2xl group hover:border-lime-400/20 transition-all">
                      <span className="font-mono text-lime-400 text-sm font-bold opacity-40 group-hover:opacity-100">0{index + 1}</span>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm uppercase text-zinc-200">{step.stage}</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">{step.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="md:col-span-4 space-y-4">
            {/* Tech Stack */}
            <div className="bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-8">
                <Cpu size={14} className="text-lime-400" />
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">System Core</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Source Code */}
            {project.sourceCode && (
              <a 
                href={project.sourceCode} 
                target="_blank" 
                className="bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-8 flex items-center justify-between group hover:border-white transition-all"
              >
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Repository</p>
                  <p className="font-bold uppercase tracking-tighter">View Source Code</p>
                </div>
                <Github className="text-zinc-600 group-hover:text-white transition-colors" />
              </a>
            )}

            {/* Challenge/Solution Grid */}
            <div className="bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-8 space-y-6">
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono font-bold text-lime-400 uppercase tracking-widest underline decoration-lime-400/20 underline-offset-4">The Challenge</h4>
                <p className="text-zinc-400 text-xs leading-relaxed italic">"{project.challenge}"</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-widest underline decoration-white/20 underline-offset-4">The Solution</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- VISUAL GALLERY (Span 12) --- */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-12 bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-2 mb-12">
                <Rocket size={14} className="text-lime-400" />
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Visual Exploration</span>
              </div>
              <ProjectGallery 
                screenshots={project.screenshots} 
                projectTitle={project.title} 
              />
            </div>
          </div>
        )}

      </div>

      <footer className="mt-12 text-center pb-8">
        <p className="text-zinc-700 text-[10px] font-mono uppercase tracking-[0.5em]">
          DATA ENCRYPTION SECURE — EST. 2026
        </p>
      </footer>
    </main>
  );
}