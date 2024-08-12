import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Generador de Comentarios para Profesores - Optimiza tu Retroalimentación",
  description:
    "Genera comentarios personalizados para informes de estudiantes con nuestra herramienta fácil de usar. Ideal para profesores que buscan ofrecer retroalimentación constructiva.",
  keywords:
    "generador de comentarios, herramientas para profesores, retroalimentación de estudiantes, comentarios en informes, herramientas educativas",
  author: "Tu Nombre o Tu Organización",
  canonical: "https://tusitio.com",
  og: {
    title: "Generador de Comentarios para Profesores",
    description:
      "Genera comentarios personalizados y significativos para informes de estudiantes de manera rápida y sencilla.",
    url: "https://tusitio.com",
    type: "website",
    image: "https://tusitio.com/ruta-a-tu-imagen.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Comentarios para Profesores",
    description:
      "Crea fácilmente comentarios para informes de estudiantes con nuestra herramienta fácil de usar.",
    image: "https://tusitio.com/ruta-a-tu-imagen.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <link rel="canonical" href={metadata.canonical} />

        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image" content={metadata.og.image} />

        <meta property="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta
          property="twitter:description"
          content={metadata.twitter.description}
        />
        <meta property="twitter:image" content={metadata.twitter.image} />
      </Head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden p-6 sm:p-8 md:p-12">
            {children}
          </div>
        </main>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5480715870452313"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
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
      </body>
    </html>
  );
}
