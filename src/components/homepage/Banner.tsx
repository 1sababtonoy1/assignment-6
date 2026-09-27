import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="mx-auto mt-6 grid min-h-[510px] max-w-[1415px] grid-cols-1 items-center overflow-hidden rounded-2xl border border-[#292d36] bg-[#15171c] px-8 py-10 md:grid-cols-2 md:px-16">
      
      {/* Left Content */}
      <div className="z-10">
        {/* Small heading */}
        <p className="mb-8 text-sm font-bold tracking-widest text-[#b7ff00]">
          WORKOUT LIBRARY
        </p>

        {/* Main heading */}
        <h1 className="max-w-[650px] text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-[76px]">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-[590px] text-base leading-7 text-gray-400 md:text-lg">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        {/* Button */}
        <Link
          href="/workouts"
          className="mt-8 inline-block rounded-md bg-[#b7ff00] px-7 py-4 text-sm font-bold text-black transition duration-200 hover:bg-[#a8eb00]"
        >
          BROWSE WORKOUTS
        </Link>
      </div>

      {/* Right Image */}
      <div className="flex h-full items-center justify-center">
        <Image
          src={bannerImg}
          alt="Workout exercise"
          className="h-auto w-full max-w-[500px] object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Banner;