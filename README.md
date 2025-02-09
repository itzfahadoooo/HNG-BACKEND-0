# HNG-BACKEND-0

HNG Stage 0 - Public API
This is a simple public API built using Node.js and Express.js for HNG Internship 12 - Stage 0 Backend Task.

## Project Description

It provides basic information in JSON format, including:

The registered email on HNG12 Slack.
The current datetime in ISO 8601 format (UTC).
The GitHub URL of the project's codebase.

## Setup Instructions

1. Clone the Repository:
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
2. Install Dependencies:
   npm install
3. Run the API Locally:
   node index.js
   The server runs on http://localhost:3000/ by default.

## 📌 API Documentation

🚀 Live API URL
https://hng-backend-0.onrender.com

#### Create a new record

- **Endpoint:** `/records`
- **Method:** GET

1. GET Request to /
   Endpoint: /
   Method: GET
   Response Format: JSON
   - **Response:**: (200 OK)
     json
     {
     "email": "your-email@example.com",
     "current_datetime": "2025-01-30T09:30:00Z",
     "github_url": "https://github.com/yourusername/your-repo"
     }

📌 Technology Stack
Node.js
Express.js
CORS Handling
Hosted on [Render]

🔗 Need to hire a Node developer?
https://hng.tech/hire/nodejs-developers
