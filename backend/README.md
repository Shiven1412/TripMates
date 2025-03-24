# Tripmates Backend

## Overview
Tripmates is a collaborative platform designed to help users plan and organize trips together. This backend application is built using Node.js and Express, providing a RESTful API for the frontend to interact with.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (for database)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tripmates.git
   ```
2. Navigate to the backend directory:
   ```
   cd tripmates/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

### API Endpoints
- **GET /api/trips**: Retrieve a list of trips.
- **POST /api/trips**: Create a new trip.
- **GET /api/trips/:id**: Retrieve a specific trip by ID.
- **PUT /api/trips/:id**: Update a specific trip by ID.
- **DELETE /api/trips/:id**: Delete a specific trip by ID.

## Folder Structure
- `src/app.js`: Entry point of the application.
- `src/controllers`: Contains controller functions for handling requests.
- `src/models`: Defines data models for the application.
- `src/routes`: Sets up API routes.
- `src/utils`: Contains utility functions.

## License
This project is licensed under the MIT License. See the LICENSE file for details.