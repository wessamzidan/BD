import { defineType, defineField } from 'sanity'

export const airplanePart = defineType({
  name: 'airplanePart',
  title: 'جزء من الطائرة',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'المعرف',
      type: 'string',
      description: 'cockpit, right-engine, left-engine, wings, body, fuel',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'الاسم بالعربية',
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
      name: 'importance',
      title: 'الأهمية',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'examples',
      title: 'أمثلة',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mistakes',
      title: 'الأخطاء الشائعة',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'actionSteps',
      title: 'خطوات العمل',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'color',
      title: 'اللون',
      type: 'string',
      description: 'gold, blue, green, purple, orange, rose',
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
