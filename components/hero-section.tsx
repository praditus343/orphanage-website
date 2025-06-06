"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    // Ubah dari min-h-screen menjadi tinggi yang lebih kecil
    <section id="beranda" className="relative overflow-hidden h-[80vh] sm:h-[85vh] md:h-[90vh] lg:min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900" />
      <div className="absolute inset-0 opacity-10 bg-[url('/1.png?height=1080&width=1920')] bg-cover bg-center" />

      {/* Animated shapes - responsive */}
      <div className="absolute top-10 md:top-20 right-[10%] md:right-[20%] w-32 h-32 md:w-64 md:h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-10 md:bottom-20 left-[10%] md:left-[20%] w-48 h-48 md:w-96 md:h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Kurangi padding container */}
      <div className="container relative z-10 px-4 py-8 md:py-12">
        <div className="max-w-4xl text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 md:px-5 py-2 mb-6 md:mb-8 border border-white/20">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-white text-xs md:text-sm font-medium">Melayani Sejak 1933</span>
          </div>

          {/* Main Heading - kurangi margin bottom */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
            <span className="block">Membangun Masa Depan</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mt-1 md:mt-2">
              Anak-anak Indonesia
            </span>
          </h1>

          {/* Description - kurangi margin bottom */}
          <p className="text-base md:text-xl text-indigo-100 mb-6 md:mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Panti Asuhan Pangrekso Dalem Bethlehem memberikan pendidikan berkualitas, kasih sayang yang tulus, dan
            membangun masa depan cerah untuk anak-anak yang membutuhkan dukungan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
            <Button
              onClick={() => scrollToSection("donasi")}
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600/40"
            >
              Dukung Misi Kami
            </Button>
            <Button
              onClick={() => scrollToSection("tentang")}
              variant="outline"
              size="lg"
              className="border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white/70 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full backdrop-blur-sm transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom Gradient - kurangi tinggi */}
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-16 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => scrollToSection("tentang")}
          className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
        >
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </button>
      </div>
    </section>
  )
}