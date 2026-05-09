export const metadata = {
  title: 'Sanity Studio | مكتبة Donald Miller',
  description: 'إدارة محتوى الموقع',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
