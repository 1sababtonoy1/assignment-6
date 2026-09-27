"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkoutsContext } from "../../context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";

const TodayPlan = () => {
  const { todayPlan, wishlist, removeFromTodayPlan, removeFromWishlist } =
    useContext(WorkoutsContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

  // Select active list based on selected tab[cite: 7]
  const currentList = activeTab === "today" ? todayPlan : wishlist;

  // Sorting logic
  const sortWorkouts = (workouts: IWorkout[]) => {
    const sorted = [...(workouts || [])];
    if (sortBy === "duration") {
      sorted.sort((a, b) => (Number(b.duration) || 0) - (Number(a.duration) || 0));
    } else if (sortBy === "calories") {
      sorted.sort((a, b) => (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0));
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0));
    }
    return sorted;
  };

  const displayedWorkouts = sortWorkouts(currentList);

  // Dynamic stats calculation for top banner[cite: 7]
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, curr) => acc + (Number(curr.duration) || 0),
    0
  );
  const totalCalories = currentList.reduce(
    (acc, curr) => acc + (Number(curr.caloriesBurned) || 0),
    0
  );

  // Handle removing workout from current tab[cite: 7]
  const handleRemove = (id: string | number) => {
    if (activeTab === "today") {
      removeFromTodayPlan(id);
    } else {
      removeFromWishlist(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0e12] text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section[cite: 7] */}
        <div>
          <h1 className="text-3xl font-black uppercase tracking-wider text-white">
            My Plan
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Summary Banner[cite: 7] */}
        <div className="bg-[#13141c] border border-[#222431] rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#222431]">
          {/* Exercises */}
          <div className="flex flex-col pt-2 md:pt-0 md:px-4">
            <span className="text-gray-400 text-xs font-medium mb-1">
              Exercises
            </span>
            <span className="text-4xl font-extrabold text-[#d4ff26]">
              {totalExercises}
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col pt-4 md:pt-0 md:px-8">
            <span className="text-gray-400 text-xs font-medium mb-1">
              Minutes
            </span>
            <span className="text-4xl font-extrabold text-white">
              {totalMinutes}
            </span>
          </div>

          {/* Calories */}
          <div className="flex flex-col pt-4 md:pt-0 md:px-8">
            <span className="text-gray-400 text-xs font-medium mb-1">
              Calories
            </span>
            <span className="text-4xl font-extrabold text-white">
              {totalCalories}
            </span>
          </div>
        </div>

        {/* Filter Controls Bar[cite: 7] */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Tab Controls[cite: 7] */}
          <div className="flex bg-[#13141c] border border-[#222431] p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "today"
                  ? "bg-[#222431] text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Todays Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "saved"
                  ? "bg-[#222431] text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By Dropdown[cite: 7] */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm font-medium">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="bg-[#13141c] border border-[#222431] text-white text-sm font-medium rounded-xl px-4 py-2 focus:outline-none focus:border-gray-500 cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workout Cards List[cite: 7] */}
        <div className="space-y-4">
          {displayedWorkouts.length > 0 ? (
            displayedWorkouts.map((workout: IWorkout, index: number) => {
              const imageSrc =
                workout.image && workout.image.trim() !== ""
                  ? workout.image
                  : "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop";

              return (
                <div
                  key={workout.id ? `${workout.id}-${index}` : index}
                  className="bg-[#13141c] border border-[#222431] rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 justify-between hover:border-gray-700 transition-all"
                >
                  {/* Left Section: Thumbnail & Details[cite: 7] */}
                  <div className="flex items-center gap-5 w-full md:w-auto">
                    {/* Image */}
                    <div className="relative w-36 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-800">
                      <Image
                        src={imageSrc}
                        alt={workout.name || "Workout"}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-white font-extrabold text-lg uppercase tracking-wide">
                        {workout.name}
                      </h3>
                      <p className="text-gray-400 text-xs mb-3">
                        {workout.equipment}
                      </p>

                      {/* Stats Badges */}
                      <div className="flex items-center gap-4 text-gray-300 text-xs font-medium">
                        {/* Duration */}
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4 text-[#d4ff26]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {workout.duration} min
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4 text-[#d4ff26]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.657 14.829c-1.554-1.554-2.829-2.829-2.829-5.657 0-2.828 2.829-5.657 2.829-5.657s-1.275-1.275-4.243-1.275c-4.242 0-7.071 2.828-7.071 7.071 0 2.829 1.275 4.103 2.829 5.657 1.553 1.554 2.828 2.829 2.828 5.657 0 .584-.087 1.144-.241 1.673 2.923-.523 5.48-2.585 6.471-5.617.992-3.033.096-6.425-2.029-8.548l1.457 1.456c1.554 1.554 2.829 2.829 2.829 5.657 0 1.25-.453 2.39-1.206 3.284 1.238-1.488 1.95-3.393 1.95-5.462 0-2.828-1.275-4.103-2.829-5.657z" />
                          </svg>
                          {workout.caloriesBurned} kcal
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4 text-[#d4ff26]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                          {workout.rating}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section: Action Buttons[cite: 7] */}
                  <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="px-6 py-2.5 rounded-full border border-gray-600 text-white text-xs font-semibold hover:bg-white hover:text-black transition-all"
                    >
                      View Details
                    </Link>

                    {/* Delete / Remove Icon[cite: 7] */}
                    <button
                      onClick={() => handleRemove(workout.id)}
                      className="text-gray-500 hover:text-red-400 p-2 transition-colors"
                      aria-label="Remove workout"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            /* Empty State */
            <div className="text-center py-20 bg-[#13141c] border border-[#222431] rounded-2xl">
              <p className="text-gray-400 font-medium">
                {activeTab === "today"
                  ? "No workouts added to today's plan yet."
                  : "No saved workouts found."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodayPlan;