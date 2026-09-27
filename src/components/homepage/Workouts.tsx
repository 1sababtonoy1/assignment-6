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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutsData.map((workout:IWorkout, ind:number) => {
            return <WorkoutCard key={ind} workout={workout}/>
})}
      </div>
    </section>
  );
};

export default Workouts;