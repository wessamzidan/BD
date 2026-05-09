import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Donald Miller Business Library',
    short_name: 'DM Business',
    description: 'ملخص غير رسمي لفلسفة Donald Miller في التسويق والمبيعات وإدارة الأعمال',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1f3a',
    theme_color: '#1a1f3a',
    orientation: 'portrait',
    lang: 'ar',
    dir: 'rtl',
    categories: ['business', 'education', 'books'],
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
