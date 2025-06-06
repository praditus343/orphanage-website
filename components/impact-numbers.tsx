"use client"

import { useEffect, useState } from "react"
import { Users, Award, BookOpen, Shield } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: 50,
    suffix: "+",
    label: "Anak Asuh Aktif",
    description: "Anak-anak yang sedang dalam asuhan dan pendidikan",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Award,
    number: 28,
    suffix: "",
    label: "Tahun Berdiri",
    description: "Pengalaman melayani anak-anak Indonesia",
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: BookOpen,
    number: 150,
    suffix: "+",
    label: "Alumni Sukses",
    description: "Alumni yang telah mandiri dan berkarir",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Shield,
    number: 25,
    suffix: "+",
    label: "Pengasuh & Staf",
    description: "Tim profesional yang berdedikasi",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
]

function AnimatedNumber({ target, suffix = "", duration = 2000 }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const increment = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCurrent(target)
        clearInterval(timer)
      } else {
        setCurrent(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration])

  return (
    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
      {current}
      {suffix}
    </span>
  )
}

export default function ImpactNumbers() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("impact-numbers")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
<section id="impact-numbers" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Award className="w-3 h-3 md:w-4 md:h-4" />
            Dampak & Pencapaian
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8">
            Angka yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Menginspirasi
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Lebih dari dua dekade melayani, kami bangga dengan pencapaian dan dampak positif yang telah tercipta
          </p>
        </div>

        {/* Mobile: 2 columns, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group hover:scale-105 transition-all duration-500 ${stat.bgColor} rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-lg md:hover:shadow-xl border border-slate-100`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>

              {/* Number */}
              <div className={`mb-2 sm:mb-3 md:mb-4 ${stat.iconColor}`}>
                {isVisible ? (
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                ) : (
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">0{stat.suffix}</span>
                )}
              </div>

              {/* Label */}
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-1 sm:mb-2 md:mb-3 leading-tight">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Stats Row for better mobile layout */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-12 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600 mb-1">
                100%
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Komitmen Kasih Sayang</p>
            </div>
            <div className="w-full sm:w-px h-px sm:h-8 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-violet-600 mb-1">
                24/7
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Pelayanan Terbaik</p>
            </div>
            <div className="w-full sm:w-px h-px sm:h-8 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 mb-1">
                ∞
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Harapan & Masa Depan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}