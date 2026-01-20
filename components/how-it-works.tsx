import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { SectionHeading } from "./ui/section-heading";
import Image from "next/image";

const content = [
    {
        title: "Understand the Problem",
        description:
            "I start by listening. We talk about your idea, your pain points, and what you actually want to achieve. I ask the right questions, sketch rough ideas, and think through the problem before touching any code — usually with a cup of coffee nearby.",
        content: (
            <div className="h-full w-full flex items-center justify-center">
                <Image
                    src="https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Understanding the problem and planning"
                />
            </div>
        ),
    },
    {
        title: "Plan & Choose the Right Stack",
        description:
            "Once the problem is clear, I design a simple, scalable solution. I choose tools that make sense for your use case — not what's trendy. The goal is clean architecture, smooth performance, and something that’s easy to grow later.",
        content: (
            <div className="h-full w-full flex items-center justify-center">
                <Image
                    src="https://images.pexels.com/photos/4855329/pexels-photo-4855329.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Planning and tech stack selection"
                />
            </div>
        ),
    },
    {
        title: "Build, Break, Improve",
        description:
            "This is where the fun starts. I build features step by step, test things early, break them, fix them, and improve them. You’ll see regular progress, and feedback is always welcome. Another coffee usually happens here.",
        content: (
            <div className="h-full w-full flex items-center justify-center">
                <Image
                    src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Development and iteration process"
                />
            </div>
        ),
    },
    {
        title: "Polish, Ship & Stay Around",
        description:
            "Before launch, I make sure everything feels right — performance, responsiveness, and edge cases. After shipping, I don’t disappear. I stay around to monitor, fix, and help your product evolve as users grow.",
        content: (
            <div className="h-full w-full flex items-center justify-center">
                <Image
                    src="https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Deployment, polish, and continuous improvement"
                />
            </div>
        ),
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 px-6 md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="My Workflow"
                    subtitle="A peek into how I bring projects from concept to completion with precision and care."
                />
                <div className="mt-12 rounded-3xl overflow-hidden border border-zinc-600 dark:border-zinc-800 shadow-2xl">
                    <StickyScroll content={content} />
                </div>
            </div>
        </section>
    );
}
