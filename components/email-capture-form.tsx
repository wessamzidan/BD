"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Download, Loader2, CheckCircle2, Linkedin, Facebook, Calendar, Globe, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wessamzidan/",
    icon: Linkedin,
    color: "bg-[#0077B5] hover:bg-[#005885]"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/wessamzidan83",
    icon: Facebook,
    color: "bg-[#1877F2] hover:bg-[#0d65d9]"
  },
  {
    name: "احجز استشارة",
    href: "https://cal.com/rawaabit/30min",
    icon: Calendar,
    color: "bg-gold-500 hover:bg-gold-600"
  },
  {
    name: "الروابط",
    href: "https://alrawaabit.com",
    icon: Globe,
    color: "bg-secondary hover:bg-secondary/90"
  },
  {
    name: "موقعي",
    href: "https://wessamzidan.com",
    icon: ExternalLink,
    color: "bg-primary hover:bg-primary/90"
  }
]

export function EmailCaptureForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !name) {
      setErrorMessage("من فضلك أدخل اسمك وبريدك الإلكتروني")
      setStatus("error")
      return
    }

    setStatus("loading")
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          source: 'Donald Miller Library - Download Form',
        }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setStatus("success")
        
        // Track conversion event
        if (typeof window !== "undefined" && (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag) {
          (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag("event", "download_summary", {
            event_category: "engagement",
            event_label: email
          })
        }
      } else {
        setStatus("error")
        setErrorMessage(data.error || "حدث خطأ، حاول مرة أخرى")
      }
    } catch {
      setStatus("error")
      setErrorMessage("حدث خطأ في الاتصال، حاول مرة أخرى")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-card rounded-2xl border border-border p-8 shadow-xl">
        {status === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">شكراً لك!</h3>
            <p className="text-muted-foreground mb-6">
              سيصلك الملخص على بريدك الإلكتروني قريباً
            </p>
            
            {/* Social Follow CTA */}
            <div className="border-t border-border pt-6 mt-6">
              <p className="text-sm text-muted-foreground mb-4">
                تابعني على وسائل التواصل الاجتماعي للمزيد من المحتوى
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors ${link.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-4">
                <Download className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                حمّل الملخص الكامل مجاناً
              </h3>
              <p className="text-muted-foreground text-sm">
                أدخل بياناتك لتحصل على ملخص PDF شامل لفلسفة Donald Miller
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="اسمك"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 text-right"
                  dir="rtl"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-right"
                  dir="rtl"
                />
              </div>
              
              {status === "error" && (
                <p className="text-sm text-red-500 text-center">{errorMessage}</p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-12 gold-gradient text-navy-900 font-semibold"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 ml-2" />
                    أرسل لي الملخص
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                لن نشارك بريدك الإلكتروني مع أي طرف ثالث
              </p>
            </form>

            {/* Social Links Preview */}
            <div className="border-t border-border pt-6 mt-6">
              <p className="text-sm text-muted-foreground text-center mb-4">
                أو تواصل معي مباشرة
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {socialLinks.slice(0, 3).map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-white text-sm font-medium transition-colors ${link.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{link.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}
