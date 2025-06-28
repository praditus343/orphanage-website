"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ZoomIn, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

// Tambahkan deskripsi khusus untuk setiap item galeri
const galleryImages = [
  {
    id: 1,
    src: "/belajar.jpg?height=400&width=600",
    alt: "Kegiatan belajar anak-anak",
    caption: "Suasana belajar yang kondusif dan menyenangkan",
    category: "Pendidikan",
    description: "Program pendidikan di Panti Asuhan Pangrekso Dalem Bethlehem dirancang dengan kurikulum terstruktur dan pendampingan personal, memastikan setiap anak mendapatkan fondasi akademik yang kuat untuk masa depan mereka."
  },
  {
    id: 2,
    src: "/olahraga.jpg?height=400&width=600",
    alt: "Kegiatan olahraga",
    caption: "Pengembangan fisik melalui kegiatan olahraga",
    category: "Olahraga",
    description: "Kegiatan olahraga rutin menjadi bagian penting dalam kehidupan anak-anak di panti untuk menjaga kesehatan, membangun kerjasama tim, dan mengembangkan disiplin diri melalui berbagai cabang olahraga yang diminati."
  },
  {
    id: 3,
    src: "/seni.png?height=400&width=600",
    alt: "Kegiatan kesenian",
    caption: "Eksplorasi bakat seni dan kreativitas",
    category: "Seni",
    description: "Kami mendorong pengembangan bakat seni dengan menyediakan berbagai kegiatan kreatif seperti musik, tari, lukis, dan kerajinan tangan yang memungkinkan anak-anak mengekspresikan diri dan mengembangkan apresiasi terhadap keindahan."
  },
  {
    id: 4,
    src: "/lab.jpg?height=400&width=600",
    alt: "Gedung panti asuhan",
    caption: "Fasilitas modern dan nyaman untuk anak-anak",
    category: "Fasilitas",
    description: "Panti Asuhan Pangrekso Dalem Bethlehem dilengkapi dengan fasilitas pendukung yang memadai, termasuk perpustakaan, laboratorium komputer, dan ruang belajar yang nyaman untuk mendukung proses belajar dan tumbuh kembang anak."
  },
  {
    id: 5,
    src: "/kekeluargaan.JPG?height=400&width=600",
    alt: "Kegiatan bersama",
    caption: "Momen kebersamaan dan kekeluargaan",
    category: "Kegiatan",
    description: "Kebersamaan adalah nilai inti dari Panti Asuhan Pangrekso Dalem Bethlehem. Melalui berbagai kegiatan komunal, kami membangun rasa persaudaraan dan kekeluargaan yang kuat di antara anak-anak dan pengasuh."
  },
  {
    id: 6,
    src: "/apresiasidonatur.JPG?height=400&width=600",
    alt: "Kunjungan donatur",
    caption: "Apresiasi kepada para donatur dan relawan",
    category: "Kunjungan",
    description: "Kami mengucapkan terima kasih kepada para donatur dan relawan yang telah memberikan dukungan berharga. Kontribusi Anda memungkinkan kami terus memberi pelayanan terbaik dan kesempatan berkembang bagi anak-anak di panti asuhan."
  },
]

const categories = ["Semua", "Pendidikan", "Olahraga", "Seni", "Fasilitas", "Kegiatan", "Kunjungan"]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    setAnimating(true)
    setTimeout(() => {
      if (activeCategory === "Semua") {
        setFilteredImages(galleryImages)
      } else {
        setFilteredImages(galleryImages.filter((img) => img.category === activeCategory))
      }
      setTimeout(() => setAnimating(false), 100)
    }, 300)
  }, [activeCategory])

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
<section id="galeri" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium mb-4 md:mb-6">
            <ZoomIn className="w-3 h-3 md:w-4 md:h-4" />
            Galeri Foto
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8">
            Momen{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Berharga
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Dokumentasi kegiatan dan pencapaian anak-anak di Panti Asuhan Pangrekso Dalem Bethlehem
          </p>
        </div>

        {/* Category Filter - Mobile Friendly */}
        <div className="mb-8 sm:mb-12">
          {/* Mobile: Scrollable horizontal */}
          <div className="flex md:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className={`rounded-full px-4 py-2 whitespace-nowrap flex-shrink-0 text-xs ${
                  activeCategory === category
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === "Semua" && <Filter className="w-3 h-3 mr-1" />}
                {category}
              </Button>
            ))}
          </div>

          {/* Desktop: Centered flex wrap */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full px-4 lg:px-6 ${
                  activeCategory === category
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === "Semua" && <Filter className="w-4 h-4 mr-2" />}
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Progressive Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl cursor-pointer bg-white transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl ${
                animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
              onClick={() => openModal(image)}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src || "/1.png"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 text-white transform translate-y-4 sm:translate-y-6 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-block bg-indigo-500 text-xs font-medium px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                  {image.category}
                </div>
                <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-tight mb-1 sm:mb-2 line-clamp-2">
                  {image.caption}
                </p>
                <p className="text-indigo-200 text-xs sm:text-sm hidden sm:block">
                  Panti Asuhan Pangrekso Dalem Bethlehem
                </p>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/30">
                <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12 sm:py-16 md:py-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3">
              Tidak ada foto ditemukan
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Coba pilih kategori lain untuk melihat foto-foto yang tersedia
            </p>
          </div>
        )}
      </div>

      {/* Modal - Mobile Optimized */}
      {selectedImage && (
        <div className="fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-lg">
          <div
            className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-violet-900/20"
            onClick={closeModal}
          />
          <div className="relative max-w-5xl w-full z-10 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 sm:-top-16 right-0 text-white hover:text-indigo-400 transition-colors z-10 p-2"
            >
              <X className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              <span className="sr-only">Close</span>
            </button>

{/* Modal Content */}
<div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
  <div className="relative">
    <Image
      src={selectedImage.src || "/1.png"}
      alt={selectedImage.alt}
      width={1000}
      height={600}
      className="w-full h-auto max-h-[60vh] object-cover"
    />
    <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-indigo-500 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
      {selectedImage.category}
    </div>
  </div>
  <div className="p-4 sm:p-6 md:p-8">
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
      {selectedImage.caption}
    </h3>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      {selectedImage.description}
    </p>
  </div>
</div>
          </div>
        </div>
      )}

      {/* Custom scrollbar hide utility */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}