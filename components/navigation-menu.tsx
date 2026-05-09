"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Plane, BookOpen, Users, TrendingUp, Target, Settings, FileText, Download } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "about", label: "عني", icon: Users },
  { id: "airplane", label: "نظام الطائرة", icon: Plane },
  { id: "books", label: "الكتب", icon: BookOpen },
  { id: "storybrand", label: "StoryBrand", icon: Target },
  { id: "funnel", label: "قمع التسويق", icon: TrendingUp },
  { id: "business-os", label: "نظام التشغيل", icon: Settings },
  { id: "playbook", label: "خطة العمل", icon: FileText },
  { id: "summary", label: "الملخص", icon: Download },
]

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPos = window.scrollY + 200
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation - Fixed Top Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border hidden lg:block"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-bold text-foreground hover:text-primary transition-colors"
            >
              Donald Miller Library
            </button>
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center lg:hidden"
        aria-label="القائمة"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-4 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">انتقل إلى</h3>
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "flex items-center gap-3 px-6 py-3 rounded-xl w-full max-w-xs text-right transition-colors",
                      activeSection === item.id
                        ? "bg-primary text-white"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
