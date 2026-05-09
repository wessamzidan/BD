"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToAirplane = () => {
    document.getElementById("airplane-system")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blueprint Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-700">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        
        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-white/80 text-sm">ملخص غير رسمي لفلسفة Donald Miller</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance"
          >
            حوّل البيزنس إلى
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold-300 via-gold-400 to-gold-500">
              نظام واضح وسهل
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            أهم أفكار Donald Miller في التسويق والمبيعات وإدارة الأعمال — بطريقة بصرية وعملية
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              onClick={scrollToAirplane}
              size="lg"
              className="gold-gradient text-navy-900 hover:opacity-90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:scale-105"
            >
              ابدأ الرحلة
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: "4", label: "كتب أساسية" },
              { value: "6", label: "أنظمة للبيزنس" },
              { value: "15", label: "دقيقة للفهم" },
              { value: "∞", label: "أفكار عملية" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={scrollToAirplane}
          >
            <ChevronDown className="w-8 h-8 text-white/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Airplane silhouette hint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
      >
        <svg
          viewBox="0 0 200 60"
          className="w-[600px] h-auto text-white"
          fill="currentColor"
        >
          <path d="M100 10 L180 30 L100 35 L20 30 Z" opacity="0.5" />
          <ellipse cx="100" cy="30" rx="15" ry="8" />
        </svg>
      </motion.div>
    </section>
  )
}
