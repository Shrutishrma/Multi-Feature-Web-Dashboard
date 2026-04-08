# 🌐Multi-Feature Web Dashboard

It is a centralized web dashboard I built to combine everyday utilities into a single, seamless application. It features a modern sidebar navigation that allows users to instantly switch between checking live weather updates, exploring trending movies, and browsing a custom-built database of dog breeds.

### **What I Built**
I created an all-in-one website where you can:
* **Discover Movies:** Browse a grid of currently popular movies pulled directly from the TMDB database.
* **Check the Weather:** Search for any city to get real-time temperature, humidity, and wind speed data.
* **Explore Dog Breeds:** Look through a catalog of dog breeds—served by a custom backend API I wrote—and "like" your favorites with a smooth heart animation.
* **Seamless Navigation:** Switch between all these features instantly using a modern, persistent sidebar without the page ever reloading.

---

## 🛠️ Technical Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | **React** (with **Vite**) |
| **Routing** | **React Router DOM** (for the sidebar navigation) |
| **Styling** | **Tailwind CSS** (for the dark theme and grid layouts) |
| **Animations** | **Framer Motion** (for interactive UI elements like the "like" button) |
| **Backend API** | **Node.js** & **Express** (custom local server for the dog database) |
| **External APIs** | **TMDB API** (Movies) & **Weather API** |

---

## 📂 Project Structure

```text
Multi-Feature Web Dashboard/
├── backend/
│   └── index.js            # Custom Express server serving the Dog Breeds API
└── frontend/
    └── src/
        ├── App.jsx         # Main layout, Sidebar, and Routing logic
        ├── components/     # Reusable UI like the DogCard
        └── pages/          # Individual feature views (Movies, Weather, DogBreeds)
```

---

## 🚀 Key Technical Highlights

* **Third-Party API Integration:** Successfully connected the frontend to enterprise-level external APIs (TMDB) to handle dynamic, real-world data fetching.
* **Custom Backend Creation:** Built a custom Node.js/Express REST API from scratch to serve the dog breed data to the frontend, demonstrating full-stack data flow.
* **Interactive UI/UX:** Utilized Framer Motion to create micro-interactions (like the pulsing heart button on the Dog Cards), elevating the application from a simple data viewer to an engaging user experience.
