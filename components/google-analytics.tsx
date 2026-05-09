'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  )
}

// Event tracking helper
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Custom events for the site
export const analyticsEvents = {
  // Book interactions
  bookCardExpanded: (bookTitle: string) => trackEvent('expand', 'book_card', bookTitle),
  audiobookLinkClicked: (bookTitle: string) => trackEvent('click', 'audiobook_link', bookTitle),
  
  // Airplane system
  airplanePartClicked: (partName: string) => trackEvent('click', 'airplane_part', partName),
  
  // StoryBrand
  storyBrandStepViewed: (step: number) => trackEvent('view', 'storybrand_step', `Step ${step}`),
  
  // Contact
  whatsappClicked: () => trackEvent('click', 'contact', 'whatsapp'),
  linkedinClicked: () => trackEvent('click', 'contact', 'linkedin'),
  websiteClicked: () => trackEvent('click', 'contact', 'website'),
  
  // Playbook
  playbookItemChecked: (item: string) => trackEvent('check', 'playbook_item', item),
  
  // Share
  shareClicked: (platform: string) => trackEvent('click', 'share', platform),
  downloadClicked: () => trackEvent('click', 'download', 'summary'),
}
