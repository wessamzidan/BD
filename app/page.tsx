import dynamic from "next/dynamic"
import { HeroSection } from "@/components/sections/hero-section"
import { FloatingContact } from "@/components/floating-contact"
import { NavigationMenu } from "@/components/navigation-menu"

// Dynamic imports for below-the-fold sections to improve initial load
const AboutSection = dynamic(() => import("@/components/sections/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <SectionSkeleton />
})
const AirplaneSystem = dynamic(() => import("@/components/sections/airplane-system").then(mod => ({ default: mod.AirplaneSystem })), {
  loading: () => <SectionSkeleton />
})
const BookCards = dynamic(() => import("@/components/sections/book-cards").then(mod => ({ default: mod.BookCards })), {
  loading: () => <SectionSkeleton />
})
const StoryBrandFramework = dynamic(() => import("@/components/sections/storybrand-framework").then(mod => ({ default: mod.StoryBrandFramework })), {
  loading: () => <SectionSkeleton />
})
const MarketingFunnel = dynamic(() => import("@/components/sections/marketing-funnel").then(mod => ({ default: mod.MarketingFunnel })), {
  loading: () => <SectionSkeleton />
})
const BusinessOS = dynamic(() => import("@/components/sections/business-os").then(mod => ({ default: mod.BusinessOS })), {
  loading: () => <SectionSkeleton />
})
const ActionPlaybook = dynamic(() => import("@/components/sections/action-playbook").then(mod => ({ default: mod.ActionPlaybook })), {
  loading: () => <SectionSkeleton />
})
const FinalSummary = dynamic(() => import("@/components/sections/final-summary").then(mod => ({ default: mod.FinalSummary })), {
  loading: () => <SectionSkeleton />
})

// Simple loading skeleton
function SectionSkeleton() {
  return (
    <div className="py-24 px-6">
      <div className="container mx-auto">
        <div className="h-8 w-64 bg-muted rounded-lg mx-auto mb-8 animate-pulse" />
        <div className="h-4 w-96 max-w-full bg-muted rounded mx-auto mb-16 animate-pulse" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-48 bg-muted rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Menu */}
      <NavigationMenu />
      
      {/* Floating Contact Buttons */}
      <FloatingContact />
      
      {/* Hero Section - Cinematic intro with airplane blueprint */}
      <HeroSection />
      
      {/* About Section - Guide introduction (StoryBrand style) */}
      <AboutSection />
      
      {/* Interactive Airplane System - Core experience */}
      <AirplaneSystem />
      
      {/* Book Experience Cards - 4 key books */}
      <BookCards />
      
      {/* StoryBrand Framework - 7-step storytelling */}
      <StoryBrandFramework />
      
      {/* Marketing Funnel - Customer journey visualization */}
      <MarketingFunnel />
      
      {/* Business Operating System - Dashboard style */}
      <BusinessOS />
      
      {/* Quick Action Playbook - Checklist */}
      <ActionPlaybook />
      
      {/* Final Visual Summary - Downloadable infographic */}
      <FinalSummary />
    </main>
  )
}
