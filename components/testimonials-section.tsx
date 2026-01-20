import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Alex Johnson",
            role: "CEO at TechStart",
            content: "Rahul is an exceptional developer. He took our vision and turned it into a reality with incredible speed and precision. His attention to detail is unmatched.",
            image: "/image/allimage.png",
        },
        {
            name: "Sarah Williams",
            role: "Product Manager",
            content: "Working with Rahul was a breeze. He's not only a great coder but also a fantastic communicator. He consistently delivered high-quality work on time.",
            image: "/image/allimage.png",
        },
        {
            name: "David Chen",
            role: "Founder of CreativeFlow",
            content: "The best developer I've hired in years. Rahul's ability to solve complex technical problems while keeping UX at the forefront is truly impressive.",
            image: "/image/allimage.png",
        },
    ];

    return (
        <section id="testimonials" className="py-24 px-6 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/30">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="Client Stories"
                    subtitle="Don't just take my word for it. Here's what my clients have to say about working with me."
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <GlassCard
                            key={testimonial.name}
                            className="flex flex-col p-8 animate-fade-in-up"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="mb-6 text-purple-600 dark:text-purple-400">
                                <QuoteIcon className="h-10 w-10 opacity-20" />
                            </div>
                            <p className="mb-8 flex-grow italic text-zinc-700 dark:text-zinc-300">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-purple-500/20">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
