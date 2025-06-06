"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "Panti Asuhan Pangrekso Dalem Bethlehem telah memberikan saya fondasi yang kuat untuk meraih cita-cita. Pendidikan berkualitas dan bimbingan yang penuh kasih sayang membentuk saya menjadi pribadi yang mandiri dan bertanggung jawab.",
    name: "Dr. Budi Santoso, M.Pd",
    role: "Alumni 2015 • Dosen Universitas Gadjah Mada",
    avatar: "/1.png?height=120&width=120",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Selama 10 tahun tinggal di panti asuhan ini, saya merasakan kehangatan keluarga yang sesungguhnya. Para pengasuh tidak hanya memberikan tempat tinggal, tetapi juga membimbing kami dengan penuh dedikasi dan cinta kasih.",
    name: "Siti Rahayu, S.E",
    role: "Alumni 2018 • Manager Bank Mandiri",
    avatar: "/1.png?height=120&width=120",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Berkat dukungan dan bimbingan dari panti asuhan ini, saya berhasil menyelesaikan pendidikan hingga S2 dan kini bekerja di perusahaan multinasional. Saya sangat bersyukur atas semua yang telah diberikan.",
    name: "Ahmad Hidayat, S.T, M.T",
    role: "Alumni 2012 • Senior Engineer PT. Astra International",
    avatar: "/1.png?height=120&width=120",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Handle swipe gestures for mobile
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) nextTestimonial()
    if (isRightSwipe) prevTestimonial()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
<section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background elements - Mobile optimized */}
      <div className="absolute inset-0 bg-[url('/1.png?height=800&width=1200')] opacity-5" />
      <div className="absolute top-8 sm:top-16 md:top-20 right-[10%] sm:right-[20%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-8 sm:bottom-16 md:bottom-20 left-[10%] sm:left-[20%] w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section - Mobile responsive */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            Testimoni Alumni
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
            Cerita{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
              Sukses Alumni
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Dengarkan kisah inspiratif dari alumni yang telah berhasil meraih cita-cita mereka
          </p>
        </div>

        {/* Testimonial Card - Mobile responsive */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-white/20"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Quote Icon - Responsive positioning */}
            <Quote className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-indigo-400/30 absolute top-2 sm:top-4 md:top-6 lg:top-8 left-2 sm:left-4 md:left-6 lg:left-8" />

            <div className="text-center relative z-10">
              {/* Star Rating - Mobile responsive */}
              <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-yellow-400 fill-current mx-0.5" />
                ))}
              </div>

              {/* Testimonial Content - Mobile responsive */}
              <p
                className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl italic mb-6 sm:mb-8 md:mb-10 leading-relaxed text-white transition-opacity duration-500 px-2 sm:px-4 md:px-0 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author Section - Mobile responsive layout */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 absolute inset-0 blur-md animate-pulse" />
                  <Image
                    src={testimonials[currentIndex].avatar || "/1.png"}
                    alt={testimonials[currentIndex].name}
                    width={120}
                    height={120}
                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 sm:border-3 md:border-4 border-indigo-400 shadow-lg relative z-10 transition-transform duration-500 ${
                      isAnimating ? "scale-90" : "scale-100"
                    }`}
                  />
                  <div className="absolute -bottom-1 sm:-bottom-1.5 md:-bottom-2 -right-1 sm:-right-1.5 md:-right-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center z-20 shadow-lg">
                    <Quote className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                  </div>
                </div>

                {/* Author Info */}
                <div
                  className={`text-center sm:text-left transition-opacity duration-500 ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-indigo-300 font-medium text-sm sm:text-base leading-relaxed">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

{/* Navigation Controls - Mobile responsive */}
<div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-12 lg:mt-16">
  
  {/* Mobile Layout - Stack vertically */}
  <div className="flex sm:hidden flex-col items-center gap-4 w-full">
    {/* Dots Indicator for Mobile - Top */}
    <div className="flex items-center gap-2">
      {testimonials.map((_, index) => (
        <button
          key={index}
          className={`transition-all duration-300 ${
            index === currentIndex
              ? "w-6 h-2 bg-white rounded-full shadow-md"
              : "w-2 h-2 bg-white/40 hover:bg-white/60 rounded-full"
          }`}
          onClick={() => {
            setIsAnimating(true)
            setCurrentIndex(index)
            setTimeout(() => setIsAnimating(false), 500)
          }}
        />
      ))}
    </div>
    
    {/* Navigation Buttons for Mobile - Bottom */}
    <div className="flex items-center justify-center gap-6">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-2 border-white/60 bg-white/15 text-white hover:bg-white/25 hover:border-white/80 backdrop-blur-sm w-12 h-12 shadow-lg transition-all duration-300"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous</span>
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-2 border-white/60 bg-white/15 text-white hover:bg-white/25 hover:border-white/80 backdrop-blur-sm w-12 h-12 shadow-lg transition-all duration-300"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  </div>

  {/* Desktop Layout - Horizontal */}
  <div className="hidden sm:flex items-center justify-center gap-6 md:gap-8">
    {/* Previous Button */}
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border-2 border-white/60 bg-white/15 text-white hover:bg-white/25 hover:border-white/80 backdrop-blur-sm w-14 h-14 md:w-16 md:h-16 shadow-lg transition-all duration-300"
      onClick={prevTestimonial}
    >
      <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      <span className="sr-only">Previous</span>
    </Button>

    {/* Dots Indicator for Desktop */}
    <div className="flex items-center gap-3">
      {testimonials.map((_, index) => (
        <button
          key={index}
          className={`transition-all duration-300 ${
            index === currentIndex
              ? "w-10 h-3 bg-white rounded-full shadow-md"
              : "w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full"
          }`}
          onClick={() => {
            setIsAnimating(true)
            setCurrentIndex(index)
            setTimeout(() => setIsAnimating(false), 500)
          }}
        />
      ))}
    </div>

    {/* Next Button */}
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border-2 border-white/60 bg-white/15 text-white hover:bg-white/25 hover:border-white/80 backdrop-blur-sm w-14 h-14 md:w-16 md:h-16 shadow-lg transition-all duration-300"
      onClick={nextTestimonial}
    >
      <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      <span className="sr-only">Next</span>
    </Button>
  </div>
</div>

{/* Mobile Swipe Indicator - Enhanced */}
<div className="block sm:hidden text-center mt-4">
  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
    <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
    <p className="text-white/70 text-xs font-medium">Geser untuk melihat testimoni lainnya</p>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}