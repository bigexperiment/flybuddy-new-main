FlyBuddy is a web application designed to connect travelers on long flights, particularly focusing on solo and elderly passengers. It allows users to find companions for their journey, reducing isolation during travel.
Tech Stack:
Frontend: React
Backend: Node.js with Express
Database: PostgreSQL (using Vercel Postgres)
API: RESTful
Key Components:
Frontend (app.js):
React-based single-page application
Uses hooks (useState, useEffect) for state management
Incorporates Lucide React icons for UI enhancement
Responsive design with Tailwind CSS
Backend (server.js):
Express server handling API requests
CORS enabled for cross-origin requests
Currently uses dummy data, with plans to integrate database
Database (db.js):
PostgreSQL database initialized with Vercel Postgres
'passengers' table for storing user information
Data Structure (Passenger): { id: number, name: string, age: number, type: string ('needFriend' or 'beFriend'), date: string (YYYY-MM-DD), fromCity: string, toCity: string, phone: string }
API Endpoints:
GET /api/passengers: Retrieve all passengers
POST /api/passengers: Add a new passenger
Functionality:
Users can add themselves as passengers, specifying if they need a friend or are willing to be a friend
The app displays two lists: those looking for friends and those willing to be friends
Users can view other passengers' details to find potential travel companions
