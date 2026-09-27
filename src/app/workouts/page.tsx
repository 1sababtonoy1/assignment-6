import React from 'react';
import Image from 'next/image';
import { IWorkout } from '@/types/workout.type';
import WorkoutCard from '@/components/shared/WorkoutCard';

const getWorkouts = async () => {
  const response = await fetch('https://api.api-store.workers.dev/api/fitlog');
  const data = await response.json();
  return data;
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