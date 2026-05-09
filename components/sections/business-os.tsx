"use client"

import { motion } from "framer-motion"
import { 
  Crown, 
  Megaphone, 
  TrendingUp, 
  Package, 
  Settings, 
  Wallet,
  CheckCircle2,
  ArrowLeft
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SystemArea {
  id: string
  name: string
  nameEn: string
  icon: React.ElementType
  description: string
  keyMetrics: string[]
  quickWins: string[]
  color: string
  gradient: string
}

const systemAreas: SystemArea[] = [
  {
    id: "leadership",
    name: "القيادة",
    nameEn: "Leadership",
    icon: Crown,
    description: "تحديد الرؤية والاتجاه وبناء فريق قوي",
    keyMetrics: ["وضوح Mission Statement", "رضا الفريق", "تحقيق الأهداف الربعية"],
    quickWins: ["اكتب Mission في جملة واحدة", "عقد اجتماع أسبوعي مع الفريق", "حدد 3 أولويات لهذا الشهر"],
    color: "text-gold-500",
    gradient: "from-gold-500/20 to-gold-600/10"
  },
  {
    id: "marketing",
    name: "التسويق",
    nameEn: "Marketing",
    icon: Megaphone,
    description: "جذب العملاء المحتملين وبناء الوعي بالعلامة",
    keyMetrics: ["عدد الزوار الجدد", "معدل التحويل للـ Leads", "تكلفة الحصول على Lead"],
    quickWins: ["وضّح رسالتك التسويقية", "أنشئ Lead Magnet", "فعّل Email Marketing"],
    color: "text-secondary",
    gradient: "from-secondary/20 to-blue-600/10"
  },
  {
    id: "sales",
    name: "المبيعات",
    nameEn: "Sales",
    icon: TrendingUp,
    description: "تحويل الاهتمام إلى إيرادات فعلية",
    keyMetrics: ["معدل إغلاق الصفقات", "متوسط قيمة الصفقة", "وقت دورة البيع"],
    quickWins: ["طور Script للمكالمات", "تابع Leads خلال 24 ساعة", "اجمع شهادات العملاء"],
    color: "text-emerald-500",
    gradient: "from-emerald-500/20 to-green-600/10"
  },
  {
    id: "products",
    name: "المنتجات",
    nameEn: "Products",
    icon: Package,
    description: "تطوير منتجات تحل مشاكل حقيقية للعملاء",
    keyMetrics: ["رضا العملاء (NPS)", "معدل الاحتفاظ", "طلبات الميزات الجديدة"],
    quickWins: ["تحدث مع 5 عملاء هذا الأسبوع", "حدد الميزة الأهم", "بسّط تجربة المستخدم"],
    color: "text-violet-500",
    gradient: "from-violet-500/20 to-purple-600/10"
  },
  {
    id: "operations",
    name: "العمليات",
    nameEn: "Operations",
    icon: Settings,
    description: "بناء أنظمة تضمن الجودة والكفاءة",
    keyMetrics: ["وقت إنجاز المهام", "نسبة الأخطاء", "رضا الفريق الداخلي"],
    quickWins: ["وثّق أهم 3 عمليات", "أتمت المهام المتكررة", "أنشئ Checklists"],
    color: "text-orange-500",
    gradient: "from-orange-500/20 to-amber-600/10"
  },
  {
    id: "cashflow",
    name: "التدفق النقدي",
    nameEn: "Cash Flow",
    icon: Wallet,
    description: "إدارة المال لضمان استمرارية ونمو البيزنس",
    keyMetrics: ["التدفق النقدي الشهري", "أيام تحصيل المستحقات", "هامش الربح"],
    quickWins: ["افصل الحسابات الشخصية", "راجع التقارير أسبوعيًا", "احتفظ باحتياطي 3 أشهر"],
    color: "text-rose-500",
    gradient: "from-rose-500/20 to-red-600/10"
  }
]

function SystemCard({ area, index }: { area: SystemArea; index: number }) {
  const Icon = area.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-secondary/30 transition-all duration-300"
    >
      {/* Header */}
      <div className={cn("p-5 bg-gradient-to-l", area.gradient)}>
        <div className="flex items-center gap-3">
          <div className={cn("w-11 h-11 rounded-xl bg-card flex items-center justify-center", area.color)}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-foreground">{area.name}</h3>
            <p className="text-sm text-muted-foreground">{area.nameEn}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <p className="text-sm text-muted-foreground">{area.description}</p>

        {/* Key Metrics */}
        <div>
          <div className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            مؤشرات القياس
          </div>
          <div className="space-y-1.5">
            {area.keyMetrics.map((metric) => (
              <div key={metric} className="text-sm text-foreground flex items-center gap-2">
                <span className={cn("w-1.5 h-1.5 rounded-full", area.color.replace("text-", "bg-"))} />
                {metric}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Wins */}
        <div>
          <div className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            خطوات سريعة
          </div>
          <div className="space-y-1.5">
            {area.quickWins.map((win, i) => (
              <div key={win} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">{i + 1}.</span>
                {win}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function BusinessOS() {
  return (
    <section id="business-os" className="py-24 bg-muted/30">
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
            نظام تشغيل البيزنس
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            6 أنظمة أساسية يجب أن تعمل بتناغم لبناء بيزنس ناجح ومستدام
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {systemAreas.map((area, index) => (
            <SystemCard key={area.id} area={area} index={index} />
          ))}
        </div>

        {/* Central Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-l from-navy-800 to-navy-900 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative text-center">
              <h3 className="text-2xl font-bold mb-4">الفكرة الأساسية</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                البيزنس الناجح ليس مجرد فكرة جيدة أو منتج رائع.
                <br />
                إنه <span className="text-gold-400 font-semibold">نظام متكامل</span> حيث كل جزء يدعم الآخر.
                <br />
                <span className="text-white/70 text-base">
                  إذا كان جزء واحد ضعيفًا، النظام كله يتأثر.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
