"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Wallet, CreditCard, Building, Smartphone, CheckCircle, QrCode } from "lucide-react"
import Image from "next/image"

export default function DonationSection() {
  const [donationComplete, setDonationComplete] = useState(false)

  const handleDonation = () => {
    setDonationComplete(true)
    setTimeout(() => setDonationComplete(false), 3000)
  }

  return (
<section id="donasi" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        <div className="container mx-auto px-4">
        {/* Header Section - Mobile Responsive */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Heart className="w-3 h-3 md:w-4 md:h-4" />
            Donasi & Dukungan
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8">
            Wujudkan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Harapan Bersama
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Setiap kontribusi Anda akan memberikan dampak nyata bagi pendidikan dan masa depan anak-anak
          </p>
        </div>

        {/* Main Content Card - Responsive Layout */}
        <div className="max-w-7xl mx-auto bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border border-slate-100">
          <div className="lg:flex">
            {/* Left Panel - Mission Section */}
            <div className="lg:w-2/5 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 p-4 sm:p-6 md:p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-[url('/1.png?height=600&width=400')] opacity-10" />
              <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-indigo-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-violet-500/20 rounded-full blur-2xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-400 to-violet-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Dukung Misi Kami</h2>
                </div>

                <p className="text-indigo-200 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg leading-relaxed">
                  Donasi Anda akan membantu kami memberikan pendidikan berkualitas, fasilitas yang layak, dan masa depan
                  yang cerah bagi anak-anak yang membutuhkan.
                </p>

                {/* Impact Points */}
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-indigo-500/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-indigo-400/30">
                      <span className="text-indigo-300 font-bold text-sm sm:text-base md:text-xl">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2 md:mb-3">Pendidikan Berkualitas</h3>
                      <p className="text-indigo-200 leading-relaxed text-xs sm:text-sm md:text-base">
                        Biaya sekolah, buku pelajaran, seragam, dan perlengkapan pendidikan lainnya untuk masa depan
                        yang cerah
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-violet-500/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-violet-400/30">
                      <span className="text-violet-300 font-bold text-sm sm:text-base md:text-xl">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2 md:mb-3">Kesehatan & Gizi</h3>
                      <p className="text-indigo-200 leading-relaxed text-xs sm:text-sm md:text-base">
                        Pemeriksaan kesehatan rutin, obat-obatan, dan makanan bergizi seimbang untuk tumbuh kembang
                        optimal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-purple-500/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-purple-400/30">
                      <span className="text-purple-300 font-bold text-sm sm:text-base md:text-xl">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2 md:mb-3">Fasilitas & Infrastruktur</h3>
                      <p className="text-indigo-200 leading-relaxed text-xs sm:text-sm md:text-base">
                        Pemeliharaan gedung, peralatan belajar, dan fasilitas penunjang untuk kenyamanan anak-anak
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Donation Form */}
            <div className="lg:w-3/5 p-4 sm:p-6 md:p-8 lg:p-12">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 md:mb-10">Pilih Metode Donasi</h3>

              {/* Donation Tabs - Mobile Responsive */}
              <Tabs defaultValue="transfer" className="mb-6 sm:mb-8 md:mb-10">
                <TabsList className="grid w-full grid-cols-2 h-12 sm:h-14 md:h-16 bg-slate-100 rounded-xl sm:rounded-2xl p-1">
                  <TabsTrigger value="transfer" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl">
                    <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Transfer Bank</span>
                    <span className="sm:hidden">Bank</span>
                  </TabsTrigger>
                  <TabsTrigger value="qris" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl">
                    <QrCode className="w-3 h-3 sm:w-4 sm:h-4" />
                    QRIS
                  </TabsTrigger>
                </TabsList>

                {/* Bank Transfer Tab */}
                <TabsContent value="transfer" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 md:mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300">
                      <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 md:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-xs sm:text-sm">BCA</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-slate-900 text-sm sm:text-base md:text-lg">Bank BCA</p>
                          <p className="text-slate-600 font-mono text-xs sm:text-sm md:text-base">1234567890</p>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600">a.n. Yayasan Pangrekso Dalem Bethlehem</p>
                    </div>

                    <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300">
                      <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 md:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-xs sm:text-sm">MDR</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-slate-900 text-sm sm:text-base md:text-lg">Bank Mandiri</p>
                          <p className="text-slate-600 font-mono text-xs sm:text-sm md:text-base">0987654321</p>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600">a.n. Yayasan Pangrekso Dalem Bethlehem</p>
                    </div>
                  </div>
                </TabsContent>

                {/* QRIS Tab */}
                <TabsContent value="qris" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 md:mt-8">
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-slate-200 shadow-lg mb-4 sm:mb-6">
                      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                        <Image
                          src="/qris.jpeg"
                          alt="QRIS Code untuk Donasi"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-center text-xs sm:text-sm text-slate-600 font-semibold">
                        Scan QR Code untuk Donasi
                      </p>
                    </div>
                    <div className="text-center px-4">
                      <p className="text-slate-600 mb-2 text-sm sm:text-base">Buka aplikasi pembayaran favorit Anda</p>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Kompatibel dengan semua aplikasi yang mendukung QRIS
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Donation Button - Mobile Responsive */}
              <Button
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300"
                onClick={handleDonation}
              >
                {donationComplete ? (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    <span>Terima Kasih!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    <span>Donasi Sekarang</span>
                  </div>
                )}
              </Button>

              {/* Footer Text */}
              <p className="text-center text-xs sm:text-sm text-slate-500 mt-4 sm:mt-6 px-2 sm:px-0 leading-relaxed">
                Donasi Anda akan digunakan sepenuhnya untuk kepentingan anak-anak dan dikelola dengan transparansi penuh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}