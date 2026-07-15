# Word Game

A full-stack Hangman-style word game built with an Angular frontend and an ASP.NET Core backend.

This project was developed as a school portfolio application to demonstrate full-stack web development, user authentication, persistent game data, API design, and communication between a modern single-page application and a C# backend.

## Overview

Users must create an account or log in before accessing the game. After authentication, each user can manage their own saved games through a persistent game history.

Authenticated users can:

- Start a new game
- Resume a game that is still in progress
- View a completed game
- Review saved games
- Delete a game
- Log out securely

Game progress is stored in a database, allowing users to leave the application and return to unfinished games later.

## Technologies Used

### Frontend

- Angular
- TypeScript
- Angular Router
- Angular Forms
- Angular Material
- Angular CDK
- RxJS
- JWT decoding
- HTML and CSS
- Tailwind CSS tooling

### Backend

- C#
- .NET 10
- ASP.NET Core Web API
- ASP.NET Core Identity
- JWT bearer authentication
- Entity Framework Core
- SQLite
- AutoMapper
- Dependency injection
- Environment-based configuration

## Core Features

### Account Authentication

The application uses ASP.NET Core Identity and JWT bearer authentication to protect game functionality.

Users can:

- Register a new account
- Log in with an existing account
- Receive an authentication token
- Access protected game routes
- Maintain an authenticated session from the Angular client

The Angular application decodes and uses the JWT while communicating with protected backend endpoints.

### Persistent Game Management

Game records are associated with authenticated users and stored using Entity Framework Core and SQLite.

Users can create and manage multiple games, including:

- New games
- Games currently in progress
- Completed games
- Deleted games

Persisting game state allows an unfinished game to be resumed in a later session.

### Game History

The application provides a central view of the user's saved games. From this view, a user can determine a game's status and choose the appropriate action:

- Resume an unfinished game
- View a completed game
- Delete a saved game
- Begin another game

### Data Mapping

AutoMapper is used to map between backend entities and data transfer objects. This keeps database models separate from the data exposed through the API and reduces repetitive mapping code.

### Client-Server Architecture

The project separates the user interface and server responsibilities:

- Angular manages navigation, forms, authentication state, user interaction, and game presentation.
- ASP.NET Core manages authentication, authorization, business logic, data validation, and persistence.
- The frontend communicates with the backend through HTTP API requests.

## Project Structure

A typical repository structure for the application is:

```text
WordGame/
├── word-game.client/       # Angular frontend
│   ├── src/
│   ├── angular.json
│   └── package.json
│
├── WordGame.Server/        # ASP.NET Core backend
│   ├── Controllers/
│   ├── Data/
│   ├── DTOs/
│   ├── Models/
│   ├── Mapping/
│   ├── Program.cs
│   └── WordGame.Server.csproj
│
└── README.md
```

The exact folder names may differ depending on the repository layout.

## Getting Started

### Prerequisites

Install the following:

- .NET 10 SDK
- Node.js
- npm
- Angular CLI

Install the Angular CLI globally if it is not already installed:

```bash
npm install -g @angular/cli
```

## Backend Setup

Navigate to the ASP.NET Core project directory:

```bash
cd WordGame.Server
```

Restore the backend dependencies:

```bash
dotnet restore
```

Configure any required development secrets or environment variables. Do not commit JWT signing keys, passwords, or other secrets to source control.

Apply the Entity Framework Core migrations if the database has not already been created:

```bash
dotnet ef database update
```

Start the backend:

```bash
dotnet run
```

The terminal will display the local HTTP and HTTPS addresses used by the API.

## Frontend Setup

Navigate to the Angular client directory:

```bash
cd word-game.client
```

Install the frontend dependencies:

```bash
npm install
```

Confirm that the Angular environment or API service points to the local ASP.NET Core API address.

Start the Angular development server:

```bash
npm start
```

The Angular application will normally be available at:

```text
http://localhost:4200
```

## Available Frontend Commands

Start the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Run the frontend tests:

```bash
npm test
```

Watch and rebuild during development:

```bash
npm run watch
```

## Database

The backend uses SQLite through Entity Framework Core.

The database stores application data such as:

- User accounts
- Authentication-related records
- Saved games
- Current game progress
- Completed game results
- Relationships between users and their games

SQLite keeps the project easy to run locally while still demonstrating relational data modeling and database persistence.

## Security Notes

- Game endpoints should require authentication.
- Users should only be able to access or modify games associated with their own account.
- Password management is handled through ASP.NET Core Identity.
- JWT signing keys and other secrets should be stored outside the repository.
- Data transfer objects should be used to avoid exposing internal database entities directly.
- API input should be validated before game or account data is changed.

## Skills Demonstrated

This project demonstrates experience with:

- Full-stack application development
- Angular component-based architecture
- TypeScript
- Angular routing and forms
- Angular Material interface components
- C# and ASP.NET Core
- REST-style API development
- User registration and login
- JWT authentication and authorization
- ASP.NET Core Identity
- Entity Framework Core
- SQLite database persistence
- Relational data modeling
- AutoMapper
- Data transfer objects
- Dependency injection
- Protected frontend routes
- Asynchronous client-server communication
- Persistent application state
- CRUD operations
- Environment and secret configuration

## Project Purpose

This project was created and maintained as a portfolio demonstration of full-stack development.

Rather than focusing only on the Hangman gameplay, the application demonstrates how a complete web system can manage authenticated users, protected resources, persistent records, resumable workflows, and communication between independently developed frontend and backend applications.

## Development Status

The core application supports authenticated access and persistent game management. Future improvements could include expanded testing, deployment configuration, accessibility improvements, enhanced game statistics, additional difficulty settings, and a more polished responsive interface.
