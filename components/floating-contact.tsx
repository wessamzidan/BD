"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Linkedin, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_NUMBER = "+201111306090"
const WHATSAPP_MESSAGE = encodeURIComponent("مرحباً، أريد استشارة مجانية حول تطوير البيزنس")
const LINKEDIN_URL = "https://www.linkedin.com/in/wessamzidan"

const contacts = [
  {
    id: "whatsapp",
    name: "واتساب",
    icon: MessageCircle,
    href: `https://wa.me/201111306090?text=${WHATSAPP_MESSAGE}`,
    color: "bg-[#25D366] hover:bg-[#128C7E]",
    shadowColor: "shadow-[#25D366]/30"
  },
  {
    id: "linkedin",
    name: "لينكد إن",
    icon: Linkedin,
    href: LINKEDIN_URL,
    color: "bg-[#0077B5] hover:bg-[#005885]",
    shadowColor: "shadow-[#0077B5]/30"
  }
]

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Show tooltip after mount to avoid hydration issues
  useEffect(() => {
    setShowTooltip(true)
    const timer = setTimeout(() => setShowTooltip(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-4 shadow-xl max-w-[260px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-gold-500" />
                <span className="font-bold text-foreground">استشارة مجانية</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                هل تريد تطبيق هذه الأفكار على بيزنسك؟ تواصل معي الآن للحصول على استشارة مجانية.
              </p>
            </motion.div>

            {/* Contact Buttons */}
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.id}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-white transition-all duration-300 shadow-lg",
                  contact.color,
                  contact.shadowColor
                )}
              >
                <contact.icon className="w-5 h-5" />
                <span className="font-medium">{contact.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <div className="relative">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap"
            >
              <span className="text-sm font-medium text-foreground">تواصل معي</span>
              <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-card border-b border-r border-border" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="فتح قائمة التواصل"
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300",
            isOpen
              ? "bg-muted-foreground text-white"
              : "bg-gradient-to-br from-secondary to-primary text-white"
          )}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Pulse Animation */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-secondary/30 animate-ping pointer-events-none" />
        )}
      </div>
    </div>
  )
}
