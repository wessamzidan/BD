"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Compass, AlertCircle, Lightbulb, ListChecks, MousePointer, Trophy, XCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StoryStep {
  id: number
  title: string
  titleEn: string
  icon: React.ElementType
  description: string
  example: string
  tip: string
  color: string
}

const storySteps: StoryStep[] = [
  {
    id: 1,
    title: "البطل",
    titleEn: "Character",
    icon: User,
    description: "العميل هو البطل في القصة — وليس أنت. البطل لديه رغبة أو حاجة يريد تحقيقها.",
    example: "صاحب مشروع صغير يريد زيادة مبيعاته وتحقيق الاستقرار المالي.",
    tip: "اسأل نفسك: ما الذي يريده عميلي حقًا؟",
    color: "from-secondary to-blue-600"
  },
  {
    id: 2,
    title: "لديه مشكلة",
    titleEn: "Problem",
    icon: AlertCircle,
    description: "البطل يواجه مشكلة تمنعه من تحقيق ما يريد. المشكلة لها 3 مستويات: خارجية، داخلية، وفلسفية.",
    example: "المشكلة الخارجية: مبيعات ضعيفة. المشكلة الداخلية: شعور بالإحباط والفشل. المشكلة الفلسفية: لا ينبغي أن يكون النجاح بهذه الصعوبة.",
    tip: "المشكلة الداخلية هي الأقوى تأثيرًا على قرار الشراء.",
    color: "from-rose-500 to-red-600"
  },
  {
    id: 3,
    title: "يقابل مرشدًا",
    titleEn: "Guide",
    icon: Compass,
    description: "هنا تدخل أنت — كمرشد لديه تعاطف وخبرة. أنت لست البطل، بل الحكيم الذي يساعد البطل.",
    example: "نحن نفهم صعوبة بناء البيزنس (تعاطف). ساعدنا أكثر من 500 شركة على مضاعفة مبيعاتها (خبرة).",
    tip: "أظهر التعاطف أولًا، ثم أثبت خبرتك.",
    color: "from-gold-500 to-amber-600"
  },
  {
    id: 4,
    title: "يعطيه خطة",
    titleEn: "Plan",
    icon: ListChecks,
    description: "المرشد يعطي البطل خطة واضحة من 3-4 خطوات. الوضوح يزيل الخوف ويبني الثقة.",
    example: "الخطوة 1: احجز استشارة مجانية. الخطوة 2: نصمم لك خطة مخصصة. الخطوة 3: نطبق الخطة معًا.",
    tip: "3 خطوات مثالية. أكثر من 4 يصبح معقدًا.",
    color: "from-emerald-500 to-green-600"
  },
  {
    id: 5,
    title: "يدعوه للعمل",
    titleEn: "Call to Action",
    icon: MousePointer,
    description: "بدون CTA واضح، العميل لن يفعل شيئًا. اطلب منه اتخاذ إجراء محدد وواضح.",
    example: "احجز استشارتك المجانية الآن (CTA مباشر) أو حمّل الدليل المجاني (CTA انتقالي).",
    tip: "CTA واحد قوي أفضل من 10 خيارات تربك العميل.",
    color: "from-violet-500 to-purple-600"
  },
  {
    id: 6,
    title: "يتجنب الفشل",
    titleEn: "Failure",
    icon: XCircle,
    description: "وضّح ما سيخسره العميل إذا لم يتخذ إجراءً. الخوف من الخسارة محفز قوي.",
    example: "بدون نظام تسويقي واضح، ستستمر في خسارة العملاء لصالح منافسيك.",
    tip: "لا تبالغ في التخويف. كن صادقًا ومحددًا.",
    color: "from-slate-600 to-gray-700"
  },
  {
    id: 7,
    title: "ويحقق النجاح",
    titleEn: "Success",
    icon: Trophy,
    description: "ارسم صورة واضحة للنجاح. كيف ستتغير حياة العميل بعد التعامل معك؟",
    example: "تخيل بيزنس يجلب عملاء جدد كل يوم، تدفق نقدي مستقر، ووقت أكثر مع عائلتك.",
    tip: "استخدم صور وقصص نجاح حقيقية.",
    color: "from-gold-400 to-amber-500"
  }
]

export function StoryBrandFramework() {
  const [activeStep, setActiveStep] = useState(0)

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % storySteps.length)
  }

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + storySteps.length) % storySteps.length)
  }

  const currentStep = storySteps[activeStep]

  return (
    <section id="storybrand" className="py-24 bg-muted/30">
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
            إطار StoryBrand
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            كيف تبني رسالة تسويقية واضحة تجعل العميل يفهم ما تقدمه في ثوانٍ
          </p>
        </motion.div>

        {/* Visual Flow */}
        <div className="max-w-5xl mx-auto mb-12">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4">
            {storySteps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === activeStep
              const isPast = index < activeStep

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center min-w-[80px] group"
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-2",
                      isActive
                        ? `bg-gradient-to-br ${step.color} text-white shadow-lg`
                        : isPast
                        ? "bg-green-100 text-green-600"
                        : "bg-muted text-muted-foreground group-hover:bg-muted/80"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium text-center transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Step Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg"
            >
              {/* Header */}
              <div className={cn("p-6 bg-gradient-to-br text-white", currentStep.color)}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <currentStep.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">الخطوة {currentStep.id} من 7</div>
                    <h3 className="text-2xl font-bold">{currentStep.title}</h3>
                    <p className="text-white/80">{currentStep.titleEn}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <p className="text-lg text-foreground leading-relaxed">{currentStep.description}</p>
                </div>

                {/* Example */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">مثال عملي:</div>
                  <p className="text-foreground">{currentStep.example}</p>
                </div>

                {/* Tip */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gold-50 border border-gold-200">
                  <Lightbulb className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <p className="text-foreground">{currentStep.tip}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="p-4 border-t border-border flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  className="flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>السابق</span>
                </Button>
                <div className="flex items-center gap-1">
                  {storySteps.map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        index === activeStep ? "bg-secondary" : "bg-muted"
                      )}
                    />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  onClick={nextStep}
                  className="flex items-center gap-2"
                >
                  <span>التالي</span>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* StoryBrand Framework Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20">
            <img
              src="/images/storybrand-framework.jpg"
              alt="إطار StoryBrand - The 7 Elements That Build a Story That Sells"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Summary One-Liner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-white"
        >
          <h3 className="text-xl font-bold mb-4">الخلاصة في جملة واحدة</h3>
          <p className="text-lg text-white/90 leading-relaxed">
            <span className="text-gold-400">العميل</span> (البطل) لديه{" "}
            <span className="text-rose-400">مشكلة</span>، يقابل{" "}
            <span className="text-amber-400">مرشدًا</span> (أنت) يعطيه{" "}
            <span className="text-green-400">خطة</span> ويدعوه{" "}
            <span className="text-purple-400">للعمل</span>، فيتجنب{" "}
            <span className="text-gray-400">الفشل</span> ويحقق{" "}
            <span className="text-gold-300">النجاح</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
