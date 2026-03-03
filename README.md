# SaaS Security Dashboard Frontend

## Overview
Frontend recreation of a cybersecurity SaaS dashboard using Next.js 14 and Tailwind CSS.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons

## Features
- Gradient marketing login page
- Dark/Light theme dashboard
- Sidebar navigation with active state
- Scan table view
- Scan detail live progress view
- Fully responsive layout

## Authentication Flow (Frontend Simulation)

The authentication system in this project is intentionally mocked for frontend demonstration purposes.

When a user fills in the required fields on the Login page and clicks **"Create Account"**, the application:

- Prevents default form submission
- Simulates a short processing delay
- Redirects the user to the Dashboard (`/dashboard`)

This approach was implemented to:

- Focus on UI accuracy and frontend architecture
- Avoid backend dependencies
- Demonstrate controlled routing and navigation flow

No real authentication, API calls or database integration are implemented in this version.

## Setup
npm install
npm run dev

## Deployment
Hosted on Vercel

## Known Limitations
- No backend integration
- Data is mocked