# dfs-solver
DFS Solver is a client side lineup optimizer available to all players.

## Pre-reqs
The server uses Next.js which runs off of Node and utilizes NPM to install modules.

## How It Works
The solver works by collecting information from users, storing it in client side state, and then utilizing a Javascript LP Solve algorithm to find optimal lineups which fit the user and game constratins.

## Information provided by users
Users will need to provide the following information:
* A slate to create lineups for
* Projections
* Players to include in pool
* Stacks of players to generate around

## Supported games
All games are Draftkings Classic games
* NFL
* NBA
* PGA
* MMA
* NASCAR

## Getting Started

### Install modules
After cloning into the repo, run `npm install` to install from the project folder.

### Fix Lpsolve
The LP Solve module used in this project has a server side component which will throw errors when Next attempts to bundle it into the app.  Edit `node_modules/javascript-lp-solve/src/External/lpsolve/main.js` and comment out or delete lines 122-176 to prevent build issues.

This step has to be completed after any fresh install of modules if the `node_modules` folder is deleted.

### Build server
Run `npm run build` to build the app

### Start server
Run `npm run next` to start server

### Run app
Open a browser and navigate to http://localhost:3000/

## Notes about client state
* The app only supports one slate at a time
* The `Clear` button will attempt to reset client state
* If client state is in a bug state, users can use their browsers developer tools to clear application storage
