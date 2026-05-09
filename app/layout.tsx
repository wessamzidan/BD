import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@/components/google-analytics'
import './globals.css'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://donaldmiller.wessamzidan.com'),
  title: {
    default: 'ملخص فلسفة Donald Miller للبيزنس | نظام الطائرة و StoryBrand',
    template: '%s | Donald Miller Business Library',
  },
  description: 'ملخص غير رسمي لأهم أفكار Donald Miller في التسويق والمبيعات وإدارة الأعمال. تعلم نظام الطائرة، StoryBrand Framework، وكيف تبني بيزنس ناجح. دليلك العربي الشامل.',
  generator: 'v0.app',
  applicationName: 'Donald Miller Business Library',
  keywords: [
    'Donald Miller', 'StoryBrand', 'Business Made Simple', 'Marketing Made Simple',
    'التسويق', 'المبيعات', 'إدارة الأعمال', 'ريادة الأعمال', 'نظام الطائرة',
    'Wessam Zidan', 'وسام زيدان', 'الروابط', 'تسويق رقمي', 'نمو الأعمال',
    'كتب البيزنس', 'StoryBrand بالعربي', 'التسويق بالمحتوى', 'قمع المبيعات',
    'Marketing Funnel', 'Business Growth', 'Small Business', 'الشركات الصغيرة',
  ],
  authors: [{ name: 'Wessam Zidan', url: 'https://wessamzidan.com' }],
  creator: 'Wessam Zidan',
  publisher: 'الروابط - Alrawaabit',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: 'ملخص فلسفة Donald Miller للبيزنس | دليلك العربي الشامل',
    description: 'تعلم نظام الطائرة للبيزنس، StoryBrand Framework، قمع التسويق، وأكثر. ملخص غير رسمي بالعربية لأهم أفكار Donald Miller.',
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['ar_SA', 'ar_AE', 'ar_KW', 'ar_QA', 'ar_BH', 'ar_OM', 'ar_JO', 'ar_LB'],
    siteName: 'Donald Miller Business Library',
    url: 'https://donaldmiller.wessamzidan.com',
    images: [
      {
        url: '/images/business-airplane.jpg',
        width: 1200,
        height: 630,
        alt: 'نظام الطائرة للبيزنس - Business Airplane System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ملخص فلسفة Donald Miller للبيزنس',
    description: 'تعلم نظام الطائرة، StoryBrand، وكيف تبني بيزنس ناجح - دليلك العربي الشامل',
    creator: '@wessamzidan',
    images: ['/images/business-airplane.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://donaldmiller.wessamzidan.com',
    languages: {
      'ar': 'https://donaldmiller.wessamzidan.com',
    },
  },
  category: 'business',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a1f3a' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1225' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://donaldmiller.wessamzidan.com/#website',
      name: 'Donald Miller Business Library',
      alternateName: 'مكتبة دونالد ميلر للبيزنس',
      description: 'ملخص غير رسمي لفلسفة Donald Miller في التسويق والمبيعات وإدارة الأعمال',
      url: 'https://donaldmiller.wessamzidan.com',
      inLanguage: 'ar',
      publisher: { '@id': 'https://donaldmiller.wessamzidan.com/#person' }
    },
    {
      '@type': 'Person',
      '@id': 'https://donaldmiller.wessamzidan.com/#person',
      name: 'Wessam Zidan',
      alternateName: 'وسام زيدان',
      url: 'https://wessamzidan.com',
      image: 'https://donaldmiller.wessamzidan.com/images/wessam-zidan.jpg',
      description: 'مستشار تسويق ونمو الأعمال - أساعد الشركات الصغيرة على النمو باستخدام الأنظمة الرقمية',
      jobTitle: 'Business Growth Consultant',
      worksFor: {
        '@type': 'Organization',
        name: 'الروابط - Alrawaabit',
        url: 'https://alrawaabit.com'
      },
      sameAs: [
        'https://www.linkedin.com/in/wessamzidan/',
        'https://www.facebook.com/wessamzidan83',
        'https://alrawaabit.com',
        'https://wessamzidan.com'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+201111306090',
        contactType: 'customer service',
        availableLanguage: ['Arabic', 'English']
      }
    },
    {
      '@type': 'WebPage',
      '@id': 'https://donaldmiller.wessamzidan.com/#webpage',
      url: 'https://donaldmiller.wessamzidan.com',
      name: 'ملخص فلسفة Donald Miller للبيزنس | نظام الطائرة و StoryBrand',
      description: 'تعلم نظام الطائرة للبيزنس، StoryBrand Framework، قمع التسويق، وأكثر',
      isPartOf: { '@id': 'https://donaldmiller.wessamzidan.com/#website' },
      inLanguage: 'ar',
      about: [
        { '@type': 'Thing', name: 'StoryBrand Framework', description: 'إطار بناء قصة العلامة التجارية' },
        { '@type': 'Thing', name: 'Business Made Simple', description: 'نظام تبسيط الأعمال' },
        { '@type': 'Thing', name: 'Marketing Funnel', description: 'قمع التسويق والمبيعات' },
        { '@type': 'Thing', name: 'نظام الطائرة', description: 'نموذج إدارة الأعمال المتكامل' }
      ],
      mainEntity: {
        '@type': 'Article',
        headline: 'ملخص غير رسمي لفلسفة Donald Miller للبيزنس',
        author: { '@id': 'https://donaldmiller.wessamzidan.com/#person' },
        publisher: { '@id': 'https://donaldmiller.wessamzidan.com/#person' },
        inLanguage: 'ar',
        articleSection: ['التسويق', 'المبيعات', 'إدارة الأعمال', 'ريادة الأعمال']
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'الرئيسية',
          item: 'https://donaldmiller.wessamzidan.com'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ما هو نظام الطائرة للبيزنس؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'نظام الطائرة هو إطار عمل من Donald Miller يشبه البيزنس بالطائرة. القيادة هي قمرة القيادة، التسويق والمبيعات هما المحركان، المنتجات هي الأجنحة، العمليات هي الجسم، والتدفق النقدي هو الوقود.'
          }
        },
        {
          '@type': 'Question',
          name: 'ما هو StoryBrand Framework؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'StoryBrand هو إطار تسويقي من 7 خطوات يجعل العميل بطل القصة والشركة هي المرشد. يساعد على توضيح الرسالة التسويقية وجذب العملاء.'
          }
        },
        {
          '@type': 'Question',
          name: 'هل هذا موقع رسمي لـ Donald Miller؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا، هذا ملخص غير رسمي للاستخدام الشخصي والتعليمي. نحن نحب فلسفة Donald Miller ونشارك ملخصات كتبه لمساعدة رواد الأعمال العرب.'
          }
        }
      ]
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexArabic.variable} ${geistMono.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen">
        {children}
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
