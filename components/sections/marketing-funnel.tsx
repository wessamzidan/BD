"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, Lightbulb, Heart, Globe, Gift, Mail, ShoppingCart, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FunnelStage {
  id: string
  name: string
  nameEn: string
  icon: React.ElementType
  description: string
  tools: string[]
  goal: string
  color: string
  width: string
}

const funnelStages: FunnelStage[] = [
  {
    id: "curiosity",
    name: "الفضول",
    nameEn: "Curiosity",
    icon: Eye,
    description: "في هذه المرحلة، العميل لا يعرفك بعد. هدفك هو جذب انتباهه وإثارة فضوله.",
    tools: ["موقع إلكتروني واضح", "محتوى على السوشيال ميديا", "إعلانات مستهدفة", "SEO"],
    goal: "اجعل العميل يقول: من هؤلاء؟ أريد أن أعرف أكثر.",
    color: "from-secondary to-blue-500",
    width: "w-full"
  },
  {
    id: "enlightenment",
    name: "الوعي",
    nameEn: "Enlightenment",
    icon: Lightbulb,
    description: "العميل مهتم الآن. وقت بناء الثقة وإثبات أنك تفهم مشكلته وتملك الحل.",
    tools: ["Lead Magnet مجاني", "PDF أو دليل مفيد", "ويبينار أو فيديو تعليمي", "نشرة بريدية"],
    goal: "اجعل العميل يقول: هؤلاء يفهمون مشكلتي ويمكنهم مساعدتي.",
    color: "from-gold-500 to-amber-500",
    width: "w-4/5"
  },
  {
    id: "commitment",
    name: "الالتزام",
    nameEn: "Commitment",
    icon: Heart,
    description: "العميل جاهز للشراء. وقت تقديم العرض وإزالة العوائق الأخيرة.",
    tools: ["صفحة مبيعات قوية", "عرض لا يُقاوم", "ضمان أو تجربة مجانية", "شهادات العملاء"],
    goal: "اجعل العميل يقول: أنا مستعد للشراء الآن.",
    color: "from-emerald-500 to-green-500",
    width: "w-3/5"
  }
]

interface FunnelTool {
  id: string
  name: string
  icon: React.ElementType
  stage: string
  description: string
}

const funnelTools: FunnelTool[] = [
  {
    id: "website",
    name: "الموقع الإلكتروني",
    icon: Globe,
    stage: "curiosity",
    description: "واجهتك الرئيسية. يجب أن يكون واضحًا ويجيب على سؤال: ماذا تفعل ولماذا يهمني؟"
  },
  {
    id: "lead-magnet",
    name: "Lead Magnet",
    icon: Gift,
    stage: "enlightenment",
    description: "محتوى مجاني قيّم مقابل البريد الإلكتروني. يحل مشكلة صغيرة ويفتح الباب لمشكلة أكبر."
  },
  {
    id: "email",
    name: "تسلسل الإيميلات",
    icon: Mail,
    stage: "enlightenment",
    description: "سلسلة من 5-7 إيميلات تبني الثقة وتقدم قيمة قبل أن تطلب البيع."
  },
  {
    id: "sales",
    name: "صفحة المبيعات",
    icon: ShoppingCart,
    stage: "commitment",
    description: "صفحة واحدة تشرح العرض بوضوح، تعالج الاعتراضات، وتدعو للشراء."
  }
]

export function MarketingFunnel() {
  const [activeStage, setActiveStage] = useState<string | null>(null)

  return (
    <section id="funnel" className="py-24 bg-background">
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
            قمع التسويق
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            رحلة العميل من غريب لا يعرفك إلى عميل يشتري منك — في 3 مراحل
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Funnel Visualization */}
          <div className="flex flex-col items-center mb-16">
            {funnelStages.map((stage, index) => {
              const Icon = stage.icon
              const isActive = activeStage === stage.id
              const isHovered = activeStage === stage.id

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="w-full flex flex-col items-center"
                >
                  {/* Stage */}
                  <motion.button
                    onHoverStart={() => setActiveStage(stage.id)}
                    onHoverEnd={() => setActiveStage(null)}
                    onClick={() => setActiveStage(isActive ? null : stage.id)}
                    className={cn(
                      "relative rounded-xl p-6 transition-all duration-300",
                      "bg-gradient-to-l",
                      stage.color,
                      stage.width,
                      isHovered ? "scale-105 shadow-xl" : "shadow-md"
                    )}
                  >
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">{stage.name}</div>
                          <div className="text-white/70 text-sm">{stage.nameEn}</div>
                        </div>
                      </div>
                      <div className="text-left max-w-xs hidden md:block">
                        <p className="text-white/80 text-sm">{stage.goal}</p>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 pt-4 border-t border-white/20"
                      >
                        <p className="text-white/90 mb-4">{stage.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {stage.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 rounded-full bg-white/20 text-white text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.button>

                  {/* Arrow */}
                  {index < funnelStages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15 }}
                      className="my-2"
                    >
                      <ArrowDown className="w-6 h-6 text-muted-foreground" />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Tools Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              أدوات الـ Funnel الأساسية
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {funnelTools.map((tool, index) => {
                const Icon = tool.icon
                const stage = funnelStages.find(s => s.id === tool.stage)

                return (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0", stage?.color)}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-1">{tool.name}</div>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-6 rounded-2xl bg-gradient-to-l from-navy-800 to-navy-900 text-white text-center"
          >
            <p className="text-lg">
              <span className="text-gold-400 font-bold">القاعدة الذهبية:</span>{" "}
              لا تطلب البيع قبل أن تبني الثقة. معظم العملاء يحتاجون{" "}
              <span className="text-gold-300">5-7 نقاط اتصال</span>{" "}
              قبل أن يكونوا مستعدين للشراء.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
