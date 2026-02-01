import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Workflow, UserCircle } from "lucide-react";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Hero Image */}
        <div className="relative aspect-video w-full mb-16 rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Title & Description */}
            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-zinc-800" />
                <span className="text-xs font-medium text-zinc-500 tracking-widest uppercase">
                  {project.category}
                </span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white">
                {project.title}
              </h1>
              
              <p className="text-xl text-zinc-400 leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {/* The Process */}
            {project.process && project.process.length > 0 && (
              <section className="space-y-8 pt-8 border-t border-zinc-900">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Workflow className="text-white" size={24} strokeWidth={2} />
                    <h3 className="font-display text-3xl font-medium">The Process</h3>
                  </div>
                  <p className="text-zinc-500 text-sm">
                    Step-by-step approach to bringing this project to life.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {project.process.map((step, index) => (
                    <div 
                      key={index} 
                      className="group p-6 bg-zinc-900/40 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-colors flex gap-6"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center">
                          <span className="text-lg font-semibold text-zinc-300">{index + 1}</span>
                        </div>
                      </div>
                      <div className="space-y-2 flex-grow">
                        <h4 className="font-semibold text-white text-base">
                          {step.stage}
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Visual Exploration */}
            {project.screenshots && project.screenshots.length > 0 && (
              <section className="space-y-8 pt-8 border-t border-zinc-900">
                <div className="space-y-3">
                  <h3 className="font-display text-3xl font-medium">Visual Exploration</h3>
                  <p className="text-zinc-500 text-sm">
                    Interface snapshots and implementation details.
                  </p>
                </div>

                <ProjectGallery 
                  screenshots={project.screenshots} 
                  projectTitle={project.title} 
                />
              </section>
            )}

            {/* Challenge & Solution */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="p-6 bg-zinc-900/40 rounded-xl border border-zinc-800/80 space-y-3">
                <h3 className="font-display text-xl font-medium">Challenge</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              
              <div className="p-6 bg-zinc-900/40 rounded-xl border border-zinc-800/80 space-y-3">
                <h3 className="font-display text-xl font-medium">Solution</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Project Info Sticky Container */}
            <div className="lg:sticky lg:top-8 space-y-6">
              {/* My Role */}
              <div className="p-6 bg-zinc-900/40 rounded-xl border border-zinc-800/80">
                <div className="flex items-center gap-2 mb-4">
                  <UserCircle size={16} className="text-zinc-500" strokeWidth={2} />
                  <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                    My Role
                  </h4>
                </div>
                <p className="text-base text-white font-medium">
                  {project.myRole || project.category}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-6 bg-zinc-900/40 rounded-xl border border-zinc-800/80">
                <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-xs font-medium bg-zinc-800/60 border border-zinc-700/60 px-3 py-1.5 rounded-full text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {project.demoUrl && (
                  <Link 
                    href={project.demoUrl} 
                    target="_blank" 
                    className="group flex items-center justify-center gap-2 bg-white text-black py-4 px-6 rounded-full font-semibold hover:bg-zinc-200 transition-all duration-300 active:scale-95"
                  >
                    <span>View Demo</span>
                    <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
                  </Link>
                )}
                {project.sourceCode && (
                  <Link 
                    href={project.sourceCode} 
                    target="_blank" 
                    className="group flex items-center justify-center gap-2 bg-zinc-900/60 border border-zinc-800 text-white py-4 px-6 rounded-full font-semibold hover:bg-zinc-800/60 transition-all duration-300 active:scale-95"
                  >
                    <span>Source Code</span>
                    <Github size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}