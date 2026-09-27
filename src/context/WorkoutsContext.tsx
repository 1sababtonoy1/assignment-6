"use client";
import React, { ReactNode, createContext, useState } from "react";
import { IWorkout } from "@/types/workout.type";

interface IWorkoutsContext {
  todayPlan: IWorkout[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  wishlist: IWorkout[];
  setWishlist: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  removeFromTodayPlan: (id: string | number) => void;
  removeFromWishlist: (id: string | number) => void;
}

export const WorkoutsContext = createContext<IWorkoutsContext>(
  {} as IWorkoutsContext
);

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [wishlist, setWishlist] = useState<IWorkout[]>([]);

  const removeFromTodayPlan = (id: string | number) => {
    setTodayPlan((prev) => prev.filter((w) => w.id !== id));
  };

  const removeFromWishlist = (id: string | number) => {
    setWishlist((prev) => prev.filter((w) => w.id !== id));
  };

  const sharedData: IWorkoutsContext = {
    todayPlan,
    setTodayPlan,
    wishlist,
    setWishlist,
    removeFromTodayPlan,
    removeFromWishlist,
  };

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;