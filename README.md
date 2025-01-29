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


## API Documentation

### Endpoint URL
http://localhost:3000/api

### Request/Response Format

#### Create a new record
- **Endpoint:** `/records`
- **Method:** POST
- **Request Body:**
  ```json
  {
     "name": "John Doe",
     "email": "john.doe@example.com"
  }
  ```
- **Response:**
  ```json
  {
     "id": 1,
     "name": "John Doe",
     "email": "john.doe@example.com",
     "createdAt": "2023-10-01T12:00:00Z"
  }
  ```

#### Get all records
- **Endpoint:** `/records`
- **Method:** GET
- **Response:**
  ```json
  [
     {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "createdAt": "2023-10-01T12:00:00Z"
     }
  ]
  ```

### Example Usage
To create a new record, send a POST request to `/records` with the required fields in the request body. To retrieve all records, send a GET request to `/records`.
