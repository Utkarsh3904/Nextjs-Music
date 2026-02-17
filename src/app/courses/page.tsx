"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All Courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center  gap-x-5">
        {courseData.courses.map((course: Course) => (
          <CardContainer key={course.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              
              {/* Course Title */}
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>

              {/* Course Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>

              {/* Course Image */}
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <img
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>

              <div className="flex justify-between items-center mt-10">
                {/* Price + Instructor */}
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  className="text-xs dark:text-neutral-300"
                >
                  <p className="font-semibold text-teal-400">₹{course.price}</p>
                  <p className="text-gray-400">By {course.instructor}</p>
                </CardItem>

                {/* Enroll Button */}
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-white text-xs font-bold transition"
                >
                  Enroll Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default page;