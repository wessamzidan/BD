"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink, BookOpen, Lightbulb, Target, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BookLesson {
  title: string
  description: string
}

interface BookFramework {
  name: string
  description: string
}

interface Book {
  id: string
  title: string
  titleAr: string
  cover: string
  audiobookUrl: string
  philosophy: string
  frameworks: BookFramework[]
  lessons: BookLesson[]
  summary: string
  color: string
}

const books: Book[] = [
  {
    id: "grow-business",
    title: "How to Grow Your Small Business",
    titleAr: "كيف تنمّي مشروعك الصغير",
    cover: "/books/grow-business.jpg",
    audiobookUrl: "https://www.audiobooks.com/audiobook/how-to-grow-your-small-business-a-6-step-plan-to-help-your-business-take-off/530166",
    philosophy: "البيزنس الناجح يشبه الطائرة — كل جزء له دور. القيادة هي قمرة القيادة، التسويق والمبيعات هما المحركان، المنتجات هي الأجنحة، العمليات هي الجسم، والتدفق النقدي هو الوقود.",
    frameworks: [
      { name: "Airplane Framework", description: "نظام الطائرة المكون من 6 أجزاء لإدارة البيزنس" },
      { name: "Leadership Pipeline", description: "كيف تبني فريق قيادي قوي" },
      { name: "Cash Flow System", description: "نظام إدارة التدفق النقدي" }
    ],
    lessons: [
      { title: "حدد دورك كقائد", description: "القائد يحدد الاتجاه ولا يفعل كل شيء. ركز على الرؤية والاستراتيجية." },
      { title: "اجعل التسويق والمبيعات محركيك", description: "بدون محركين قويين، الطائرة لا تقلع. استثمر في كليهما." },
      { title: "راقب الوقود دائمًا", description: "التدفق النقدي هو الأكسجين. راقبه أسبوعيًا وليس شهريًا." }
    ],
    summary: "هذا الكتاب يعطيك خارطة طريق واضحة لتحويل بيزنسك من فوضى إلى نظام منظم وقابل للنمو.",
    color: "from-navy-700 to-navy-900"
  },
  {
    id: "storybrand",
    title: "Building a StoryBrand 2.0",
    titleAr: "بناء قصة العلامة التجارية",
    cover: "/books/storybrand.jpg",
    audiobookUrl: "https://www.audiobooks.com/audiobook/building-a-storybrand-2-0-clarify-your-message-so-customers-will-listen/767102",
    philosophy: "العميل هو البطل في القصة، وليس أنت. شركتك هي المرشد الذي يساعد البطل على حل مشكلته والوصول للنجاح.",
    frameworks: [
      { name: "StoryBrand 7-Part Framework", description: "الإطار السباعي لبناء رسالة تسويقية واضحة" },
      { name: "BrandScript", description: "أداة لكتابة قصة علامتك التجارية" },
      { name: "One-Liner", description: "كيف تشرح ما تفعله في جملة واحدة" }
    ],
    lessons: [
      { title: "العميل هو البطل", description: "توقف عن الحديث عن نفسك. تحدث عن مشكلة العميل وكيف تحلها." },
      { title: "وضّح المشكلة", description: "العملاء يشترون حلولًا لمشاكلهم. حدد المشكلة بوضوح." },
      { title: "اجعل الخطوات واضحة", description: "أعط العميل خطة واضحة من 3 خطوات لتحقيق النجاح." }
    ],
    summary: "إذا كانت رسالتك التسويقية غير واضحة، أنت تخسر عملاء كل يوم. هذا الكتاب يصلح ذلك.",
    color: "from-secondary to-blue-700"
  },
  {
    id: "business-simple",
    title: "Business Made Simple",
    titleAr: "البيزنس ببساطة",
    cover: "/books/business-simple.jpg",
    audiobookUrl: "https://www.audiobooks.com/audiobook/business-made-simple-60-days-to-master-leadership-sales-marketing-execution-management-personal-productivity-and-more/425861",
    philosophy: "النجاح في البيزنس يتطلب مهارات محددة يمكن تعلمها. في 60 يومًا، يمكنك إتقان أهم مهارات القيادة والمبيعات والتسويق والإنتاجية.",
    frameworks: [
      { name: "Value-Driven Professional", description: "كيف تصبح محترفًا يضيف قيمة حقيقية" },
      { name: "Daily Productivity System", description: "نظام الإنتاجية اليومية" },
      { name: "Leadership Framework", description: "مهارات القيادة الأساسية" }
    ],
    lessons: [
      { title: "كن محترفًا يضيف قيمة", description: "المحترف الناجح يركز على إضافة قيمة ملموسة، وليس مجرد إكمال المهام." },
      { title: "تعلم فن التفاوض", description: "كل شيء في البيزنس تفاوض. تعلم كيف تحصل على ما تريد." },
      { title: "أتقن إدارة وقتك", description: "الوقت هو أثمن مورد. تعلم كيف تستخدمه بحكمة." }
    ],
    summary: "برنامج 60 يومًا لتحويلك من شخص عادي إلى محترف بيزنس يفهم كل جوانب النجاح.",
    color: "from-gold-500 to-gold-700"
  },
  {
    id: "marketing-simple",
    title: "Marketing Made Simple",
    titleAr: "التسويق ببساطة",
    cover: "/books/marketing-simple.jpg",
    audiobookUrl: "https://www.audiobooks.com/audiobook/marketing-made-simple-a-step-by-step-storybrand-guide-for-any-business/386655",
    philosophy: "التسويق الفعال يبني علاقة مع العميل على 3 مراحل: الفضول، ثم الوعي، ثم الالتزام. كل مرحلة تحتاج أدوات مختلفة.",
    frameworks: [
      { name: "Sales Funnel Blueprint", description: "خريطة بناء Funnel بيعي فعال" },
      { name: "Email Sequence", description: "تسلسل الإيميلات الذي يبني الثقة" },
      { name: "Lead Magnet Formula", description: "كيف تنشئ Lead Magnet لا يُقاوم" }
    ],
    lessons: [
      { title: "ابن Funnel بسيط", description: "لا تحتاج لتعقيد. موقع + Lead Magnet + إيميلات = Funnel ناجح." },
      { title: "قدم قيمة مجانية أولًا", description: "Lead Magnet الجيد يحل مشكلة صغيرة ويفتح الباب لمشكلة أكبر." },
      { title: "تابع بالإيميل", description: "معظم المبيعات تحدث بعد 5-7 نقاط اتصال. الإيميل هو أفضل طريقة." }
    ],
    summary: "دليل عملي خطوة بخطوة لبناء نظام تسويقي يجلب العملاء بشكل مستمر.",
    color: "from-emerald-600 to-green-700"
  }
]

