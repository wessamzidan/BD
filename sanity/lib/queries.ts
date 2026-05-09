import { groq } from 'next-sanity'

// Books
export const booksQuery = groq`
  *[_type == "book"] | order(order asc) {
    _id,
    title,
    titleAr,
    "slug": slug.current,
    cover,
    audiobookUrl,
    philosophy,
    frameworks,
    lessons,
    summary,
    color
  }
`

// Airplane Parts
export const airplanePartsQuery = groq`
  *[_type == "airplanePart"] | order(order asc) {
    _id,
    id,
    name,
    nameEn,
    description,
    importance,
    examples,
    mistakes,
    actionSteps,
    color
  }
`

// StoryBrand Steps
export const storyBrandStepsQuery = groq`
  *[_type == "storyBrandStep"] | order(number asc) {
    _id,
    number,
    title,
    titleEn,
    description,
    example,
    color
  }
`

// Funnel Stages
export const funnelStagesQuery = groq`
  *[_type == "funnelStage"] | order(order asc) {
    _id,
    name,
    nameEn,
    description,
    tools,
    color
  }
`

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    heroTitle,
    heroSubtitle,
    ctaText,
    whatsappNumber,
    linkedinUrl,
    facebookUrl,
    calendarUrl,
    websiteUrl,
    alrawaabitUrl,
    airplaneImage,
    storyBrandImage,
    disclaimer
  }
`

// About Section
export const aboutSectionQuery = groq`
  *[_type == "aboutSection"][0] {
    name,
    title,
    photo,
    problem,
    vision,
    openSourcePhilosophy,
    beliefs,
    alrawaabitDescription,
    alrawaabitFeatures
  }
`
