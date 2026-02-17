"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "World-Class Industry Mentors & Real Studio Experience",
    description:
      "Learn directly from internationally recognized producers, certified audio engineers, touring musicians, composers, and music directors who have worked on real commercial projects. Go beyond theory and understand how professional studios operate, how chart-ready tracks are crafted, and how industry-standard workflows are structured. Gain insider knowledge about client work, collaborations, deadlines, creative blocks, and professional production environments."
  },
  {
    title: "Deep, Structured & Progressive Curriculum",
    description:
      "Our curriculum is carefully structured to guide you from foundational music theory to advanced production mastery. Start with rhythm, scales, harmony, and arrangement, then progress into sound design, recording techniques, mixing, mastering, and advanced DAW automation. Each module builds logically on the previous one, ensuring clarity, retention, and skill development. Whether you're a beginner or an intermediate learner, the learning path adapts to your growth."
  },
  {
    title: "Project-Based Learning with Real-World Application",
    description:
      "Every course includes hands-on assignments that simulate real music production scenarios. Create original compositions, produce beats, record vocals, mix full tracks, and master final outputs ready for streaming platforms. You will build a strong portfolio showcasing your versatility across genres, production styles, and technical abilities — helping you stand out in freelance, label, or collaborative opportunities."
  },
  {
    title: "Collaborative Creative Community & Live Feedback",
    description:
      "Join an active and supportive community of aspiring artists, producers, instrumentalists, and composers. Participate in live critique sessions, remix battles, collaboration challenges, and creative workshops. Share your projects, receive structured feedback from mentors and peers, and refine your musical identity through continuous engagement and collaboration."
  },
  {
    title: "Flexible Learning with Lifetime Access",
    description:
      "Access all lessons anytime, from anywhere, on any device. Our platform allows you to revisit modules, download practice files, access project stems, and rewatch masterclasses whenever needed. Learn at your own pace without pressure, while tracking milestones and progress checkpoints to stay motivated and consistent."
  }
];

    
function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content = {content}/>
    </div>
  )
}

export default WhyChooseUs;