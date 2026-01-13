# 🍽️ Restaurant E-Menu Application

A responsive restaurant digital menu web application built as part of the **Frontend Intern Hiring Test** for **Softlien (Pvt) Ltd**.

## 🚀 Features

- Display 50 restaurant menu items fetched from the provided API
- Category filtering (Appetizers, Main Course, Desserts, Beverages)
- Real-time search by item name
- Sorting by price (ascending / descending) and name
- Dietary preference filters (vegetarian, vegan, gluten-free)
- Item detail modal with full item information
- Item customization options (size, add-ons, quantity)
- Skeleton loading states for better perceived performance
- Error and empty states handling
- Fully responsive design (mobile, tablet, desktop)
- Dark mode toggle using Tailwind CSS v4
- Clean, reusable, and well-structured component architecture


## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS v4 (Vite plugin)
- **State Management:** React Hooks (`useState`, `useEffect`, `useMemo`)
- **API:** JSON Server (provided backend)
- **Icons:** Emoji-based UI elements
- **Deployment:** Ready for production build


## 📦 Project Setup

### 1. Clone the Repository
```bash
git clone <your-github-repo-url>
cd restaurant-e-menu
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Backend API

```bash
npm run api
```

API will run at:

```
http://localhost:3001
```

### 4. Start Frontend Application

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

## 📂 Folder Structure

```
src/
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ CategoryTabs.jsx
 │   ├─ MenuCard.jsx
 │   ├─ MenuCardSkeleton.jsx
 │   ├─ Filters.jsx
 │   ├─ ItemDetailModal.jsx
 │
 ├─ pages/
 │   └─ Home.jsx
 │
 ├─ services/
 │   └─ api.js
 │
 ├─ App.jsx
 ├─ App.css
 ├─ main.jsx
 └─ index.css
```

## 🧠 Design & Technical Decisions

* Implemented **frontend-based filtering, sorting, and searching** to provide instant user feedback and reduce unnecessary API calls
* Optimized performance using **memoized filtering logic (`useMemo`)** to handle multiple filters efficiently
* Added **skeleton loaders** to minimize layout shifts and improve perceived loading speed during data fetching
* Designed a **mobile-first responsive UI**, including a mobile-only bottom sheet for sorting options
* Used **Tailwind CSS v4 with a custom dark mode variant** for consistent theming across the application
* Implemented a **modal-based item detail view** to allow users to view item details without losing browsing context

## ⚠️ Assumptions

* Cart and checkout functionality are not implemented as per test instructions
* “Add to Cart” actions are non-functional placeholders (alert-based)
* User authentication is not required for this assignment

## 👤 Author

**Tharushi Nimnadi Karunarathna** - Frontend Intern Candidate