import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, User } from "lucide-react"; // Tambahkan icon User
import Link from "next/link";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 p-8">
      <div className="max-w-4xl mx-auto py-12">
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} /> Kembali ke Beranda
        </Link>

        {/* Hero Image Section */}
        <div className="relative aspect-video w-full mb-12 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed font-light">
                {project.fullDescription}
              </p>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-zinc-200">Tantangan Utama</h3>
              <p className="text-zinc-400 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="bg-blue-500/5 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Solusi & Pendekatan</h3>
              <p className="text-zinc-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* BAGIAN BARU: My Role */}
            <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <User size={14} /> My Role
              </h4>
              <p className="text-sm text-zinc-200 font-medium">
                {project.category} {/* Menampilkan kategori sebagai role utama */}
              </p>
            </div>

            <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Teknologi</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="bg-zinc-800/80 border border-zinc-700 px-3 py-1 rounded-full text-xs font-medium text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-3 pt-4">
              {project.demoUrl && project.demoUrl !== "" && (
                <Link 
                  href={project.demoUrl} 
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all active:scale-[0.98]"
                >
                  Lihat Demo <ExternalLink size={18} />
                </Link>
              )}

              {project.sourceCode && project.sourceCode !== "" && (
                <Link 
                  href={project.sourceCode} 
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all active:scale-[0.98]"
                >
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