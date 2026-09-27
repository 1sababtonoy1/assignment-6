"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutsContext } from "@/context/WorkoutsContext";

const Navbar = () => {
  const { todayPlan, wishlist } = useContext(WorkoutsContext);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isWorkoutsActive = pathname === "/workouts";
  const isPlanActive = pathname === "/today-plan";

  const navLinkClass = (active: boolean) =>
    `rounded-full px-5 py-2 text-sm font-medium transition ${
      active
        ? "bg-[#18220f] text-[#b7ff00]"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="border-b border-[#24262c] bg-[#0d0e11]">
      <div className="mx-auto flex h-[70px] md:h-[94px] max-w-[1480px] items-center justify-between px-4 md:px-7">

        {/* LEFT - LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Fitlog logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <span className="text-lg md:text-xl font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* CENTER - NAVIGATION (desktop only) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2">
          <Link href="/workouts" className={navLinkClass(isWorkoutsActive)}>
            Workouts
          </Link>
          <Link href="/today-plan" className={navLinkClass(isPlanActive)}>
            My Plan
          </Link>
        </div>

        {/* RIGHT - counters (desktop only) */}
        <div className="hidden md:flex items-center gap-7">
          <Link href="/today-plan" className="flex items-center gap-3 hover:opacity-80 transition">
            <span className="text-sm text-gray-300">Plan</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#b7ff00] text-xs font-bold text-black">
              {todayPlan.length}
            </span>
          </Link>

          <Link href="/today-plan" className="flex items-center gap-3 hover:opacity-80 transition">
            <span className="text-sm text-gray-400">Saved</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#343740] text-xs text-gray-400">
              {wishlist.length}
            </span>
          </Link>
        </div>

        {/* MOBILE - compact counters + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/today-plan" className="flex items-center gap-1">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#b7ff00] text-xs font-bold text-black">
              {todayPlan.length}
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#343740] text-xs text-gray-400">
              {wishlist.length}
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="text-white p-2"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4">
          <Link
            href="/workouts"
            onClick={() => setMenuOpen(false)}
            className={`${navLinkClass(isWorkoutsActive)} text-center`}
          >
            Workouts
          </Link>
          <Link
            href="/today-plan"
            onClick={() => setMenuOpen(false)}
            className={`${navLinkClass(isPlanActive)} text-center`}
          >
            My Plan
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;