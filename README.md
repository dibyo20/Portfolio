# Dibyo Banerjee's Portfolio

An interactive, high-performance developer portfolio designed to showcase a modern, clean interface, robust full-stack projects, and programming milestones. 

The site is built with a strong emphasis on sleek typography, polished micro-interactions, fluid user experience (UX), and high-end visual aesthetics using **React 19**, **Vite**, **Vanilla CSS**, and **React Router DOM 7**.

---

## 🛠️ How It Is Built

* **Performance-First Design**: Engineered with optimized components that leverage React hooks (`useRef`, `useState`, `useEffect`) and browser animation APIs to minimize unnecessary re-renders.
* **Declarative Routing & Transitions**: Employs React Router DOM v7 to handle single-page navigation coupled with custom transition triggers.
* **Modular Architecture**: Uses a highly decoupled directory layout where components manage their own styling imports, promoting high reusability and scalability.
* **Aesthetic Control (Vanilla CSS)**: Styled entirely with custom CSS properties (variables), enabling fluid animations, gradients, and custom responsive layouts without the overhead of heavy utility frameworks.

---

## 🚀 Core Features

* **3D Glassmorphic Tilt & Glare**: Interactivity added to card components featuring an exact coordinate-tracking 3D tilting movement and a dynamic mouse-following glare reflection. Supports touch events for mobile displays.
* **Fluid Custom Cursor**: Smooth, linear-interpolated (lerp) cursor trailing dot that tracks cursor positioning at browser refresh rates, auto-disables on coarse-pointer (touch) devices, and honors `prefers-reduced-motion` settings.
* **Liquid Page Transition Overlay**: Dynamic slide-in sweep transition on route modifications, rendering a blurring mesh backdrop during active transitions.
* **Sliding Navigation capsule**: The active nav-link backdrop capsule slides dynamically, responding to mouse hover locations and centering exactly on the current page route.
* **Typing Animation Header**: A two-stage sequenced typing simulation built with interval timeouts on the main hero banner.
* **Project Gallery**: Highlights major full-stack developments and secondary utility tools with detailed previews.

---

## 💻 Tech Stack

* **Core Library**: React 19 (Component Architecture)
* **Build Tooling & Bundler**: Vite 7
* **Router**: React Router DOM 7
* **Styling & Layout**: Vanilla CSS (CSS Custom Variables, Flexbox, CSS Grid)
* **Icons & Assets**: FontAwesome, Lucide React

---

## 📂 Directory Structure

```text
Portfolio/
├── public/                 # Static public assets
├── src/
│   ├── Assests/            # Media assets, project mockups, and profile photos
│   ├── components/
│   │   ├── About/          # About section component for homepage
│   │   ├── CustomCursor/   # Custom cursor tracking & animation
│   │   ├── Footer/         # Interactive footer component
│   │   ├── Hero/           # Animated typing welcome header
│   │   ├── Navbar/         # Sliding menu navigation
│   │   ├── Projects/       # Showcase lists and cards
│   │   ├── Skills/         # Technical skill displays
│   │   └── PageTransition.jsx # Page sweep transition controller
│   ├── pages/
│   │   ├── HomePage.jsx    # Main portal view
│   │   ├── AboutPage.jsx   # Extended details, focus metrics, and skills breakdown
│   │   └── ProjectsPage.jsx # Portfolio listing of main and minor developments
│   ├── styles/             # Modular, comment-free CSS style sheets
│   ├── App.jsx             # Root router, background configuration, and layouts
│   └── main.jsx            # Entry point configuration
├── package.json            # Configuration and script definition
└── vite.config.js          # Vite compilation settings
```

---

## 🏗️ Highlighted Projects

### 1. Clicksy (Full-Stack Social Media Platform)
* **Stack**: React, Node.js, Express.js, MongoDB, ImageKit
* **Scope**: JWT authorization, user profiles, feed posting, private accounts.

### 2. Solvit Counselling (Full-Stack Counselling Platform)
* **Stack**: React, Node.js, Express, MongoDB, SCSS
* **Scope**: Secure cookie-based JWT authentication, counsellor discovery, specialization filtering, and appointment booking UI workflows.
