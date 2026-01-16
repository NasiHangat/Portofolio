import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Workflow, UserCircle } from "lucide-react";
import Link from "next/link";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 p-8">
      <div className="max-w-4xl mx-auto py-12">
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Beranda
        </Link>

        <div className="relative aspect-video w-full mb-12 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            {/* Judul & Deskripsi Utama */}
            <section>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed font-light">{project.fullDescription}</p>
            </section>

            {/* BAGIAN BARU: Storytelling - The Process */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Workflow className="text-blue-500" size={24} /> The Process
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {project.process?.map((step, index) => (
                  <div key={index} className="p-6 bg-zinc-900/40 rounded-xl border border-zinc-800 flex gap-6">
                    <span className="text-4xl font-black text-zinc-800">{index + 1}</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-tighter text-sm mb-1">{step.stage}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* --- SECTION 2: VISUAL EXPLORATION --- */}
            <section className="space-y-8 pt-12 border-t border-zinc-900">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-white">Visual Exploration</h3>
                <p className="text-zinc-500">Cuplikan antarmuka dan detail implementasi dari proyek ini.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots && project.screenshots.length > 0 ? (
                  project.screenshots.map((img, index) => (
                    <div 
                      key={index} 
                      className="group relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all"
                    >
                      <Image 
                        src={img} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay tipis saat hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-10 text-center border border-dashed border-zinc-800 rounded-2xl text-zinc-600">
                    Pratinjau visual tambahan belum tersedia untuk proyek ini.
                  </div>
                )}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-lg font-semibold mb-2">Tantangan</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{project.challenge}</p>
              </div>
              <div className="bg-blue-500/5 p-6 rounded-xl border border-blue-500/20">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Solusi</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* BAGIAN BARU: My Role */}
            <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <UserCircle size={14} /> Peran Saya
              </h4>
              <p className="text-sm text-zinc-200 font-medium">
                {project.myRole || project.category}
              </p>
            </div>

            <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Teknologi</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full text-xs text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              {project.demoUrl && (
                <Link href={project.demoUrl} target="_blank" className="flex items-center justify-center gap-2 bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all active:scale-95">
                  Lihat Demo <ExternalLink size={18} />
                </Link>
              )}
              {project.sourceCode && (
                <Link href={project.sourceCode} target="_blank" className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all active:scale-95">
                  Source Code <Github size={18} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}