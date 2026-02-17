'use client'
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course{
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string; 
  isFeatured: boolean;
}

function FeaturedCourses() {


  const featuredcourses = courseData.courses.filter((course:Course) => course.isFeatured) 


  return (
    <div  className="py-12 bg-black">
      <div>
        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-wide text-teal-600">
            FEATURED COURSES
          </h2> 
          <p className="text-4xl leading-8 font-extrabold tracking-tight sm:text-4xl text-gray-300 mt-4 max-w-2xl mb-20 mx-auto">
            Learn with the Best
          </p>
        </div>
      </div>


      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredcourses.map((course:Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient>
                <div className="flex flex-col rounded-[22px] bg-white dark:bg-black overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center grow ">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 grow ">{course.description}</p>
                    <Link className ="mt-4 text-teal-600 hover:text-teal-500"href={`courses/${course.slug}`}>
                    Learn More 
                    </Link>
                   
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div>

        
        <div className="flex justify-center mt-20">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-white flex items-center space-x-2 px-6 py-2"
          >
            <span>View All Courses</span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
