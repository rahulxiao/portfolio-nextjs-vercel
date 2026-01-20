import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { SectionHeading } from "./ui/section-heading";
import Image from "next/image";

const content = [
    {
        title: "Collaborative Design",
        description:
            "Work together with your team in real-time. See changes as they happen and stay on the same page. Our platform ensures that everyone is in sync, whether you're designing a new feature or refining an existing one.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="/image/allimage.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="collaborative design"
                />
            </div>
        ),
    },
    {
        title: "Version Control",
        description:
            "Experience real-time updates and never worry about losing your work. Our version control system keeps track of every change, allowing you to go back in time if needed. It's like having a time machine for your project.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="/image/allimage.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="version control"
                />
            </div>
        ),
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never worry about losing your work. No matter how much content you have, our sticky scroll reveal will keep things organized and visually engaging. It's the perfect way to tell your story.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="/image/allimage.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="content management"
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
