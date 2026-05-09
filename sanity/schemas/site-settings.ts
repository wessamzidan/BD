import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'إعدادات الموقع',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'عنوان الموقع',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'وصف الموقع',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroTitle',
      title: 'عنوان Hero Section',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'العنوان الفرعي',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctaText',
      title: 'نص زر CTA',
      type: 'string',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'رقم واتساب',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'رابط لينكد إن',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'رابط فيسبوك',
      type: 'url',
    }),
    defineField({
      name: 'calendarUrl',
      title: 'رابط حجز الاستشارة',
      type: 'url',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'رابط الموقع الشخصي',
      type: 'url',
    }),
    defineField({
      name: 'alrawaabitUrl',
      title: 'رابط الروابط',
      type: 'url',
    }),
    defineField({
      name: 'airplaneImage',
      title: 'صورة الطائرة',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'storyBrandImage',
      title: 'صورة StoryBrand Framework',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'disclaimer',
      title: 'نص التنويه',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'إعدادات الموقع',
      }
    },
  },
})
