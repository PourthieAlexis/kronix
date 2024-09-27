import Image from "next/image";
import { useSwiper } from "swiper/react";

export default function SlideNext() {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper?.slideNext()}
      className="absolute top-1/2 md:right-32 right-4 transform -translate-y-1/2 rounded-full w-16 h-16 bg-white shadow-[20px_20px_43px_0px_rgba(20,20,43,0.06)] flex justify-center items-center z-50"
    >
      <svg
        fill="#000000"
        viewBox="-4.8 -4.8 33.60 33.60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M9.343 18.657a1 1 0 0 1-.707-1.707l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-.707.293z"></path>
        </g>
      </svg>
    </button>
  );
}
