import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  // Title dan description yang dioptimalkan
  title: "Panti Asuhan Pangrekso Dalem Bethlehem | Temanggung",
  description: "Website resmi Panti Asuhan Pangrekso Dalem Bethlehem Temanggung. Memberikan pendidikan berkualitas dan kasih sayang untuk anak-anak yang membutuhkan.",
  
  // Mempertahankan keywords yang sudah ada
  keywords: [
    "panti asuhan",
    "panti asuhan temanggung",
    "panti asuhan pangrekso dalem bethlehem",
    "panti asuhan bethlehem",
    "panti asuhan temanggung bethlehem",
    "panti asuhan pangrekso dalem",
    "panti asuhan pangrekso dalem temanggung",
    "panti asuhan pangrekso dalem bethlehem temanggung",
    "panti asuhan anak",
    "panti asuhan anak temanggung",
    "panti asuhan temanggung",
    "panti asuhan katolik",
    "panti asuhan katolik temanggung",
    "panti asuhan katolik pangrekso dalem bethlehem",
    "panti asuhan katolik pangrekso dalem",
    "panti asuhan katolik pangrekso dalem temanggung",
    "panti asuhan katolik pangrekso dalem bethlehem temanggung",
    "panti asuhan katolik bethlehem",
    "panti asuhan katolik bethlehem temanggung",
    "panti asuhan katolik pangrekso dalem temanggung",
    "panti asuhan katolik pangrekso dalem bethlehem temanggung",
    "panti asuhan anak katolik",
    "panti asuhan anak katolik temanggung",
    "panti asuhan anak katolik pangrekso dalem bethlehem",
    "panti asuhan anak katolik pangrekso dalem",
    "panti asuhan anak katolik pangrekso dalem temanggung",
    "panti asuhan anak katolik pangrekso dalem bethlehem temanggung",
    "panti asuhan anak katolik bethlehem",
    "panti asuhan anak katolik bethlehem temanggung",
    "panti asuhan anak katolik pangrekso dalem temanggung",
    "panti asuhan anak katolik pangrekso dalem bethlehem temanggung",
    "panti asuhan anak katolik pangrekso dalem temanggung",
    "panti asuhan anak katolik pangrekso dalem bethlehem temanggung",
    "panti asuhan anak katolik pangrekso dalem temanggung",
    "panti asuhan anak katolik pangrekso dalem bethlehem temanggung",
    "panti asuhan anak katolik pangrekso dalem temanggung",
    "panti asuhan anak katolik pangrekso dalem bethlehem temanggung",
    "panti asuhan anak katolik pangrekso dalem temanggung",
  ],
  
  // Konfigurasi icon yang sudah ada
  icons: {
    icon: [
      { url: "/ico/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/ico/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/ico/favicon.ico",
    apple: "/ico/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/ico/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon", 
        url: "/ico/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  
  // Open Graph untuk preview di media sosial - dengan domain sementara
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pangreksodalem.vercel.app",
    title: "Panti Asuhan Pangrekso Dalem Bethlehem",
    description: "Memberikan pendidikan berkualitas dan kasih sayang untuk anak-anak yang membutuhkan di Temanggung.",
    siteName: "Panti Asuhan Pangrekso Dalem Bethlehem",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Panti Asuhan Pangrekso Dalem Bethlehem",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Panti Asuhan Pangrekso Dalem Bethlehem",
    description: "Memberikan pendidikan berkualitas dan kasih sayang untuk anak-anak yang membutuhkan di Temanggung.",
    images: ["/og-image.jpg"],
  },
  
  // Robots directive dasar
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Schema.org JSON-LD minimal dengan domain sementara */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO", 
              "name": "Panti Asuhan Pangrekso Dalem Bethlehem",
              "url": "https://pangreksodalem.vercel.app",
              "logo": "https://pangreksodalem.vercel.app/logo.png",
              "description": "Panti Asuhan Pangrekso Dalem Bethlehem memberikan pendidikan berkualitas dan kasih sayang untuk anak-anak yang membutuhkan di Temanggung.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Temanggung",
                "addressRegion": "Jawa Tengah",
                "addressCountry": "ID"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}