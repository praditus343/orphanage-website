"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProgramsSection from "@/components/programs-section"
import TestimonialCarousel from "@/components/testimonial-carousel"
import GallerySection from "@/components/gallery-section"
import DonationSection from "@/components/donation-section"
import ImpactNumbers from "@/components/impact-numbers"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("beranda")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)

      // Update active section based on scroll position
      const sections = ["beranda", "tentang", "galeri", "program", "donasi", "kontak"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header 
        scrolled={scrolled} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <main className="flex-1">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ImpactNumbers />
        <GallerySection />
        <ProgramsSection />
        <TestimonialCarousel />
        <DonationSection />
        <ContactSection />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}