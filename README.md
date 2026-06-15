# PopX App

A multi-screen React web application replicating the PopX UI design, built with React + Vite + Tailwind CSS.

## Screens
- **Welcome Screen** — Landing page with Create Account and Login options
- **Sign In Screen** — Email & password login form
- **Create Account Screen** — Registration form with agency radio button
- **Account Settings Screen** — User profile display

## Tech Stack
- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS v3
- 📦 JavaScript (JSX)

## Getting Started

```bash
# Clone the repo
git clone https://github.com/ashish28-art/popx-app.git
cd popx-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

## Project Structure

```
popx-app/
├── src/
│   ├── pages/
│   │   ├── WelcomeScreen.jsx
│   │   ├── SigninScreen.jsx
│   │   ├── CreateAccountScreen.jsx
│   │   └── AccountSettingsScreen.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```
