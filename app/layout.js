import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Generador de Comentarios para Profesores - Optimiza tu Retroalimentación",
  description:
    "Genera comentarios personalizados para informes de estudiantes con nuestra herramienta fácil de usar. Ideal para profesores que buscan ofrecer retroalimentación constructiva.",
  keywords:
    "generador de comentarios, herramientas para profesores, retroalimentación de estudiantes, comentarios en informes, herramientas educativas",
  author: "Tom Gandolfo",
  robots: "index, follow",
  canonical: "https://comments-navy.vercel.app",
  openGraph: {
    title: "Generador de Comentarios para Profesores",
    description:
      "Genera comentarios personalizados y significativos para informes de estudiantes de manera rápida y sencilla.",
    url: "https://comments-navy.vercel.app",
    type: "website",
    images: [
      {
        url: "https://comments-navy.vercel.app/ruta-a-tu-imagen.jpg",
        width: 800,
        height: 600,
        alt: "Imagen de ejemplo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Comentarios para Profesores",
    description:
      "Crea fácilmente comentarios para informes de estudiantes con nuestra herramienta fácil de usar.",
    images: ["https://comments-navy.vercel.app/ruta-a-tu-imagen.jpg"],
  },
};

// Dedicated viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: metadata.title,
    url: metadata.canonical,
    description: metadata.description,
    author: {
      "@type": "Person",
      name: metadata.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Tom Gandolfo",
      logo: {
        "@type": "ImageObject",
        url: "https://comments-navy.vercel.app/path-to-logo.jpg",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${metadata.canonical}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden p-6 sm:p-8 md:p-12">
            {children}
          </div>
        </main>

        {/* Google AdSense Script */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5480715870452313"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BY7SC5LHLH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BY7SC5LHLH');
          `}
        </Script>

        {/* Structured Data as JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