function BookCard({ book, isExpanded, onToggle }: { book: Book; isExpanded: boolean; onToggle: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Header */}
      <div className={cn("p-6 bg-gradient-to-br text-white", book.color)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{book.titleAr}</h3>
            <p className="text-white/80 text-sm">{book.title}</p>
          </div>
          <div className="w-16 h-20 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
            <BookOpen className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-5 h-5 text-gold-500" />
          <span className="font-semibold text-foreground">الفلسفة الرئيسية</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">{book.philosophy}</p>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Frameworks */}
            <div className="p-6 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-foreground">الأطر العملية</span>
              </div>
              <div className="space-y-3">
                {book.frameworks.map((framework, i) => (
                  <div key={i} className="p-3 rounded-lg bg-card border border-border">
                    <div className="font-medium text-foreground mb-1">{framework.name}</div>
                    <div className="text-sm text-muted-foreground">{framework.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-foreground">3 دروس تطبيقية</span>
              </div>
              <div className="space-y-4">
                {book.lessons.map((lesson, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-medium text-foreground mb-1">{lesson.title}</div>
                      <div className="text-sm text-muted-foreground">{lesson.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="p-6 bg-gold-50 border-b border-gold-200">
              <p className="text-foreground font-medium">{book.summary}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="p-4 flex items-center justify-between gap-4">
        <Button
          variant="ghost"
          onClick={onToggle}
          className="flex items-center gap-2"
        >
          <span>{isExpanded ? "إخفاء التفاصيل" : "عرض التفاصيل"}</span>
          <ChevronDown className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="flex items-center gap-2"
        >
          <a href={book.audiobookUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            <span>الكتاب الصوتي</span>
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

export function BookCards() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="books" className="py-24 bg-background">
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
            الكتب الأربعة الأساسية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            أهم أفكار Donald Miller مستخلصة من كتبه الأكثر تأثيرًا في عالم البيزنس والتسويق
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isExpanded={expandedId === book.id}
              onToggle={() => setExpandedId(expandedId === book.id ? null : book.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
