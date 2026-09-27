import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IWorkout } from '@/types/workout.type';

interface IWorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`} className="block h-full">
      <div className="bg-[#1a1a1e] rounded-2xl overflow-hidden shadow-lg flex flex-col font-sans h-full transition-transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        {/* Image */}
        <div className="h-56 w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Add the ? right before .map */}
            {workout.muscleGroups?.map((muscle, idx) => (
              <span
                key={idx}
                className="bg-[#d4ff26] text-black text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title & Equipment */}
          <div className="mb-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-1">
              {workout.name}
            </h3>
            <p className="text-gray-400 text-sm">{workout.equipment}</p>
          </div>

          {/* Footer Stats */}
          <div className="flex items-center gap-6 text-gray-400 text-sm mt-auto font-medium">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.657 14.829c-1.554-1.554-2.829-2.829-2.829-5.657 0-2.828 2.829-5.657 2.829-5.657s-1.275-1.275-4.243-1.275c-4.242 0-7.071 2.828-7.071 7.071 0 2.829 1.275 4.103 2.829 5.657 1.553 1.554 2.828 2.829 2.828 5.657 0 .584-.087 1.144-.241 1.673 2.923-.523 5.48-2.585 6.471-5.617.992-3.033.096-6.425-2.029-8.548l1.457 1.456c1.554 1.554 2.829 2.829 2.829 5.657 0 1.25-.453 2.39-1.206 3.284 1.238-1.488 1.95-3.393 1.95-5.462 0-2.828-1.275-4.103-2.829-5.657z" />
              </svg>
              {workout.caloriesBurned} kcal
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
    </Link>
  );
};

export default WorkoutCard;