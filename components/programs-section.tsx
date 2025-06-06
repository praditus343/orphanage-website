"use client"

import { Heart, ImageIcon, BookOpen } from "lucide-react"

export default function ProgramsSection() {
  const programs = [
    {
      icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />,
      title: "Pendidikan Formal",
      description: "Program pendidikan komprehensif dari tingkat dasar hingga perguruan tinggi, dengan dukungan beasiswa dan bimbingan akademik yang intensif untuk memastikan setiap anak mencapai potensi terbaiknya.",
      features: [
        "Pendidikan SD - SMA",
        "Beasiswa Perguruan Tinggi", 
        "Bimbingan Belajar Intensif"
      ],
      colorClass: "indigo",
      shadowColor: "shadow-indigo-500/20",
      hoverShadow: "group-hover:shadow-indigo-500/30",
      borderHover: "hover:border-indigo-100",
      bgGradient: "from-indigo-500/5 to-indigo-500/10",
      iconBg: "from-indigo-500 to-indigo-600",
      dotColor: "bg-indigo-500"
    },
    {
      icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />,
      title: "Pembinaan Karakter",
      description: "Program pembinaan spiritual dan moral yang bertujuan membentuk karakter yang kuat, nilai-nilai kebaikan, dan kepribadian yang berintegritas tinggi.",
      features: [
        "Bimbingan Spiritual",
        "Pendidikan Moral & Etika",
        "Konseling Psikologi"
      ],
      colorClass: "violet",
      shadowColor: "shadow-violet-500/20",
      hoverShadow: "group-hover:shadow-violet-500/30",
      borderHover: "hover:border-violet-100",
      bgGradient: "from-violet-500/5 to-violet-500/10",
      iconBg: "from-violet-500 to-violet-600",
      dotColor: "bg-violet-500"
    },
    {
      icon: <ImageIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />,
      title: "Pengembangan Bakat",
      description: "Program pengembangan bakat dan minat di berbagai bidang untuk membantu anak-anak menemukan dan mengasah potensi unik mereka.",
      features: [
        "Seni & Musik",
        "Olahraga & Kesehatan",
        "Keterampilan Praktis"
      ],
      colorClass: "purple",
      shadowColor: "shadow-purple-500/20",
      hoverShadow: "group-hover:shadow-purple-500/30",
      borderHover: "hover:border-purple-100",
      bgGradient: "from-purple-500/5 to-purple-500/10",
      iconBg: "from-purple-500 to-purple-600",
      dotColor: "bg-purple-500"
    }
  ]

  return (
    <section id="program" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium mb-4 md:mb-6">
            <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
            Program Unggulan
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8">
            Program & Kegiatan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Berkualitas
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Kami menyediakan program komprehensif untuk mendukung perkembangan anak-anak secara menyeluruh, dari
            pendidikan formal hingga pengembangan karakter dan keterampilan hidup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 border border-slate-100 ${program.borderHover} relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${program.iconBg} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8 shadow-lg ${program.shadowColor} ${program.hoverShadow} group-hover:scale-110 transition-all duration-300 relative z-10`}>
                {program.icon}
              </div>

              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 relative z-10">{program.title}</h3>

              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 md:mb-8 relative z-10 text-xs sm:text-sm md:text-base">
                {program.description}
              </p>

              <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-slate-600 relative z-10">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 md:gap-3">
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-${program.colorClass}-100 flex items-center justify-center flex-shrink-0`}>
                      <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 ${program.dotColor} rounded-full`} />
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}