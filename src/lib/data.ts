export const projects = [
  {
    id: 1,
    slug: "upiku",
    title: "UPIku",
    category: "UI/UX Design",
    myRole: "UI/UX Designer & Researcher",
    description:
      "Super Apps terintegrasi yang menyatukan seluruh informasi bagi civitas akademika Universitas Pendidikan Indonesia.",
    fullDescription:
      "UPIku dirancang sebagai super app kampus untuk menyentralisasi layanan akademik seperti jadwal kuliah, KRS, pengumuman, dan aktivitas mahasiswa dalam satu aplikasi mobile yang mudah diakses.",
    process: [
      {
        stage: "Discovery",
        details:
          "Melakukan riset terhadap mahasiswa UPI untuk mengidentifikasi kendala akses informasi akademik yang tersebar di banyak sistem."
      },
      {
        stage: "User Flow",
        details:
          "Merancang alur navigasi terpusat yang menghubungkan KRS, jadwal, dan informasi kampus dalam satu pengalaman yang konsisten."
      },
      {
        stage: "Visual Design",
        details:
          "Menerapkan identitas visual universitas dengan fokus pada keterbacaan, konsistensi, dan standar accessibility."
      }
    ],
    tech: ["Figma"],
    designTool: "Figma",
    image: "/upiku.png",
    screenshots: [
      "/upiku.png",
      "/upiku (2).png",
      "/upiku2 (2).png",
      "/upiku (3).png",
      "/upiku (4).png",
      "/upiku (5).png",
      "/upiku (6).png",
      "/upiku (7).png",
      "/upiku (8).png",
      "/upiku (9).png",
      "/upiku (10).png",
      "/upiku (11).png"
    ],
    challenge:
      "Mengintegrasikan berbagai sistem dan data akademik universitas ke dalam satu pengalaman pengguna yang kohesif.",
    solution:
      "Pendekatan user-centered design dan sistem modular untuk memastikan navigasi tetap sederhana meskipun fitur kompleks.",
    demoUrl:
      "https://www.figma.com/proto/AHxMGl5FeXJpJJbdFWEHeo/UI?page-id=6%3A4&node-id=128-3017&p=f",
    sourceCode: ""
  },

  {
    id: 2,
    slug: "redesign-dana",
    title: "Redesign DANA",
    category: "UI/UX Design",
    myRole: "UI/UX Designer",
    description:
      "Eksplorasi redesign aplikasi dompet digital DANA untuk meningkatkan efisiensi transaksi dan kenyamanan navigasi.",
    fullDescription:
      "Proyek eksploratif yang berfokus pada penyederhanaan proses pembayaran dan peningkatan kejelasan visual agar pengguna dapat bertransaksi lebih cepat dan minim kesalahan.",
    process: [
      {
        stage: "Problem Analysis",
        details:
          "Menganalisis pain point pengguna terkait tampilan yang padat dan langkah transaksi yang terlalu panjang."
      },
      {
        stage: "Wireframing",
        details:
          "Menyusun ulang struktur halaman utama dan transaksi dengan fokus pada fitur paling sering digunakan."
      },
      {
        stage: "UI Refinement",
        details:
          "Menerapkan visual hierarchy yang lebih tegas untuk meningkatkan fokus pengguna saat melakukan pembayaran."
      }
    ],
    tech: ["Figma"],
    designTool: "Figma",
    image: "/dana.png",
        screenshots: [
          "/dana.png",
      "/dana (1).png",
      "/dana (2).png",
      "/dana (3).png",
      "/dana (4).png",
      "/dana (5).png",
      "/dana (6).png",
      "/dana (7).png",
      "/dana (8).png",
      "/dana (9).png",
      "/dana (10).png",
      "/dana (11).png",
      "/dana (12).png"
    ],
    challenge:
      "Menjaga kelengkapan fitur tanpa membuat tampilan terasa rumit bagi pengguna baru.",
    solution:
      "Pengelompokan fitur berdasarkan frekuensi penggunaan dan pengurangan elemen visual yang tidak esensial.",
    demoUrl:
      "https://www.figma.com/proto/h7qsOiLrjT6bx30XmhR44a/kelompok-8---HCI",
    sourceCode: ""
  },

  {
    id: 3,
    slug: "seasa",
    title: "Seasa",
    category: "UI/UX Design",
    myRole: "Product Designer",
    description:
      "Platform marketplace makanan untuk mengurangi food waste melalui penjualan stok surplus restoran.",
    fullDescription:
      "Seasa menghubungkan restoran dengan stok makanan berlebih di akhir hari kepada konsumen yang ingin mendapatkan makanan berkualitas dengan harga terjangkau.",
    process: [
      {
        stage: "Ideation",
        details:
          "Mengembangkan konsep marketplace berbasis isu lingkungan dan keberlanjutan pangan."
      },
      {
        stage: "UX Strategy",
        details:
          "Merancang sistem kepercayaan melalui rating, informasi stok real-time, dan transparansi mitra."
      },
      {
        stage: "UI Design",
        details:
          "Mendesain tampilan yang ramah dan informatif untuk meningkatkan rasa aman pengguna."
      }
    ],
    tech: ["Figma"],
    designTool: "Figma",
    image: "/seasa.png",
    screenshots: [
      "/seasa.png",
      "/seasa (1).png",
      "/seasa (2).png",
      "/seasa (3).png",
      "/seasa (4).png",
      "/seasa (5).png",
      "/seasa (6).png",
      "/seasa (7).png",
    ],
    challenge:
      "Membangun kepercayaan konsumen terhadap kualitas makanan surplus.",
    solution:
      "Sistem rating, sertifikasi mitra, dan informasi stok real-time pada setiap produk.",
    demoUrl:
      "https://www.figma.com/proto/NIndJ6ngBKGQ6pnNttYUSK/SEASA",
    sourceCode: ""
  },

  {
    id: 4,
    slug: "ngajar-id",
    title: "Ngajar.ID",
    category: "Web Development",
    myRole: "Full Stack Developer",
    description:
      "Platform LMS berbasis modul dengan fitur donasi mikro untuk mendukung pengajar independen.",
    fullDescription:
      "Ngajar.ID adalah ekosistem pembelajaran online yang memungkinkan pengajar membagikan materi edukatif sekaligus menerima apresiasi finansial langsung dari pengguna.",
    process: [
      {
        stage: "System Design",
        details:
          "Merancang arsitektur LMS modular dengan manajemen user, modul, dan transaksi."
      },
      {
        stage: "Development",
        details:
          "Mengimplementasikan frontend dan backend dengan fokus pada performa dan keamanan data."
      },
      {
        stage: "Integration",
        details:
          "Integrasi sistem donasi dan token untuk mendukung monetisasi konten."
      }
    ],
    tech: ["PHP", "React", "Tailwind"],
    designTool: "Figma",
    image: "/android-compact-1.png",
    challenge:
      "Menjaga keamanan aliran donasi tanpa mengganggu pengalaman belajar.",
    solution:
      "Pengelolaan state dan sistem transaksi terpisah untuk modul dan donasi.",
    demoUrl: "",
    sourceCode: "https://github.com/NasiHangat/Ngajar.id"
  },

  {
    id: 5,
    slug: "divus-global",
    title: "PT Divus Global Mediacomm",
    category: "Web Development",
    myRole: "Backend Developer",
    description:
      "Website company profile modern yang dioptimalkan untuk performa dan SEO.",
    fullDescription:
      "Transformasi identitas digital perusahaan media melalui website yang cepat, responsif, dan siap menjangkau mitra global.",
    process: [
      {
        stage: "Planning",
        details:
          "Menentukan struktur konten dan kebutuhan performa website perusahaan."
      },
      {
        stage: "Implementation",
        details:
          "Pengembangan menggunakan Next.js dengan fokus pada SEO dan load time."
      },
      {
        stage: "Optimization",
        details:
          "Optimasi aset visual dan server-side rendering."
      }
    ],
    tech: ["Next.js", "PostgreSQL", "Tailwind", "Prisma"],
    designTool: "Figma",
    image: "/divus.png",
    screenshots: [
      "/divus.png",
      "/divus (1).png",
      "/divus (2).png",
      "/divus (3).png",
      "/divus (4).png",
      "/divus (5).png",
      "/divus (6).png",
      "/divus (7).png"
    ],
    challenge:
      "Menampilkan aset visual berat tanpa mengorbankan kecepatan.",
    solution:
      "Next.js Image Optimization dan SSR.",
    demoUrl: "https://www.divusglobal.com/",
    sourceCode: "https://github.com/dadunch/next-divus"
  },

  {
    id: 6,
    slug: "cultunesia",
    title: "Cultunesia",
    category: "Web Development",
    myRole: "Frontend Developer",
    description:
      "Platform edukasi budaya interaktif berbasis peta dan gamifikasi.",
    fullDescription:
      "Cultunesia mengajak pengguna menjelajahi budaya Indonesia melalui peta interaktif, konten edukatif, dan kuis berbasis provinsi.",
    process: [
      {
        stage: "Concept",
        details:
          "Menggabungkan edukasi budaya dengan elemen interaktif dan gamifikasi."
      },
      {
        stage: "Development",
        details:
          "Membangun antarmuka peta interaktif yang ringan."
      },
      {
        stage: "Enhancement",
        details:
          "Menambahkan animasi untuk meningkatkan engagement pengguna."
      }
    ],
    tech: ["Next.js", "PostgreSQL", "Framer Motion"],
    designTool: "Figma",
    image: "/cultunesia.png",
    challenge:
      "Membuat peta interaktif yang tetap ringan di perangkat mobile.",
    solution:
      "Optimalisasi animasi dan manajemen data yang efisien.",
    demoUrl: "https://cultunesia.vercel.app",
    sourceCode: "https://github.com/ryan-gabriel/cultunesia"
  },

  {
    id: 7,
    slug: "foodie-pos",
    title: "Foodie POS",
    category: "Web Development",
    myRole: "Full Stack Developer",
    description:
      "Sistem POS berbasis QR Code untuk pemesanan multi-tenant di foodcourt.",
    fullDescription:
      "Foodie POS memungkinkan pelanggan memesan dari berbagai tenant hanya dengan satu QR Code, sementara sistem otomatis memisahkan transaksi tiap tenant.",
    process: [
      {
        stage: "Requirement Analysis",
        details:
          "Menganalisis kebutuhan multi-tenant dan sistem pembayaran terpusat."
      },
      {
        stage: "System Architecture",
        details:
          "Merancang database relasional untuk pemisahan transaksi tenant."
      },
      {
        stage: "Implementation",
        details:
          "Pengembangan sistem pemesanan dan pembayaran terintegrasi."
      }
    ],
    tech: ["Next.js", "PostgreSQL", "React"],
    designTool: "Figma",
    image: "/foodie.png",
    screenshots: [
      "/foodie.png",
    ],
    challenge:
      "Sinkronisasi pesanan dari banyak tenant dalam satu sistem.",
    solution:
      "Desain database relasional dan logika transaksi otomatis.",
    demoUrl: "",
    sourceCode: "https://github.com/dadunch/foodie-next"
  }
];
