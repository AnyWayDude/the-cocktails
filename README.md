# The Cocktails

A web app to explore cocktail recipes built with React, TypeScript, and Vite using Cocktails DB: https://www.thecocktaildb.com/.

## Installation

### Prerequisites

- **Node.js** `>=18.x`
- **npm**

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/the-cocktails.git
   cd the-cocktails

   ```

2. Runs the app in the development mode:

npm install

3. Start the development server:

npm run dev

Open http://localhost:5173/ to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

-- Deploying

To deploy to GitHub Pages:

npm run deploy

-- Environment Variables

Create a .env file in the root directory and add the following:

VITE_APP_NODE_ENV=development
VITE_GOOGLE_MAPS_API_KEY="your-google-maps-api-key-here"

Replace your-google-maps-api-key-here with your actual Google Maps API key.

-- Tech Stack
React with TypeScript
Vite
Redux for state management
Material UI for UI components
gh-pages for GitHub Pages deployment
