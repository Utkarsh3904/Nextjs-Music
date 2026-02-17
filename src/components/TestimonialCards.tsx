"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { div } from "motion/react-client";

const testimonials = [
  {
    quote:
      "This platform completely transformed the way I approach music production. The structured lessons and hands-on projects helped me move from basic beat-making to producing full professional tracks. The mentor feedback was incredibly valuable.",
    name: "Arjun Mehta",
    title: "Independent Music Producer",
  },
  {
    quote:
      "I had always struggled with music theory, but the step-by-step explanations made complex concepts simple and practical. Within a few months, I was confidently composing original pieces and collaborating with other artists.",
    name: "Riya Sharma",
    title: "Aspiring Composer & Songwriter",
  },
  {
    quote:
      "The real studio workflow sessions were eye-opening. I learned how professionals handle mixing, mastering, and client projects. The portfolio I built here helped me land my first freelance audio engineering gig.",
    name: "Karan Verma",
    title: "Freelance Audio Engineer",
  },
  {
    quote:
      "What makes this platform unique is the community. The live feedback sessions and collaboration challenges pushed me creatively and helped me refine my sound. It feels like being part of a real music ecosystem.",
    name: "Neha Kapoor",
    title: "Vocal Artist & Performer",
  },
  {
    quote:
      "The career guidance modules were a game-changer. I learned about music distribution, branding, and monetization strategies that most courses never talk about. It gave me clarity on turning my passion into a profession.",
    name: "Rahul Singh",
    title: "Electronic Music Artist",
  },
  {
    quote:
      "The flexibility of learning at my own pace while still having access to expert mentors made all the difference. I could revisit complex topics anytime and steadily improve my skills without feeling overwhelmed.",
    name: "Sneha Iyer",
    title: "Music Production Student",
  },
];

function TestimonialCards() {
    function cn(...classes: (string | undefined | false)[]): string {
        return classes.filter(Boolean).join(" ");
    }

  return (
    <div>

      {/* Fixed: Updated Tailwind classes to canonical form and added flex column layout for vertical alignment */}
      <div className="relative flex flex-col h-200 w-full items-center justify-center gap-8 bg-white dark:bg-black">
        {/* Fixed: Changed [background-size:40px_40px] to bg-size-[40px_40px] and updated background-image to bg-gradient format */}
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}>
        </div>
        
        <div className="pointer-events-none absolute inset-0 items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        
        {/* Added relative z-20 for proper stacking context */}
        <p className="relative z-20 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-2xl font-bold text-transparent sm:text-6xl text-center">
          Hear our Harmony: Voices of Success
        </p>
        
        {/* Testimonial cards component with relative z-10 for proper layering */}
        <div className="relative z-20 w-full">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
