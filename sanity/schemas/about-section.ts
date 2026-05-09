import { defineType, defineField } from 'sanity'

export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'قسم عني',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'الاسم',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'العنوان الوظيفي',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'الصورة الشخصية',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'problem',
      title: 'المشكلة التي تحلها',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'vision',
      title: 'الرؤية',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'openSourcePhilosophy',
      title: 'فلسفة المصادر المفتوحة',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'beliefs',
      title: 'المعتقدات',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'الأيقونة', type: 'string', description: 'Globe, Users, TrendingUp' },
            { name: 'text', title: 'النص', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'alrawaabitDescription',
      title: 'وصف الروابط',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'alrawaabitFeatures',
      title: 'مميزات الروابط',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
    },
  },
})
