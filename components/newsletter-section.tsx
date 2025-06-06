"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Send, CheckCircle } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-32 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/1.png?height=800&width=1200')] opacity-5" />
      <div className="absolute top-20 right-[20%] w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-[20%] w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 text-sm font-medium mb-8 border border-white/20">
            <Mail className="w-4 h-4 text-indigo-300" />
            <span className="text-white">Newsletter</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Tetap Terhubung dengan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
              Perkembangan Kami
            </span>
          </h2>

          <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Dapatkan update terbaru tentang kegiatan, pencapaian anak-anak, dan cara Anda dapat berkontribusi lebih
            banyak
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-indigo-200 focus:border-white/40 focus:ring-2 focus:ring-white/20"
                required
              />
              <Button
                type="submit"
                className="h-14 px-8 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white rounded-2xl shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300"
              >
                {subscribed ? <CheckCircle className="h-6 w-6" /> : <Send className="h-6 w-6" />}
              </Button>
            </div>
          </form>

          {subscribed && (
            <div className="mt-6 p-4 bg-green-500/20 backdrop-blur-md rounded-2xl border border-green-400/30 max-w-md mx-auto">
              <p className="text-green-200 font-medium">Terima kasih! Anda telah berlangganan newsletter kami.</p>
            </div>
          )}

          <p className="text-indigo-300 text-sm mt-6">Kami menghormati privasi Anda. Unsubscribe kapan saja.</p>
        </div>
      </div>
    </section>
  )
}
