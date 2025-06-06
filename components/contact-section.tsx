"use client"

import { useState, useEffect } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  // Email form state
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleEmailChange = (e) => {
    const { name, value } = e.target
    setEmailForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing')
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: emailForm.name,
          from_email: emailForm.email,
          subject: emailForm.subject,
          message: emailForm.message,
          to_email: 'admin@pantiasuhanpangrekso.org'
        },
        publicKey
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setEmailForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(''), 5000)
      }
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Fallback function if EmailJS is not configured
  const handleFallbackSubmit = () => {
    const subject = encodeURIComponent(emailForm.subject || 'Pesan dari Website')
    const body = encodeURIComponent(
      `Nama: ${emailForm.name}\nEmail: ${emailForm.email}\n\nPesan:\n${emailForm.message}`
    )
    const mailtoLink = `mailto:admin@pantiasuhanpangrekso.org?subject=${subject}&body=${body}`
    window.open(mailtoLink, '_blank')
    
    setSubmitStatus('success')
    setEmailForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitStatus(''), 5000)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    // Check if EmailJS is configured
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (serviceId && templateId && publicKey) {
      handleEmailSubmit(e)
    } else {
      handleFallbackSubmit()
    }
  }

  return (
<section id="kontak" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
        {/* Header Section - Mobile Responsive */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Mail className="w-3 h-3 md:w-4 md:h-4" />
            Hubungi Kami
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8">
            Mari{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Berkolaborasi
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Kami terbuka untuk kerjasama, kunjungan, atau pertanyaan apapun. Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        {/* Main Content Grid - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          
          {/* Contact Cards - Mobile Responsive */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Address Card */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-slate-100 hover:shadow-xl md:hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 group">
              <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/30 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Alamat Lengkap</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Alamat: Jl. Jenderal Sudirman No.53, Mardisari, Kertosari, Kec. Temanggung, Kabupaten Temanggung, Jawa Tengah 56217
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-slate-100 hover:shadow-xl md:hover:shadow-2xl hover:border-violet-100 transition-all duration-300 group">
              <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/30 group-hover:scale-110 transition-all duration-300">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Kontak Telepon</h3>
                  <div className="space-y-1 text-sm sm:text-base">
                    <p className="text-slate-600">Kantor: +62 274 123456</p>
                    <p className="text-slate-600">WhatsApp: +62 812 3456 7890</p>
                    <p className="text-slate-600">Darurat: +62 811 2345 6789</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-slate-100 hover:shadow-xl md:hover:shadow-2xl hover:border-purple-100 transition-all duration-300 group">
              <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Email</h3>
                  <div className="space-y-1 text-sm sm:text-base">
                    <p className="text-slate-600 break-all">info@pantiasuhanpangrekso.org</p>
                    <p className="text-slate-600 break-all">donasi@pantiasuhanpangrekso.org</p>
                    <p className="text-slate-600 break-all">admin@pantiasuhanpangrekso.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Mobile Responsive */}
          <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-slate-100">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8">Kirim Pesan</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg sm:rounded-xl">
                <p className="text-green-800 font-medium text-sm sm:text-base">✅ Pesan berhasil dikirim! Kami akan membalas segera.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg sm:rounded-xl">
                <p className="text-red-800 font-medium text-sm sm:text-base">❌ Gagal mengirim pesan. Silakan coba lagi.</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
              {/* Name and Email Row - Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-700">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={emailForm.name}
                    onChange={handleEmailChange}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg sm:rounded-xl border border-slate-200 p-3 sm:p-4 text-sm sm:text-base focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors disabled:opacity-50"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={emailForm.email}
                    onChange={handleEmailChange}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg sm:rounded-xl border border-slate-200 p-3 sm:p-4 text-sm sm:text-base focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors disabled:opacity-50"
                    placeholder="email@anda.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-slate-700">
                  Subjek
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={emailForm.subject}
                  onChange={handleEmailChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg sm:rounded-xl border border-slate-200 p-3 sm:p-4 text-sm sm:text-base focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors disabled:opacity-50"
                  placeholder="Subjek pesan Anda"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-700">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={emailForm.message}
                  onChange={handleEmailChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg sm:rounded-xl border border-slate-200 p-3 sm:p-4 text-sm sm:text-base h-32 sm:h-40 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors resize-none disabled:opacity-50"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </Button>
            </form>

            {/* Footer Link */}
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-xs sm:text-sm text-slate-500">
                Atau hubungi langsung via{" "}
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}