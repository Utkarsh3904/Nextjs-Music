"use client";
import { useEffect } from "react";

import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {

    useEffect(() => {
    window.scrollTo(0, 0); // ← forces scroll to top on every reload
  }, []);

  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]  items-start justify-center pt-32">
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <Instructors/>
      <Footer/>
    </main>
  );
}