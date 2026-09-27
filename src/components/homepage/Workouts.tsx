import React from 'react';
import Image from 'next/image';
import WorkoutCard from '../shared/WorkoutCard';
import { IWorkout } from '@/types/workout.type';

const getWorkouts = async () => {
  try {
    const response = await fetch('https://api.api-store.workers.dev/api/fitlog');

    if (!response.ok) {
      throw new Error(`Failed to fetch workouts: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching workouts:', error);
    return [];
  }
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return (
    <section className="container mx-auto my-[70px] px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-black uppercase tracking-wider text-white">
          The Library
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutsData.map((workout: IWorkout, ind: number) => {
          return <WorkoutCard key={ind} workout={workout} />;
        })}
      </div>
    </section>
  );
};

export default Workouts;