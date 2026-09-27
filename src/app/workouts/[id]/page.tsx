import TodayButton from '@/components/workoutDetails/TodayButton';
import WishListButton from '@/components/workoutDetails/WishListButton';
import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import React from 'react';

interface IWorkoutsDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkouts = async () => {
  const response = await fetch('https://api.api-store.workers.dev/api/fitlog');
  const data = await response.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }: IWorkoutsDetailsPageProps) => {
  const { id } = await params;
  const workoutsData = await getWorkouts();
  const workout = workoutsData.find(
    (workout: IWorkout) => String(workout.id) === String(id)
  ) as IWorkout;

  if (!workout) {
    return <div className="text-white text-center mt-20">Workout not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12 lg:py-20 font-sans max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column: Image[cite: 2] */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column: Details[cite: 2] */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          {/* Header & Description[cite: 2] */}
          <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {workout.name}
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            {workout.description}
          </p>

          {/* Muscle Groups[cite: 2] */}
          <div className="flex flex-wrap gap-3 mb-8">
            {workout.muscleGroups.map((muscle, idx) => (
              <span
                key={idx}
                className="bg-[#d4ff26] text-black text-xs font-bold px-4 py-1.5 rounded-full capitalize tracking-wide"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Stats Box[cite: 2] */}
          <div className="bg-[#181920] border border-[#2a2c38] rounded-2xl mb-8">
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#2a2c38]">
              <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">Equipment</span>
              <span className="text-gray-200 text-sm font-medium">{workout.equipment}</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#2a2c38]">
              <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">Difficulty</span>
              <span className="text-gray-200 text-sm font-medium">{workout.difficulty}</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#2a2c38]">
              <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">Sets</span>
              <span className="text-gray-200 text-sm font-medium">{workout.sets}</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#2a2c38]">
              <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">Reps</span>
              <span className="text-gray-200 text-sm font-medium">{workout.reps}</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#2a2c38]">
              <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">Duration</span>
              <span className="text-gray-200 text-sm font-medium">{workout.duration} min</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#2a2c38]">
              <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">Calories</span>
              <span className="text-gray-200 text-sm font-medium">{workout.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">Rating</span>
              <span className="text-gray-200 text-sm font-medium">{workout.rating}</span>
            </div>
          </div>

          {/* Instructions[cite: 2] */}
          <div className="mb-10">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Instructions
            </h3>
            <ol className="text-gray-400 text-sm space-y-4 list-decimal list-outside ml-4 marker:text-gray-500">
              {workout.instructions.map((step, idx) => (
                <li key={idx} className="pl-2 leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons[cite: 2] */}
          <div className="flex flex-wrap items-center gap-4">
            <TodayButton workout={workout}></TodayButton>
            <WishListButton workout={workout}></WishListButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;