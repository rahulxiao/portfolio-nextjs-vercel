import { HeroSection } from "@/components/hero-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ServicesSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}

