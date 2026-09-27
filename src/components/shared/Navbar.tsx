"use client";
import React, { useContext } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutsContext } from "@/context/WorkoutsContext";

const Navbar = () => {
  const { todayPlan, wishlist } = useContext(WorkoutsContext);
  const pathname = usePathname();

  const isWorkoutsActive = pathname === "/workouts";
  const isPlanActive = pathname === "/today-plan";

  return (
    <nav className="border-b border-[#24262c] bg-[#0d0e11]">
      <div className="mx-auto flex h-[94px] max-w-[1480px] items-center justify-between px-7">

        {/* LEFT - LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Fitlog logo"
            width={30}
            height={30}
            className="object-contain"
          />

          <span className="text-xl font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* CENTER - NAVIGATION */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">

          <Link
            href="/workouts"
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              isWorkoutsActive
                ? "bg-[#18220f] text-[#b7ff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/today-plan"
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              isPlanActive
                ? "bg-[#18220f] text-[#b7ff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-7">

          {/* PLAN */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">
              Plan
            </span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#b7ff00] text-xs font-bold text-black">
              {todayPlan.length}
            </span>
          </div>

          {/* SAVED */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">
              Saved
            </span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#343740] text-xs text-gray-400">
              {wishlist.length}
            </span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;