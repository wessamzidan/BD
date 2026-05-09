import { defineType, defineField } from 'sanity'

export const funnelStage = defineType({
  name: 'funnelStage',
  title: 'مرحلة قمع التسويق',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'اسم المرحلة',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameEn',
      title: 'الاسم بالإنجليزية',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'الوصف',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tools',
      title: 'الأدوات',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'اسم الأداة', type: 'string' },
            { name: 'description', title: 'الوصف', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'color',
      title: 'اللون',
      type: 'string',
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
      title: 'name',
      subtitle: 'nameEn',
    },
  },
})
