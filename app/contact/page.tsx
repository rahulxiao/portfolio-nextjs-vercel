import { ContactSection } from "@/components/contact-section";
import { AnimatedBackground } from "@/components/ui/animated-background";

export default function ContactPage() {
    return (
        <AnimatedBackground>
            <div className="pt-20">
                <ContactSection />
            </div>
        </AnimatedBackground>
    );
}
