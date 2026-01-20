import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { GradientText } from "@/components/ui/gradient-text";
import { SocialLink } from "@/components/ui/social-link";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profileImage from "@/public/image/raahul_biswas.jpg";

export function HeroSection() {
    return (
        <>
            {/* Content Container */}
            <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">

                {/* Left Column - Text Content */}
                <div className="flex flex-col items-start justify-center">
                    {/* Availability Badge */}
                    <Badge className="mb-8 animate-fade-in-down">
                        <StatusIndicator status="online" />
                        Available for opportunities
                    </Badge>

                    {/* Main Heading */}
                    <h1 className="mb-6 text-left text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in-up">
                        <span className="inline-block bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-white">
                            Hi, I'm{" "}
                        </span>
                        <GradientText gradient="purple-pink-blue">
                            Rahul Biswas
                        </GradientText>
                    </h1>

                    {/* Subtitle */}
                    <p className="mb-4 text-left text-xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-2xl md:text-3xl animate-fade-in-up [animation-delay:200ms]">
                        Full Stack Developer & Game Developer
                    </p>

                    {/* Description */}
                    <p className="mb-12 text-left text-base text-zinc-600 dark:text-zinc-400 sm:text-lg md:text-xl animate-fade-in-up [animation-delay:400ms]">
                        BSc in CSE at AIUB. Specializing in high-performance web applications and immersive game experiences.
                        Passionate about C#, Next.js, and AI-driven solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mb-8 flex flex-wrap items-center gap-4 animate-fade-in-up [animation-delay:600ms]">
                        <Button
                            size="lg"
                            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 dark:shadow-purple-500/20 dark:hover:shadow-purple-500/30"
                        >
                            View Projects
                            <ArrowUpRightIcon className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Button>

                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="group border-2 border-zinc-300 bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:border-zinc-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
                            >
                                Contact Me
                                <MailIcon className="ml-1 transition-transform group-hover:scale-110" />
                            </Button>
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in-up [animation-delay:800ms]">
                        <SocialLink
                            icon={GithubIcon}
                            label="GitHub"
                            href="https://github.com/rahulxiao"
                        />

                        <SocialLink
                            icon={LinkedinIcon}
                            label="LinkedIn"
                            href="https://linkedin.com"
                            hoverColor="blue"
                        />

                        <SocialLink
                            icon={MailIcon}
                            label="Email"
                            href="mailto:rahulbiswasaiub@gmail.com"
                            hoverColor="purple"
                        />
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative flex items-center justify-center lg:justify-end animate-fade-in-up [animation-delay:400ms]">
                    <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 p-1 shadow-2xl">
                        <div className="relative h-full w-full overflow-hidden rounded-3xl">
                            {/* Profile Image */}
                            <Image
                                src={profileImage}
                                alt="Rahul Biswas - Full Stack Developer"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Positioned absolutely at bottom */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <ScrollIndicator />
                </div>
            </div>
        </>
    );
}
