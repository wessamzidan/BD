"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Lightbulb, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AirplanePart {
  id: string
  name: string
  nameEn: string
  icon: string
  description: string
  importance: string
  example: string
  mistakes: string[]
  actions: string[]
  color: string
}

const airplaneParts: AirplanePart[] = [
  {
    id: "cockpit",
    name: "القيادة",
    nameEn: "Leadership",
    icon: "M20 12a8 8 0 11-16 0 8 8 0 0116 0z M12 10v4 M12 6v.01",
    description: "القائد هو من يحدد الاتجاه والرؤية. بدون قيادة واضحة، الطائرة لا تعرف إلى أين تتجه.",
    importance: "القيادة تحدد مصير البيزنس. القائد الجيد يلهم الفريق، يضع الأهداف، ويتخذ القرارات الصعبة.",
    example: "ستيف جوبز قاد Apple برؤية واضحة: منتجات بسيطة وجميلة تغير حياة الناس.",
    mistakes: [
      "عدم وجود رؤية واضحة للبيزنس",
      "تجنب اتخاذ القرارات الصعبة",
      "عدم التواصل الفعال مع الفريق",
      "محاولة فعل كل شيء بنفسك"
    ],
    actions: [
      "اكتب Mission Statement واضحة في جملة واحدة",
      "حدد 3 أهداف رئيسية لهذا العام",
      "قم بعقد اجتماع أسبوعي مع فريقك",
      "خصص وقتًا للتفكير الاستراتيجي"
    ],
    color: "from-gold-400 to-gold-600"
  },
  {
    id: "right-engine",
    name: "التسويق",
    nameEn: "Marketing",
    icon: "M19 14l-7 7m0 0l-7-7m7 7V3",
    description: "التسويق هو محرك الوعي. يجذب العملاء المحتملين ويبني الثقة قبل البيع.",
    importance: "بدون تسويق فعال، لا أحد يعرف أنك موجود. التسويق يحول الغرباء إلى مهتمين.",
    example: "HubSpot بنت إمبراطورية من خلال المحتوى التعليمي المجاني الذي يجذب العملاء.",
    mistakes: [
      "رسالة تسويقية غير واضحة",
      "التركيز على المنتج بدلاً من مشكلة العميل",
      "عدم وجود Funnel واضح",
      "إهمال بناء الثقة قبل البيع"
    ],
    actions: [
      "اكتب رسالتك التسويقية في 10 كلمات أو أقل",
      "حدد المشكلة الرئيسية التي تحلها",
      "أنشئ Lead Magnet مجاني",
      "ابن Email Sequence للتواصل المستمر"
    ],
    color: "from-secondary to-blue-600"
  },
  {
    id: "left-engine",
    name: "المبيعات",
    nameEn: "Sales",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    description: "المبيعات تحول الاهتمام إلى إيرادات. هي المحرك الذي يدفع الطائرة للأمام.",
    importance: "المبيعات هي الأكسجين للبيزنس. بدون مبيعات، لا يوجد بيزنس.",
    example: "Salesforce غيرت طريقة البيع بتتبع كل تفاعل مع العميل وبناء علاقات طويلة المدى.",
    mistakes: [
      "البيع بالضغط بدلاً من الحل",
      "عدم فهم مشكلة العميل الحقيقية",
      "عدم المتابعة مع العملاء المحتملين",
      "تجاهل الاعتراضات"
    ],
    actions: [
      "طور Script للمكالمات البيعية",
      "حدد الأسئلة التي تكشف مشاكل العميل",
      "أنشئ نظام متابعة منظم",
      "درب نفسك على التعامل مع الاعتراضات"
    ],
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "wings",
    name: "المنتجات",
    nameEn: "Products",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    description: "المنتجات هي الأجنحة التي ترفع الطائرة. يجب أن تحل مشاكل حقيقية للعملاء.",
    importance: "المنتج الجيد يبيع نفسه. العملاء السعداء يصبحون مسوقين مجانيين.",
    example: "iPhone لم يكن مجرد هاتف، بل حل لمشكلة: كيف نحمل الإنترنت والموسيقى والهاتف في جهاز واحد.",
    mistakes: [
      "بناء منتج لا يريده أحد",
      "تعقيد المنتج بميزات غير ضرورية",
      "عدم الاستماع لملاحظات العملاء",
      "المنافسة على السعر فقط"
    ],
    actions: [
      "تحدث مع 10 عملاء عن مشاكلهم",
      "حدد الميزة الأساسية الواحدة",
      "أنشئ نظام لجمع الملاحظات",
      "طور منتجك باستمرار بناءً على البيانات"
    ],
    color: "from-purple-500 to-violet-600"
  },
  {
    id: "body",
    name: "العمليات",
    nameEn: "Operations",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    description: "العمليات هي جسم الطائرة. الأنظمة والعمليات التي تجعل كل شيء يعمل بسلاسة.",
    importance: "العمليات الجيدة تحرر وقتك وتضمن الجودة. بدونها، الفوضى تسود.",
    example: "McDonald's نجحت بسبب أنظمتها: نفس البرجر في كل مكان في العالم.",
    mistakes: [
      "عدم توثيق العمليات",
      "الاعتماد على شخص واحد",
      "تجاهل الأتمتة",
      "عدم قياس الأداء"
    ],
    actions: [
      "وثّق أهم 5 عمليات في بيزنسك",
      "حدد ما يمكن أتمتته",
      "أنشئ Checklists للمهام المتكررة",
      "راجع العمليات كل ربع سنة"
    ],
    color: "from-orange-500 to-amber-600"
  },
  {
    id: "fuel",
    name: "التدفق النقدي",
    nameEn: "Cash Flow",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
    description: "التدفق النقدي هو الوقود. بدون وقود، الطائرة لا تطير مهما كانت جودتها.",
    importance: "Cash is King. البيزنس الرابح قد يفشل بسبب مشاكل التدفق النقدي.",
    example: "Amazon أعادت استثمار أرباحها لسنوات لبناء إمبراطورية، لكنها دائمًا حافظت على تدفق نقدي إيجابي.",
    mistakes: [
      "خلط المال الشخصي بمال البيزنس",
      "عدم تتبع المصروفات",
      "تأخر في تحصيل المستحقات",
      "النمو السريع بدون تخطيط مالي"
    ],
    actions: [
      "افصل حساباتك الشخصية عن البيزنس",
      "راجع تقرير التدفق النقدي أسبوعيًا",
      "حدد نقطة التعادل (Break-even)",
      "احتفظ باحتياطي 3 أشهر من المصروفات"
    ],
    color: "from-rose-500 to-red-600"
  }
]

