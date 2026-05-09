"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Circle, Rocket, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface ActionItem {
  id: string
  title: string
  description: string
  category: string
  priority: "high" | "medium" | "low"
}

const actionItems: ActionItem[] = [
  {
    id: "1",
    title: "اكتب رسالة تسويقية واضحة",
    description: "في جملة واحدة: ما المشكلة التي تحلها ولمن؟",
    category: "التسويق",
    priority: "high"
  },
  {
    id: "2",
    title: "حدد مشكلة العميل بوضوح",
    description: "المشكلة الخارجية، الداخلية، والفلسفية التي يواجهها عميلك المثالي.",
    category: "التسويق",
    priority: "high"
  },
  {
    id: "3",
    title: "أنشئ Lead Magnet مفيد",
    description: "PDF، فيديو، أو أداة مجانية تحل مشكلة صغيرة وتجمع إيميلات.",
    category: "التسويق",
    priority: "high"
  },
  {
    id: "4",
    title: "ابنِ Email Sequence",
    description: "5-7 إيميلات تبني الثقة وتقدم قيمة قبل أن تطلب البيع.",
    category: "التسويق",
    priority: "medium"
  },
  {
    id: "5",
    title: "راجع مصادر الإيرادات",
    description: "ما هي الـ 20% من المنتجات/الخدمات التي تجلب 80% من الإيرادات؟",
    category: "التدفق النقدي",
    priority: "high"
  },
  {
    id: "6",
    title: "حسّن عرضك البيعي",
    description: "هل عرضك واضح؟ هل يحل مشكلة محددة؟ هل السعر مبرر؟",
    category: "المبيعات",
    priority: "medium"
  },
  {
    id: "7",
    title: "بسّط العمليات الأساسية",
    description: "وثّق أهم 3 عمليات متكررة وأنشئ Checklists لها.",
    category: "العمليات",
    priority: "medium"
  },
  {
    id: "8",
    title: "اجمع شهادات العملاء",
    description: "5 شهادات قوية يمكن أن تضاعف معدل التحويل.",
    category: "المبيعات",
    priority: "medium"
  },
  {
    id: "9",
    title: "حدد Mission Statement",
    description: "جملة واحدة توضح لماذا يوجد بيزنسك وما التغيير الذي تصنعه.",
    category: "القيادة",
    priority: "high"
  },
  {
    id: "10",
    title: "راقب التدفق النقدي أسبوعيًا",
    description: "لا تنتظر نهاية الشهر. راجع الأرقام كل أسبوع.",
    category: "التدفق النقدي",
    priority: "high"
  }
]

const categoryColors: Record<string, string> = {
  "التسويق": "bg-secondary/10 text-secondary border-secondary/20",
  "المبيعات": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "العمليات": "bg-orange-500/10 text-orange-600 border-orange-500/20",
  "التدفق النقدي": "bg-rose-500/10 text-rose-600 border-rose-500/20",
  "القيادة": "bg-gold-500/10 text-gold-600 border-gold-500/20"
}

const priorityColors: Record<string, string> = {
  high: "bg-rose-100 text-rose-700",
  medium: "bg-amber-100 text-amber-700",
  low: "bg-green-100 text-green-700"
}

const priorityLabels: Record<string, string> = {
  high: "عاجل",
  medium: "مهم",
  low: "تحسين"
}

export function ActionPlaybook() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const progress = (checkedItems.size / actionItems.length) * 100

  return (
    <section id="playbook" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            ابدأ التطبيق اليوم
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            10 خطوات عملية يمكنك البدء بها الآن لتحسين بيزنسك
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">التقدم</span>
            <span className="text-sm font-medium text-muted-foreground">
              {checkedItems.size} / {actionItems.length} مكتمل
            </span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-l from-gold-500 to-gold-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          {checkedItems.size === actionItems.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
                <Rocket className="w-5 h-5" />
                <span>ممتاز! أكملت جميع الخطوات</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Action Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {actionItems.map((item, index) => {
            const isChecked = checkedItems.has(item.id)

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => toggleItem(item.id)}
                className={cn(
                  "group p-4 rounded-xl border cursor-pointer transition-all duration-300",
                  isChecked
                    ? "bg-green-50 border-green-200"
                    : "bg-card border-border hover:border-secondary/50 hover:shadow-md"
                )}
              >
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <div className="shrink-0 mt-0.5">
                    {isChecked ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className={cn(
                        "font-semibold transition-colors",
                        isChecked ? "text-green-700 line-through" : "text-foreground"
                      )}>
                        {item.title}
                      </h3>
                      <span className={cn(
                        "text-xs px-2 py-0.5 rounded-full",
                        priorityColors[item.priority]
                      )}>
                        {priorityLabels[item.priority]}
                      </span>
                    </div>
                    <p className={cn(
                      "text-sm transition-colors",
                      isChecked ? "text-green-600/70" : "text-muted-foreground"
                    )}>
                      {item.description}
                    </p>
                  </div>

                  {/* Category */}
                  <span className={cn(
                    "shrink-0 text-xs px-3 py-1 rounded-full border hidden sm:block",
                    categoryColors[item.category]
                  )}>
                    {item.category}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>ابدأ بالخطوات ذات الأولوية العالية أولًا</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
