import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
})

export const metadata = {
  // Title dan description yang dioptimalkan
  title: "Panti Asuhan Pangrekso Dalem Bethlehem | Temanggung",
  description: "Website resmi Panti Asuhan Pangrekso Dalem Bethlehem Temanggung. Memberikan pendidikan berkualitas dan kasih sayang untuk anak-anak yang membutuhkan sejak 1933.",
  
  // Keywords yang sudah ada tetap dipertahankan
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
    "panti asuhan katolik",
    "panti asuhan katolik temanggung",
    "panti asuhan katolik pangrekso dalem bethlehem",
    "panti asuhan katolik pangrekso dalem temanggung",
    "panti asuhan katolik bethlehem temanggung",
    "donasi panti asuhan temanggung",
    "yayasan anak temanggung",
    "lembaga sosial temanggung"
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
  
  // Enhanced Open Graph
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pangreksodalem.vercel.app",
    title: "Panti Asuhan Pangrekso Dalem Bethlehem | Rumah Kasih untuk Anak Indonesia",
    description: "Memberikan pendidikan berkualitas, kasih sayang, dan membangun masa depan cerah untuk anak-anak yang membutuhkan di Temanggung sejak 1933.",
    siteName: "Panti Asuhan Pangrekso Dalem Bethlehem",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Panti Asuhan Pangrekso Dalem Bethlehem - Rumah Kasih untuk Anak Indonesia",
      },
    ],
  },
  
  // Enhanced Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Panti Asuhan Pangrekso Dalem Bethlehem",
    description: "Memberikan pendidikan berkualitas dan kasih sayang untuk anak-anak yang membutuhkan di Temanggung sejak 1933.",
    images: ["/og-image.jpg"],
    site: "@pantibethlehem",
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://pangreksodalem.vercel.app",
  },
  
  // Enhanced robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  
  // Additional metadata
  authors: [{ name: "Panti Asuhan Pangrekso Dalem Bethlehem" }],
  generator: "Next.js",
  applicationName: "Panti Asuhan Pangrekso Dalem Bethlehem",
  category: "non-profit organization",
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#4F46E5" />
        
        {/* Schema.org JSON-LD dengan informasi lengkap */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO", 
              "name": "Panti Asuhan Pangrekso Dalem Bethlehem",
              "alternateName": "Panti Asuhan Bethlehem Temanggung",
              "url": "https://pangreksodalem.vercel.app",
              "logo": "https://pangreksodalem.vercel.app/logo.png",
              "description": "Panti Asuhan Pangrekso Dalem Bethlehem memberikan pendidikan berkualitas dan kasih sayang untuk anak-anak yang membutuhkan di Temanggung sejak 1933.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Jenderal Sudirman No.53, Mardisari, Kertosari",
                "addressLocality": "Temanggung",
                "addressRegion": "Jawa Tengah",
                "postalCode": "56217",
                "addressCountry": "ID"
              },
              "foundingDate": "1933",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-274-123456",
                "contactType": "customer service",
                "email": "info@pantiasuhanbethlehem.org"
              },
              "sameAs": [
                "https://facebook.com/pantiasuhanbethlehem",
                "https://instagram.com/pantiasuhanbethlehem"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* FORCE LIGHT MODE ONLY - Hapus dark mode support */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        
        {/* Vercel Analytics - Tambahkan di sini */}
        <Analytics />
      </body>
    </html>
  )
}