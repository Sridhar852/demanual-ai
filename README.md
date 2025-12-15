# Demanual AI - Workflow Builder

A frontend project featuring a login/sign-up page and a 2D workflow canvas with draggable and connectable nodes.

## Features

- Firebase Authentication
- Interactive 2D workflow canvas with draggable nodes
- Node connections via input/output ports

## Setup

### Firebase Configuration

1. Create a project in [Firebase Console](https://console.firebase.google.com/)
2. Enable Email/Password authentication
3. Copy your Firebase config values
4. Create `.env` file:
   ```bash
   cp .env.example .env
   ```
5. Add your Firebase configuration to `.env`

### Installation

```bash
npm install
npm run dev
```

## Deployment

1. Push to GitHub
2. Connect to Vercel
3. Add Firebase environment variables in Vercel settings
4. Deploy

## Tech Stack

React 19.2.1, TypeScript, Vite, Tailwind CSS, React Router, ReactFlow, Firebase
