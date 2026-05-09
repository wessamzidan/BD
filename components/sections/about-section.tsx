"use client"

import { motion } from "framer-motion"
import { 
  Target, 
  Heart, 
  Lightbulb, 
  ArrowLeft, 
  Globe, 
  Users, 
  TrendingUp,
  ExternalLink,
  MessageCircle,
  Linkedin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "الرؤية",
    description: "نقل أفضل الأنظمة والممارسات العالمية لمصر والوطن العربي لمساعدة الشركات على النمو."
  },
  {
    icon: Heart,
    title: "الشغف",
    description: "أؤمن أن كل شركة صغيرة تستحق أن يكون لديها نظام احترافي يساعدها على النجاح."
  },
  {
    icon: Lightbulb,
    title: "الفلسفة",
    description: "الأدوات مفتوحة المصدر مثل ERPNext تمنح الشركات القوة للنمو بدون تكاليف باهظة."
  }
]

const beliefs = [
  {
    icon: Globe,
    text: "الشركات تحتاج أصول رقمية كما تحتاج أصول على الأرض"
  },
  {
    icon: Users,
    text: "المحتوى الطبيعي يعكس حجم الشركة ويوصل رسالتها للعملاء"
  },
  {
    icon: TrendingUp,
    text: "مواقع تحول الزوار لعملاء مع أنظمة إدارة ومبيعات قوية"
  }
]

const alrawaabitFeatures = [
  "نساعد الشركات بالظهور الرقمي وإيصال رسالتهم لعملائهم",
  "بناء أصول رقمية مع أنظمة تسويق ونمو متكاملة",
  "ساعدنا عدة شركات بالتحول الرقمي والظهور في محركات البحث",
  "عن طريق SEO/GEO ساعدناهم بالحصول على عملاء بدون إعلانات مدفوعة"
]

const links = [
  {
    label: "الموقع الرئيسي",
    href: "https://wessamzidan.com",
    icon: Globe
  },
  {
    label: "الروابط",
    href: "https://alrawaabit.com",
    icon: ExternalLink
  },
  {
    label: "واتساب",
    href: "https://wa.me/201111306090?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9",
    icon: MessageCircle
  },
  {
    label: "لينكد إن",
    href: "https://www.linkedin.com/in/wessamzidan",
    icon: Linkedin
  }
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - StoryBrand Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <span className="text-sm font-medium">المرشد في رحلتك</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            أنا هنا لمساعدتك على النجاح
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            لأن نجاح الشركات الصغيرة يعني نجاح العاملين فيها ونجاح المجتمع بأكمله
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story - StoryBrand Format */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* The Problem */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <span className="text-destructive text-sm font-bold">1</span>
                </span>
                المشكلة
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                الشركات الصغيرة والمتوسطة في مصر والوطن العربي تعاني من غياب الأنظمة الواضحة. 
                يعملون بجهد كبير لكن بدون خارطة طريق، مما يؤدي لإهدار الموارد وضياع الفرص.
              </p>
            </div>

            {/* The Guide (Me) */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/20">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-sm font-bold">2</span>
                </span>
                المرشد
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                أنا <span className="font-bold text-foreground">وسام زيدان</span>، متخصص في بناء الأنظمة الرقمية للشركات. 
                أساعد الشركات على تطبيق أفضل الممارسات العالمية باستخدام أدوات مفتوحة المصدر مثل ERPNext، 
                مع استراتيجيات تسويق تحول الزوار إلى عملاء.
              </p>
            </div>

            {/* The Plan */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center">
                  <span className="text-gold-600 text-sm font-bold">3</span>
                </span>
                الخطة
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <ArrowLeft className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                  <span>بناء أصول رقمية تعكس هوية الشركة وتجذب العملاء</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <ArrowLeft className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                  <span>تطبيق أنظمة إدارة ومبيعات وتسويق متكاملة</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <ArrowLeft className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                  <span>استخدام محتوى طبيعي يوصل رسالة الشركة لعملائها</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Values & Beliefs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Beliefs */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100/50 border border-gold-200">
              <h4 className="font-bold text-foreground mb-4">ما أؤمن به</h4>
              <ul className="space-y-3">
                {beliefs.map((belief, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <belief.icon className="w-5 h-5 text-gold-600 mt-0.5 shrink-0" />
                    <span>{belief.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Alrawaabit Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/10 border border-secondary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">الروابط - Alrawaabit</h3>
                <Link 
                  href="https://alrawaabit.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:underline"
                >
                  alrawaabit.com
                </Link>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              في الروابط نسعى لمساعدة الشركات بالظهور الرقمي وإيصال رسالتهم لعملائهم وبناء أصول رقمية مع أنظمة تسويق ونمو.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {alrawaabitFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <ArrowLeft className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-secondary/20">
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link href="https://alrawaabit.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 ml-2" />
                  زيارة الروابط
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-border">
            <div className="text-right sm:text-center px-4">
              <p className="text-lg font-bold text-foreground mb-1">هل أنت مستعد لبناء نظام ينمّي بيزنسك؟</p>
              <p className="text-sm text-muted-foreground">احصل على استشارة مجانية الآن</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {links.map((link) => (
                <Button
                  key={link.label}
                  asChild
                  variant={link.label === "واتساب" ? "default" : "outline"}
                  className={link.label === "واتساب" ? "bg-[#25D366] hover:bg-[#128C7E] text-white" : ""}
                >
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-4 h-4 ml-2" />
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
