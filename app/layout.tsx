import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Panti Asuhan Pangrekso Dalem Bethlehem",
  description: "Website resmi Panti Asuhan Pangrekso Dalem Bethlehem",
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}