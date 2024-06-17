# Event Scheduling API

## Description
This is an API for managing events and attendees, built with Nest.js, TypeORM, and GraphQL. It supports creating, updating, and deleting events, tracking attendees, and filtering events.

## Setup
- Install dependencies with 
```bash
  $ npm install
```
- Host a local MySQL database using Docker with 
```bash
  $ docker-compose up -d
```

- Fill `.env` file with your database and JWT secret information.

- Run the app with:
```bash
  # development
  $ npm run start

  # for watch mode
  $ npm run start:dev

  # for production mode
  $ npm run start:prod
```

## Testing
Run unit tests with  `npm run test`, e2e tests with `npm run test:e2e`.

## API Endpoints

Route | Method | Description | Authentication
--- | --- | --- | ---
`/auth/login` | `POST` | Authenticate a user | No
`/auth/profile` | `GET` | Get the current user profile | Yes
`/users` | `POST` | Register a new user | No
`/events/:id` | `PATCH` | Update an event | Yes
`/events/:id/attendees` | `GET` | Get event attendees | No
`/current-user-event-attendance/:id` | `PUT` | Attend an event | Yes
`/current-user-event-attendance/:id` | `GET` | Get current user's attendance for a specific event | Yes
`/current-user-event-attendance` | `GET` | Get current user's attendance for all events | Yes
`/events` | `POST` | Create an event | Yes
`/events` | `GET` | Get a list of events | No
`/events/:id` | `DELETE` | Delete an event | Yes
`/events-organized-by-user/:id` | `GET` | Get events organized by a user | No
`/events/:id` | `GET` | Get a single event | No