"use client"

import Image from "next/image"
import { Heart, Users, Award } from "lucide-react"

export default function AboutSection() {
  return (
<section id="tentang" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium mb-4 md:mb-6">
                <Award className="w-3 h-3 md:w-4 md:h-4" />
                Tentang Kami
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
                Membangun Masa Depan Melalui{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  Kasih Sayang dan Pendidikan
                </span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                  Panti Asuhan Pangrekso Dalem Bethlehem didirikan pada tahun 1933 dengan visi mulia untuk memberikan
                  rumah, pendidikan, dan harapan kepada anak-anak yang membutuhkan. Selama lebih dari 25 tahun, kami
                  telah menjadi rumah bagi ratusan anak.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                  Dengan pendekatan holistik, kami tidak hanya menyediakan kebutuhan dasar, tetapi juga membentuk
                  karakter, mengembangkan potensi, dan mempersiapkan mereka menjadi generasi yang mandiri dan
                  berkontribusi positif bagi masyarakat.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/30 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg md:text-xl mb-2 md:mb-3">Visi</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Menjadi rumah yang memberikan harapan dan masa depan cerah bagi setiap anak
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl hover:border-violet-100 transition-all duration-300 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/30 group-hover:scale-110 transition-all duration-300">
                  <Heart className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg md:text-xl mb-2 md:mb-3">Misi</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Memberikan pendidikan dan kasih sayang yang berkualitas
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 mx-auto max-w-md lg:max-w-none">
              <Image
                src="/1.png?height=600&width=500"
                alt="About us"
                width={500}
                height={600}
                className="rounded-2xl md:rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -top-3 md:-top-6 -right-3 md:-right-6 w-full h-full bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl md:rounded-3xl -z-10 opacity-80" />
            <div className="absolute -bottom-3 md:-bottom-6 -left-3 md:-left-6 w-[80%] h-[80%] border-2 border-indigo-200 rounded-2xl md:rounded-3xl -z-20" />
          </div>
        </div>
      </div>
    </section>
  )
}