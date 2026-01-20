import { HeroSection } from "@/components/hero-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesSection } from "@/components/services-section";
import { ExperiencesSection } from "@/components/experiences-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <HowItWorks />
      <ServicesSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}

