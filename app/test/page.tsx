import { GridInfo } from "@/components/grid-info";
import { AnimatedBackground } from "@/components/ui/animated-background";

export default function TestPage() {
    return (
        <AnimatedBackground>
            <div className="pt-32 px-6 pb-24">
                <GridInfo />
            </div>
        </AnimatedBackground>
    );
}