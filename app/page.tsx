import { HeroSection } from "@/components/hero-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { GridInfo } from "@/components/grid-info";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <HowItWorks />
      <GridInfo />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <NewsletterSection />
    </>
  );
}

