import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon, GithubIcon, LinkedinIcon, TwitterIcon, MessageSquareIcon, SparklesIcon } from "lucide-react";

export function ContactSection() {
    const contactInfo = [
        {
            icon: MailIcon,
            title: "Email",
            value: "rahulbiswasaiub@gmail.com",
            href: "mailto:rahulbiswasaiub@gmail.com",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            hoverBg: "group-hover:bg-blue-600",
        },
        {
            icon: PhoneIcon,
            title: "Phone",
            value: "+880 1735355511",
            href: "tel:+8801735355511",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            hoverBg: "group-hover:bg-emerald-600",
        },
        {
            icon: GithubIcon,
            title: "GitHub",
            value: "github.com/rahulxiao",
            href: "https://github.com/rahulxiao",
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            hoverBg: "group-hover:bg-purple-600",
        },
    ];

    return (
        <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 overflow-hidden relative">
            {/* Background Light Effects */}
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-purple-500/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-blue-500/5 blur-[120px]" />

            <div className="mx-auto max-w-7xl">
                <div className="mb-20 animate-in fade-in slide-in-from-bottom-10 duration-700">
                    <SectionHeading
                        title="Get In Touch"
                        subtitle="Have a project in mind? Let's talk about how I can help you achieve your goals. Whether it's a new build or a redesign, I'm here to help."
                        gradient="purple-pink-blue"
                    />
                </div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">
                    {/* Left Side: Contact Cards & Socials */}
                    <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000 delay-200 fill-mode-both">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                                <SparklesIcon className="h-5 w-5 text-purple-600" />
                                Contact Information
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {contactInfo.map((info, idx) => (
                                    <a
                                        key={info.title}
                                        href={info.href}
                                        className="group"
                                        style={{ animationDelay: `${idx * 150}ms` }}
                                    >
                                        <GlassCard className="flex items-center gap-6 p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-700 group-hover:bg-white/60 dark:group-hover:bg-zinc-900/60">
                                            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${info.bg} ${info.color} transition-all duration-500 ${info.hoverBg} group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-lg`}>
                                                <info.icon className="h-7 w-7" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-zinc-900 dark:text-white">
                                                    {info.title}
                                                </h4>
                                                <p className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </GlassCard>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Location Mini Card */}
                        <GlassCard className="bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/50 dark:to-zinc-900/20 p-8 border-dashed">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shadow-sm">
                                    <MapPinIcon size={24} />
                                </div>
                                {/* <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Office Location</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                        House #12, Road #05, Block - B<br />
                                        Bashundhara R/A, Dhaka-1229
                                    </p>
                                    <Badge variant="outline" className="border-orange-200 text-orange-600 bg-orange-50 dark:border-orange-900/30 dark:text-orange-400 dark:bg-orange-950/20">
                                        Open 9:00 AM - 6:00 PM
                                    </Badge>
                                </div> */}
                            </div>
                        </GlassCard>

                        {/* Social Connect */}
                        <div className="pt-4">
                            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Connect with me</p>
                            <div className="flex gap-4">
                                {[
                                    { icon: GithubIcon, href: "#", color: "hover:text-zinc-900 dark:hover:text-white" },
                                    { icon: LinkedinIcon, href: "#", color: "hover:text-blue-600" },
                                    { icon: TwitterIcon, href: "#", color: "hover:text-sky-500" },
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 transition-all duration-300 hover:scale-110 hover:shadow-lg ${item.color}`}
                                    >
                                        <item.icon size={22} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-10 duration-1000 delay-400 fill-mode-both">
                        <GlassCard className="p-8 md:p-10 relative overflow-hidden group">
                            {/* Form Header */}
                            <div className="mb-10 text-center md:text-left">
                                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Send a Message</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">I usually respond within 24 hours. Let's make something amazing!</p>
                            </div>

                            <form className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider ml-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 outline-none transition-all duration-300 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-purple-500 dark:focus:ring-purple-500/10 placeholder:text-zinc-400"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider ml-1">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="name@company.com"
                                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 outline-none transition-all duration-300 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-purple-500 dark:focus:ring-purple-500/10 placeholder:text-zinc-400"
                                    />
                                </div>
                                <div className="sm:col-span-2 space-y-3">
                                    <label htmlFor="subject" className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider ml-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="How can I help you?"
                                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 outline-none transition-all duration-300 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-purple-500 dark:focus:ring-purple-500/10 placeholder:text-zinc-400"
                                    />
                                </div>
                                <div className="sm:col-span-2 space-y-3">
                                    <label htmlFor="message" className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider ml-1">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        placeholder="Write your message here..."
                                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 outline-none transition-all duration-300 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-purple-500 dark:focus:ring-purple-500/10 placeholder:text-zinc-400 resize-none"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <Button size="lg" className="w-full py-8 text-lg rounded-2xl gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl shadow-purple-500/20 hover:scale-[1.01] hover:shadow-purple-500/40 transition-all duration-300 group">
                                        Send Message
                                        <SendIcon className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
