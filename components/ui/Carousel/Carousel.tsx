"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import SlidePrev from "./SlidePrev";
import SlideNext from "./SlideNext";

export default function Carousel() {
  return (
    <div className="flex items-center justify-center w-full">
      <Swiper modules={[Navigation]} slidesPerView={1} loop draggable={false}>
        <SlidePrev />
        <SlideNext />
        <SwiperSlide className="!flex !justify-center ">
          <div className="flex xl:flex-row flex-col-reverse rounded-[40px] md:w-3/6 w-5/6 p-16 bg-[#F9F9F9] border border-[#D9D9D9] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col xl:w-1/2">
              <Image
                src="/images/gym_story.svg"
                width={200.05}
                height={60.33}
                alt="Star"
                className="pb-10"
              />
              <p className="font-bold text-2xl text-[#14142B] pb-4">
                Kornix is the best digital agency I have ever seen! Highly
                Recommended!
              </p>
              <p className="text-lg text-[#111204] opacity-80 pb-9">
                I recently hired <span className="font-bold">Ideapeel</span> for
                a custom web development project and couldn't be happier with
                the results. The team was able to bring my unique ideas to life
                and create a website that truly stands out.
              </p>
              <p className="font-bold text-xl text-[#111204] pb-2">
                Diana Loreza
              </p>
              <p className="opacity-80 text-[#111204]">
                Director of <span className="font-bold">Gymstory</span>
              </p>
            </div>
            <div className="flex flex-row-reverse justify-center xl:w-1/2 xl:mb-0 mb-8">
              <Image
                src="/images/profile.svg"
                width={325}
                height={325}
                alt="Profile"
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-center ">
          <div className="flex xl:flex-row flex-col-reverse rounded-[40px] md:w-3/6 w-5/6 p-16 bg-[#F9F9F9] border border-[#D9D9D9] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col xl:w-1/2">
              <Image
                src="/images/gym_story.svg"
                width={200.05}
                height={60.33}
                alt="gym_story logo"
                className="pb-10 object"
              />
              <p className="font-bold text-2xl text-[#14142B] pb-4">
                Kornix is the best digital agency I have ever seen! Highly
                Recommended!
              </p>
              <p className="text-lg text-[#111204] opacity-80 pb-9">
                I recently hired <span className="font-bold">Ideapeel</span> for
                a custom web development project and couldn't be happier with
                the results. The team was able to bring my unique ideas to life
                and create a website that truly stands out.
              </p>
              <p className="font-bold text-xl text-[#111204] pb-2">
                Diana Loreza
              </p>
              <p className="opacity-80 text-[#111204]">
                Director of <span className="font-bold">Gymstory</span>
              </p>
            </div>
            <div className="flex flex-row-reverse justify-center xl:w-1/2 xl:mb-0 mb-8">
              <Image
                src="/images/profile.svg"
                width={325}
                height={325}
                alt="Profile"
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
