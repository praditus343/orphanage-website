"use client"

import Image from "next/image"
import { Heart, Users, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="tentang" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium mb-4 md:mb-6">
                <Award className="w-3 h-3 md:w-4 md:h-4" />
                Tentang Kami
              </div>
              <h2 className="text-responsive-xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
                Membangun Masa Depan Melalui{" "}
                <span className="text-gradient-primary">
                  Kasih Sayang dan Pendidikan
                </span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-responsive-sm text-muted-foreground leading-relaxed">
                  LKSA (Lembaga Kesejahteraan Sosial Anak) Pangrekso Dalem Bethlehem didirikan pada tahun 1933 dengan visi mulia untuk memberikan
                  rumah, pendidikan, dan harapan kepada anak-anak yang membutuhkan. Selama lebih dari 90 tahun, kami
                  telah menjadi rumah bagi ratusan anak di Temanggung.
                </p>
                <p className="text-responsive-sm text-muted-foreground leading-relaxed">
                  Dengan pendekatan holistik dalam semangat JITHu (Jujur, Iman pada Penyelenggaraan Ilahi, Tangguh, dan Humanis), 
                  kami tidak hanya menyediakan kebutuhan dasar, tetapi juga membentuk karakter, mengembangkan potensi, dan 
                  mempersiapkan mereka menjadi generasi yang mandiri dan berkontribusi positif bagi masyarakat.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/30 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-semibold text-card-foreground text-lg md:text-xl mb-2 md:mb-3">Visi</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Lembaga Kesejahteraan Sosial Anak (LKSA) yang dikelola secara profesional dalam semangat JITHu: jujur, iman pada Penyelenggaraan Ilahi, tangguh dan humanis
                </p>
              </div>
              <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/30 group-hover:scale-110 transition-all duration-300">
                  <Heart className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-semibold text-card-foreground text-lg md:text-xl mb-2 md:mb-3">Misi</h3>
                <div className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Memperjuangkan martabat dan hak anak</li>
                    <li>Merawat, mengasuh dan mendidik anak secara profesional</li>
                    <li>Menanamkan nilai/karakter JITHu</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 mx-auto max-w-md lg:max-w-none">
              <Image
                src="/1.png?height=600&width=500"
                alt="LKSA Pangrekso Dalem Bethlehem"
                width={500}
                height={600}
                className="rounded-2xl md:rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -top-3 md:-top-6 -right-3 md:-right-6 w-full h-full bg-gradient-primary rounded-2xl md:rounded-3xl -z-10 opacity-80" />
            <div className="absolute -bottom-3 md:-bottom-6 -left-3 md:-left-6 w-[80%] h-[80%] border-2 border-primary/20 rounded-2xl md:rounded-3xl -z-20" />
          </div>
        </div>
      </div>
    </section>
  )
}