"use client"

import { motion } from "framer-motion"
import { 
  Crown, 
  Megaphone, 
  TrendingUp, 
  Package, 
  Settings, 
  Wallet,
  User,
  Compass,
  Target,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  ArrowUp,
  Calendar,
  Globe,
  ExternalLink,
  MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { EmailCaptureForm } from "@/components/email-capture-form"

const systemParts = [
  { name: "القيادة", icon: Crown, color: "text-gold-500 bg-gold-500/10" },
  { name: "التسويق", icon: Megaphone, color: "text-secondary bg-secondary/10" },
  { name: "المبيعات", icon: TrendingUp, color: "text-emerald-500 bg-emerald-500/10" },
  { name: "المنتجات", icon: Package, color: "text-violet-500 bg-violet-500/10" },
  { name: "العمليات", icon: Settings, color: "text-orange-500 bg-orange-500/10" },
  { name: "التدفق النقدي", icon: Wallet, color: "text-rose-500 bg-rose-500/10" },
]

const storyElements = [
  { name: "البطل", subtitle: "العميل", icon: User },
  { name: "المرشد", subtitle: "أنت", icon: Compass },
  { name: "الخطة", subtitle: "الحل", icon: Target },
]

const keyInsights = [
  "العميل هو البطل — ليس أنت",
  "وضّح المشكلة قبل الحل",
  "3 خطوات واضحة تبني الثقة",
  "التدفق النقدي هو الوقود",
  "النظام أهم من الفكرة",
]

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
    name: "WhatsApp",
    href: "https://wa.me/201111306090?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8B",
    icon: MessageCircle,
    color: "bg-[#25D366] hover:bg-[#128C7E]"
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

export function FinalSummary() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const shareOnTwitter = () => {
    const text = "اكتشفت نظام Donald Miller للبيزنس - أفكار عملية في التسويق والمبيعات وإدارة الأعمال"
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank")
  }

  const shareOnLinkedIn = () => {
    window.open("https://www.linkedin.com/sharing/share-offsite/", "_blank")
  }

  return (
    <section id="summary" className="py-24 bg-gradient-to-b from-muted/30 to-navy-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Donald Miller Business System
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            ملخص بصري لكل ما تعلمته
          </p>
        </motion.div>

        {/* Visual Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
            {/* Header */}
            <div className="p-8 bg-gradient-to-l from-navy-800 to-navy-900 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">نظام البيزنس المتكامل</h3>
              <p className="text-white/70">6 أنظمة + قصة واضحة = بيزنس ناجح</p>
            </div>

            {/* Systems Grid */}
            <div className="p-8 border-b border-border">
              <h4 className="text-lg font-semibold text-foreground mb-6 text-center">
                الأنظمة الستة (نموذج الطائرة)
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {systemParts.map((part, index) => {
                  const Icon = part.icon
                  return (
                    <motion.div
                      key={part.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/50"
                    >
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", part.color)}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-foreground">{part.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* StoryBrand Summary */}
            <div className="p-8 border-b border-border bg-gold-50/50">
              <h4 className="text-lg font-semibold text-foreground mb-6 text-center">
                قصة العلامة (StoryBrand)
              </h4>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {storyElements.map((element, index) => {
                  const Icon = element.icon
                  return (
                    <motion.div
                      key={element.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-gold-600" />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{element.name}</div>
                        <div className="text-sm text-muted-foreground">{element.subtitle}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Key Insights */}
            <div className="p-8">
              <h4 className="text-lg font-semibold text-foreground mb-6 text-center">
                5 أفكار أساسية
              </h4>
              <div className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {keyInsights.map((insight, index) => (
                  <motion.div
                    key={insight}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{insight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Email Capture Form */}
        <div className="mb-16">
          <EmailCaptureForm />
        </div>

        {/* Share Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">شارك:</span>
            <Button
              variant="outline"
              size="lg"
              onClick={shareOnTwitter}
              className="flex items-center gap-2"
            >
              <Twitter className="w-5 h-5" />
              <span className="hidden sm:inline">تويتر</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={shareOnLinkedIn}
              className="flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              <span className="hidden sm:inline">لينكد إن</span>
            </Button>
          </div>
        </motion.div>

        {/* Footer with Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white pt-8"
        >
          {/* Social Media Links */}
          <div className="mb-8">
            <p className="text-white/60 mb-4">تابعني وتواصل معي</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium transition-all duration-300 shadow-lg hover:scale-105 ${link.color}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-2xl mx-auto mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              هذا الموقع للاستخدام الشخصي والتعليمي فقط، وليس موقعاً رسمياً أو مرتبطاً بـ Donald Miller أو StoryBrand.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              نحن نحب فلسفته ونشارك ملخصات كتبه لمساعدة رواد الأعمال العرب على بناء أعمال ناجحة.
              جميع الحقوق الفكرية للكتب والأطر المذكورة تعود لـ Donald Miller و StoryBrand.
            </p>
          </div>

          {/* Credits */}
          <div className="mb-6">
            <p className="text-white/40 text-sm">
              صُمم بواسطة{" "}
              <a 
                href="https://wessamzidan.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                وسام زيدان
              </a>
              {" "}|{" "}
              <a 
                href="https://alrawaabit.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                الروابط
              </a>
            </p>
          </div>

          <p className="text-white/60 mb-6">
            مستوحى من كتب Donald Miller
          </p>
          
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="text-white/60 hover:text-white hover:bg-white/10"
          >
            <ArrowUp className="w-5 h-5 ml-2" />
            العودة للأعلى
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
