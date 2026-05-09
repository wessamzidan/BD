import { defineType, defineField } from 'sanity'

export const storyBrandStep = defineType({
  name: 'storyBrandStep',
  title: 'خطوة StoryBrand',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'رقم الخطوة',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(7),
    }),
    defineField({
      name: 'title',
      title: 'العنوان',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'العنوان بالإنجليزية',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'الوصف',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'example',
      title: 'مثال',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'color',
      title: 'اللون',
      type: 'string',
    }),
  ],
  orderings: [
    {
      title: 'رقم الخطوة',
      name: 'numberAsc',
      by: [{ field: 'number', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number',
    },
    prepare({ title, number }) {
      return {
        title: `${number}. ${title}`,
      }
    },
  },
})
