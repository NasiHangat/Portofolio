import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Update metadataBase ke domain utama untuk SEO yang lebih baik
  metadataBase: new URL("https://bakti45sejahtera.my.id"), //
  title: "Muhammad Abdul Azis | Software Engineer Portfolio",
  description: "Software Engineer & Student at Universitas Pendidikan Indonesia. Specializing in Next.js, Backend Development, and DevOps.", //
  keywords: [
    "Muhammad Abdul Azis", 
    "Aziss", 
    "Software Engineer Bandung", 
    "UPI Student", 
    "Backend Developer", 
    "Next.js Developer Indonesia",
    "DevOps Enthusiast"
  ], //
  authors: [{ name: "Muhammad Abdul Azis" }],
  
  openGraph: {
    title: "Muhammad Abdul Azis - Software Engineer",
    description: "Building digital experiences through code and design. Explore my projects in Backend Development and Software Engineering.", //
    url: "https://bakti45sejahtera.my.id", //
    siteName: "Aziss Portfolio",
    images: [
      {
        url: "/Me.jpg", 
        width: 1200,
        height: 630,
        alt: "Muhammad Abdul Azis Profile",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Abdul Azis | Software Engineer",
    description: "Software Engineer & Backend enthusiast from Bandung, Indonesia.", //
    images: ["/Me.jpg"],
  },

  // Menambahkan icons untuk mencegah error 404 pada favicon/manifest
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#050505] antialiased">
        {children}
      </body>
    </html>
  );
}