import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { AnimatedBackground } from "@/components/ui/animated-background";

export default function AboutPage() {
    return (
        // <AnimatedBackground>
        <div className="pt-20">
            <AboutSection />
            <SkillsSection />
        </div>
        // </AnimatedBackground>
    );
}