export function AirplaneSystem() {
  const [selectedPart, setSelectedPart] = useState<AirplanePart | null>(null)

  return (
    <section id="airplane-system" className="relative py-24 bg-muted/30">
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
            نظام الطائرة للبيزنس
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            كل بيزنس ناجح يشبه الطائرة — كل جزء له دور حيوي. اضغط على أي جزء لفهم دوره.
          </p>
        </motion.div>

        {/* Airplane Image - Professional Blueprint Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20">
            <img
              src="/images/business-airplane.jpg"
              alt="نظام الطائرة للبيزنس - Business Airplane System"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            اضغط على أي جزء من الأجزاء أدناه لمعرفة المزيد
          </p>
        </motion.div>

        {/* Parts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {airplaneParts.map((part, index) => (
            <motion.button
              key={part.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPart(part)}
              className={cn(
                "p-4 rounded-xl border bg-card text-card-foreground transition-all duration-300",
                selectedPart?.id === part.id
                  ? "border-secondary shadow-lg shadow-secondary/20"
                  : "border-border hover:border-secondary/50 hover:shadow-md"
              )}
            >
              <div className={cn("w-10 h-10 rounded-lg bg-gradient-to-br mb-3 flex items-center justify-center mx-auto", part.color)}>
                <span className="text-white text-lg font-bold">{part.name.charAt(0)}</span>
              </div>
              <div className="text-sm font-semibold text-foreground">{part.name}</div>
              <div className="text-xs text-muted-foreground">{part.nameEn}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedPart(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={cn("p-6 bg-gradient-to-br text-white", selectedPart.color)}>
                <button
                  onClick={() => setSelectedPart(null)}
                  className="absolute top-4 left-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-1">{selectedPart.name}</h3>
                  <p className="text-white/80">{selectedPart.nameEn}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <p className="text-lg text-foreground leading-relaxed">{selectedPart.description}</p>
                </div>

                {/* Importance */}
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-secondary" />
                    <span className="font-semibold text-foreground">لماذا هذا مهم؟</span>
                  </div>
                  <p className="text-muted-foreground">{selectedPart.importance}</p>
                </div>

                {/* Example */}
                <div className="p-4 rounded-xl bg-gold-50 border border-gold-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowLeft className="w-5 h-5 text-gold-600" />
                    <span className="font-semibold text-foreground">مثال عملي</span>
                  </div>
                  <p className="text-muted-foreground">{selectedPart.example}</p>
                </div>

                {/* Mistakes */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <span className="font-semibold text-foreground">أخطاء شائعة</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedPart.mistakes.map((mistake, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-destructive mt-1">×</span>
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-foreground">خطوات العمل</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedPart.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-green-600 mt-1 font-bold">{i + 1}.</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Close Button */}
                <Button
                  onClick={() => setSelectedPart(null)}
                  variant="outline"
                  className="w-full"
                >
                  إغلاق
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
