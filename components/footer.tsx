"use client"

import { MapPin, Phone, Mail, Home } from "lucide-react"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  const navigationItems = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang Kami" },
    { id: "galeri", label: "Galeri" },
    { id: "program", label: "Program" },
    { id: "donasi", label: "Donasi" },
    { id: "kontak", label: "Kontak" },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ]

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 flex-shrink-0 mt-0.5" />,
      text: "Jl. Bethlehem No. 123, Yogyakarta 55223"
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 flex-shrink-0 mt-0.5" />,
      text: "+62 274 123456"
    },
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 flex-shrink-0 mt-0.5" />,
      text: "info@pantiasuhanpangrekso.org"
    }
  ]

  return (
    <footer className="bg-slate-900 text-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Home className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
              </div>
              <div>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold block leading-tight">Panti Asuhan</span>
                <p className="text-xs sm:text-sm text-slate-400 -mt-0.5">Pangrekso Dalem Bethlehem</p>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-md text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8">
              Memberikan kasih sayang, pendidikan berkualitas, dan membangun masa depan cerah untuk anak-anak
              Indonesia yang membutuhkan dukungan sejak 1933.
            </p>

            {/* Social Links */}
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-slate-800 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors group"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="sm:col-span-1">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 md:mb-6">Navigasi</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-xs sm:text-sm md:text-base text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="sm:col-span-1">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 md:mb-6">Kontak</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3 group">
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {contact.icon}
                  </div>
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-xs sm:text-sm md:text-base leading-relaxed">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800 pt-4 sm:pt-6 md:pt-8 text-center text-slate-500">
          <p className="hover:text-slate-400 transition-colors text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
            &copy; {new Date().getFullYear()} Panti Asuhan Pangrekso Dalem Bethlehem. Seluruh hak cipta dilindungi
            undang-undang.
          </p>
        </div>
      </div>
    </footer>
  )
}