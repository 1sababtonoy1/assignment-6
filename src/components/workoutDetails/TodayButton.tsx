"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const TodayButton = ({ workout }: { workout: IWorkout }) => {
  const { todayPlan, setTodayPlan } = useContext(WorkoutsContext);

  const handleTodayWorkout = () => {
    if (todayPlan.some((w) => w.id === workout.id)) {
      toast.info(`"${workout.name}" is already in today's plan`);
      return;
    }
    setTodayPlan([...todayPlan, workout]); // ✅ push the workout, not the setter
    toast.success(`Added "${workout.name}" to today's plan`);
  };

  return (
    <button
      className="bg-[#d4ff26] text-black font-semibold text-sm px-6 py-3.5
      rounded-xl flex items-center gap-2 hover:bg-[#c2ed1c] transition-colors"
      onClick={handleTodayWorkout}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11v6m-3-3h6" />
      </svg>
      Add to todays plan
    </button>
  );
};

export default TodayButton;