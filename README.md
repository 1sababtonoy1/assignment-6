# FitLog 🏋️‍♂️

FitLog is a fitness tracking web app that lets users browse a library of workouts, build a personalized daily workout plan, save favorites to a wishlist, and track key stats like total exercises, minutes, and calories burned — all through a clean, dark-themed, mobile-responsive interface.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- **Workout Library** — Browse a grid of workouts fetched from a live API, each showing muscle-group tags, images, and stats.
- **Today's Plan Builder** — Add workouts to a daily plan (capped at five lifts) with live-updating stats for exercises, minutes, and calories.
- **Wishlist / Saved Workouts** — Save workouts to a separate "Saved" tab for later, independent from today's plan.
- **Sorting & Tabs** — Switch between "Today's Plan" and "Saved" tabs, and sort either list by duration, calories, or rating.
- **Mark as Done / Remove** — Mark a workout complete or manually remove it from either list.
- **Responsive Sticky Navbar** — Sticky top navbar with live plan/saved counters, active-route highlighting, and a mobile hamburger menu.
- **Workout Detail View** — Each workout links to a dedicated details page via dynamic routing.

## Tech Stack

| Category         | Technology                          |
|-------------------|--------------------------------------|
| Framework         | [Next.js](https://nextjs.org/) (App Router) |
| UI Library        | [React](https://react.dev/)          |
| Language          | [TypeScript](https://www.typescriptlang.org/) |
| Styling           | [Tailwind CSS](https://tailwindcss.com/) |
| State Management  | React Context API                    |
| Notifications     | [react-toastify](https://fkhadra.github.io/react-toastify/) |
| Data Fetching     | REST API via `fetch`                 |

