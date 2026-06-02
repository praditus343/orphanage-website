"use client"

import { useState } from "react"
import { Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  scrolled: boolean
  activeSection: string
  scrollToSection: (section: string) => void
}

export default function Header({ scrolled, activeSection, scrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Beranda", href: "beranda" },
    { name: "Tentang", href: "tentang" },
    { name: "Program", href: "program" },
    { name: "Galeri", href: "galeri" },
    // { name: "Testimoni", href: "testimoni" },
    { name: "Donasi", href: "donasi" },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
          : 'bg-transparent'
      }`}>
        <div className="container-responsive">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Home className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                  scrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  Panti Asuhan
                </span>
                <p className={`text-xs md:text-sm -mt-1 transition-colors duration-300 ${
                  scrolled ? 'text-slate-600' : 'text-white/80'
                }`}>
                  Pangrekso Dalem Bethlehem
                </p>
              </div>
              <div className="block sm:hidden">
                <span className={`text-base font-bold transition-colors duration-300 ${
                  scrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  Panti Asuhan
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    scrolled
                      ? activeSection === item.href
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      : activeSection === item.href
                        ? 'text-white bg-white/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Contact Button */}
              <Button
                onClick={() => scrollToSection("kontak")}
                size="sm"
                className={`hidden sm:flex text-sm font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white' 
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30'
                }`}
              >
                <span className="hidden md:inline">Hubungi Kami</span>
                <span className="md:hidden">Kontak</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                className={`lg:hidden p-2 transition-all duration-300 ${
                  scrolled 
                    ? 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600' 
                    : 'border-white/30 bg-white/10 text-white hover:bg-white/20'
                }`}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="relative flex flex-col bg-white border-r border-slate-200 w-64 h-full shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center">
                  <Home className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">Panti Asuhan</h2>
                  <p className="text-xs text-slate-600">Pangrekso Dalem</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant={activeSection === item.href ? "default" : "ghost"}
                  onClick={() => {
                    scrollToSection(item.href)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full justify-start ${
                    activeSection === item.href 
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </nav>
            <div className="p-4 border-t border-slate-200">
              <Button
                onClick={() => {
                  scrollToSection("kontak")
                  setMobileMenuOpen(false)
                }}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}