import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { Button } from "./ui/button";
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from "lucide-react";

export function ContactSection() {
    const contactInfo = [
        {
            icon: MailIcon,
            title: "Email",
            value: "rahul.biswas@example.com",
            href: "mailto:rahul.biswas@example.com",
        },
        {
            icon: PhoneIcon,
            title: "Phone",
            value: "+880 1234 567 890",
            href: "tel:+8801234567890",
        },
        {
            icon: MapPinIcon,
            title: "Location",
            value: "Dhaka, Bangladesh",
            href: "#",
        },
    ];

    return (
        <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Have a project in mind? Let's talk about how I can help you achieve your goals."
                />

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        {contactInfo.map((info) => (
                            <a
                                key={info.title}
                                href={info.href}
                                className="group block"
                            >
                                <GlassCard className="flex items-center gap-6 p-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-500/5 dark:text-purple-400">
                                        <info.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white">
                                            {info.title}
                                        </h4>
                                        <p className="text-zinc-600 dark:text-zinc-400">
                                            {info.value}
                                        </p>
                                    </div>
                                </GlassCard>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="lg:col-span-2">
                        <GlassCard className="h-full">
                            <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-3 outline-none transition-all focus:border-purple-600 focus:ring-1 focus:ring-purple-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-purple-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-3 outline-none transition-all focus:border-purple-600 focus:ring-1 focus:ring-purple-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-purple-500"
                                    />
                                </div>
                                <div className="sm:col-span-2 space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-3 outline-none transition-all focus:border-purple-600 focus:ring-1 focus:ring-purple-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-purple-500"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <Button className="w-full gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30">
                                        Send Message <SendIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                            </form>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
