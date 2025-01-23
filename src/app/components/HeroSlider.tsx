"use client";

import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <div className="flex justify-center rounded-2xl overflow-hidden">
      <Swiper
        className="overflow-hidden p-2 h-[28rem]"
        modules={[Navigation, Keyboard, Autoplay, Pagination, EffectFade]}
        spaceBetween={25}
        slidesPerView={1}
        keyboard={true}
        autoplay={{ delay: 4000 }}
        speed={1000}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        <SwiperSlide className="">
          <Image
            src="/assets/slider-1.png"
            width={1200}
            height={600}
            alt="slider"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/slider-2.jpg"
            width={1200}
            height={800}
            alt="slider"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/slider-3.png"
            width={1200}
            height={600}
            alt="slider"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/slider-4.jpg"
            width={1200}
            height={600}
            alt="slider"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/slider-5.jpg"
            width={1200}
            height={600}
            alt="slider"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src="/assets/slider-6.jpg"
            width={1200}
            height={600}
            quality={100}
            alt="slider"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        {/* Custom Navigation Buttons */}
        <div className="custom-prev max-md:hidden bg-muted w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 z-10 hover:text-primary duration-300">
          <ChevronLeft className="size-5" />
        </div>
        <div className="custom-next max-md:hidden bg-muted w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 z-10 hover:text-primary duration-300">
          <ChevronRight className="size-5" />
        </div>
      </Swiper>
    </div>
  );
}
