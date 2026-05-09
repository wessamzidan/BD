# Donald Miller Business Library - Documentation

## نظرة عامة

موقع تفاعلي يعرض فلسفة Donald Miller في إدارة الأعمال والتسويق بطريقة بصرية وعملية.

---

## الإعداد السريع

### 1. متغيرات البيئة المطلوبة

أنشئ ملف `.env.local` وأضف المتغيرات التالية:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Brevo (للإيميلات)
BREVO_API_KEY=your-brevo-api-key
BREVO_LIST_ID=2
BREVO_SENDER_EMAIL=info@alrawaabit.com
BREVO_SENDER_NAME=الروابط - Alrawaabit
NOTIFICATION_EMAIL=wessam@alrawaabit.com

# ERPNext (اختياري)
ERPNEXT_URL=https://your-erpnext-instance.com
ERPNEXT_API_KEY=your-api-key
ERPNEXT_API_SECRET=your-api-secret

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

### 2. إعداد Sanity

1. أنشئ حساب على [sanity.io](https://sanity.io)
2. أنشئ مشروع جديد واحصل على `Project ID`
3. أضف `Project ID` في المتغيرات البيئية
4. افتح `/studio` لإدارة المحتوى

### 3. إعداد Brevo

1. سجل في [brevo.com](https://brevo.com)
2. اذهب إلى Settings > API Keys
3. أنشئ API Key جديد
4. أنشئ قائمة جهات اتصال واحفظ رقمها في `BREVO_LIST_ID`

### 4. إعداد ERPNext (اختياري)

1. في ERPNext، اذهب إلى Settings > API Access
2. أنشئ API Key و API Secret
3. أضفهم في المتغيرات البيئية

---

## هيكل المشروع

```
├── app/
│   ├── api/
│   │   └── subscribe/          # API للاشتراكات
│   ├── studio/                  # Sanity Studio
│   ├── layout.tsx               # Layout الرئيسي
│   ├── page.tsx                 # الصفحة الرئيسية
│   ├── sitemap.ts               # Sitemap
│   ├── robots.ts                # Robots.txt
│   └── manifest.ts              # PWA Manifest
│
├── components/
│   ├── sections/                # أقسام الصفحة
│   │   ├── hero-section.tsx
│   │   ├── airplane-system.tsx
│   │   ├── book-cards.tsx
│   │   ├── storybrand-framework.tsx
│   │   ├── marketing-funnel.tsx
│   │   ├── business-os.tsx
│   │   ├── action-playbook.tsx
│   │   ├── about-section.tsx
│   │   └── final-summary.tsx
│   │
│   ├── floating-contact.tsx     # أزرار التواصل العائمة
│   ├── navigation-menu.tsx      # قائمة التنقل
│   ├── email-capture-form.tsx   # نموذج جمع الإيميلات
│   └── google-analytics.tsx     # Google Analytics
│
├── sanity/
│   ├── schemas/                 # Sanity Schemas
│   │   ├── book.ts
│   │   ├── airplane-part.ts
│   │   ├── storybrand-step.ts
│   │   ├── funnel-stage.ts
│   │   ├── site-settings.ts
│   │   └── about-section.ts
│   │
│   └── lib/
│       ├── client.ts            # Sanity Client
│       └── queries.ts           # GROQ Queries
│
└── public/
    └── images/                  # الصور
```

---

## إدارة المحتوى (Sanity CMS)

### الوصول للـ Studio

افتح `/studio` في المتصفح لإدارة المحتوى.

### أنواع المحتوى

| النوع | الوصف |
|-------|-------|
| **إعدادات الموقع** | عناوين، روابط، صور رئيسية |
| **الكتب** | كتب Donald Miller مع التفاصيل |
| **أجزاء الطائرة** | شرح كل جزء من نظام الطائرة |
| **خطوات StoryBrand** | الخطوات السبع للإطار |
| **مراحل القمع** | مراحل قمع التسويق |
| **قسم عني** | معلومات الملف الشخصي |

### إضافة كتاب جديد

1. افتح `/studio`
2. اضغط على "الكتب"
3. اضغط على "Create"
4. املأ الحقول:
   - العنوان (إنجليزي وعربي)
   - رابط الكتاب الصوتي
   - الفلسفة
   - الأطر العملية
   - الدروس
   - الملخص
   - لون البطاقة

---

## API للاشتراكات

### Endpoint

```
POST /api/subscribe
```

### Request Body

```json
{
  "name": "اسم المشترك",
  "email": "email@example.com",
  "source": "Donald Miller Library"
}
```

### Response

```json
{
  "success": true,
  "message": "تم الاشتراك بنجاح!",
  "integrations": {
    "brevo": true,
    "erpnext": true,
    "notification": true,
    "welcome": true
  }
}
```

### ماذا يحدث عند الاشتراك؟

1. **Brevo**: إضافة جهة اتصال للقائمة
2. **ERPNext**: إنشاء Lead جديد
3. **إيميل تنبيه**: إرسال إشعار لـ wessam@alrawaabit.com
4. **إيميل ترحيب**: إرسال إيميل للمشترك مع رابط التحميل

---

## التخصيص

### تغيير الألوان

الألوان معرفة في `app/globals.css`:

```css
:root {
  --primary: oklch(0.25 0.05 240);     /* Navy */
  --secondary: oklch(0.55 0.15 240);   /* Soft Blue */
  --gold-500: oklch(0.75 0.15 75);     /* Gold */
}
```

### تغيير الخطوط

الخطوط معرفة في `app/layout.tsx`:

```typescript
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
```

### إضافة قسم جديد

1. أنشئ ملف في `components/sections/`
2. أضفه في `app/page.tsx`
3. أضفه في قائمة التنقل `components/navigation-menu.tsx`

---

## SEO

### Schema Markup

الموقع يتضمن:
- WebSite schema
- Person schema
- WebPage schema
- BreadcrumbList
- FAQPage

### Open Graph

كل الصفحات تتضمن Open Graph tags للمشاركة على السوشيال ميديا.

### Sitemap

يتم توليده تلقائياً في `/sitemap.xml`

---

## Analytics

### Google Analytics

أضف `NEXT_PUBLIC_GA_MEASUREMENT_ID` وسيعمل تلقائياً.

### أحداث مخصصة

```typescript
// تتبع تحميل الملخص
gtag('event', 'download_summary', {
  event_category: 'engagement'
})

// تتبع النقر على كتاب
gtag('event', 'book_click', {
  event_category: 'engagement',
  event_label: 'StoryBrand'
})
```

---

## النشر

### Vercel

1. اربط المشروع بـ Vercel
2. أضف متغيرات البيئة في Vercel Dashboard
3. انشر!

### متغيرات البيئة على Vercel

أضف جميع المتغيرات من `.env.local` في:
Settings > Environment Variables

---

## استكشاف الأخطاء

### Sanity Studio لا يعمل

- تأكد من `NEXT_PUBLIC_SANITY_PROJECT_ID`
- تأكد من إضافة `localhost:3000` في Sanity CORS origins

### الإيميلات لا تُرسل

- تأكد من `BREVO_API_KEY`
- تأكد من تفعيل الدومين في Brevo
- راجع Console logs في Vercel

### ERPNext لا يعمل

- تأكد من صلاحيات API Key
- تأكد من URL صحيح

---

## الدعم

للمساعدة أو الاستفسارات:

- واتساب: +201111306090
- إيميل: wessam@alrawaabit.com
- لينكد إن: linkedin.com/in/wessamzidan
