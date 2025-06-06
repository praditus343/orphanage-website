"use client"

import { useState } from "react"
import { Home, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

interface HeaderProps {
  scrolled: boolean
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Header({ scrolled, activeSection, scrollToSection }: HeaderProps) {
  const isMobile = useMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang" },
    { id: "galeri", label: "Galeri" },
    { id: "program", label: "Program" },
    { id: "donasi", label: "Donasi" },
    { id: "kontak", label: "Kontak" },
  ]

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg py-1 sm:py-2" : "bg-transparent py-2 sm:py-3"
  }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Home className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg md:text-xl font-bold text-slate-900">Panti Asuhan</span>
                <p className="text-xs md:text-sm text-slate-600 -mt-1">Pangrekso Dalem Bethlehem</p>
              </div>
              <div className="block sm:hidden">
                <span className="text-base font-bold text-slate-900">Panti Asuhan</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA + Mobile Menu Button */}
            <div className="flex items-center gap-2 md:gap-3">
              <Button
                onClick={() => scrollToSection("kontak")}
                size={isMobile ? "sm" : "default"}
                className={`hidden sm:flex ${
                  scrolled
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-white/20 hover:bg-white/30 text-slate-900 backdrop-blur-sm border border-white/30"
                } transition-all duration-300`}
              >
                <span className="hidden md:inline">Hubungi Kami</span>
                <span className="md:hidden">Kontak</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-[70px] left-0 right-0 bg-white shadow-xl border-t">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-500"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t">
                  <Button
                    onClick={() => handleNavClick("kontak")}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}