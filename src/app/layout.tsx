import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Abdul Azis | Software Engineer Portfolio",
  description: "Software Engineer & Student at Universitas Pendidikan Indonesia. Specializing in Next.js, UI/UX Design, and IT Governance.",
  keywords: ["Muhammad Abdul Azis", "Aziss", "Software Engineer Bandung", "UPI Student", "Next.js Developer", "UI/UX Designer Indonesia"],
  authors: [{ name: "Muhammad Abdul Azis" }],
  
  openGraph: {
    title: "Muhammad Abdul Azis - Software Engineer",
    description: "Building digital experiences through code and design. Explore my latest projects in Web Development and UI/UX.",
    url: "https://porto-muh-abdul-azis.vercel.app/", 
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
    description: "Software Engineer & UI/UX enthusiast from Bandung, Indonesia.",
    images: ["/Me.jpg"],
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050505] antialiased`}>
        {children}
      </body>
    </html>
  );
}