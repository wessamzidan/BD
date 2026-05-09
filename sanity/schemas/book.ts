import { defineType, defineField } from 'sanity'

export const book = defineType({
  name: 'book',
  title: 'كتاب',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'العنوان بالإنجليزية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleAr',
      title: 'العنوان بالعربية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'cover',
      title: 'صورة الغلاف',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'audiobookUrl',
      title: 'رابط الكتاب الصوتي',
      type: 'url',
    }),
    defineField({
      name: 'philosophy',
      title: 'الفلسفة الرئيسية',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'frameworks',
      title: 'الأطر العملية',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'اسم الإطار', type: 'string' },
            { name: 'description', title: 'الوصف', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'lessons',
      title: 'الدروس التطبيقية',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'العنوان', type: 'string' },
            { name: 'description', title: 'الوصف', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'summary',
      title: 'الملخص',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'color',
      title: 'لون البطاقة (Tailwind gradient)',
      type: 'string',
      description: 'مثال: from-navy-700 to-navy-900',
    }),
    defineField({
      name: 'order',
      title: 'الترتيب',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'الترتيب',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'titleAr',
      subtitle: 'title',
      media: 'cover',
    },
  },
})
