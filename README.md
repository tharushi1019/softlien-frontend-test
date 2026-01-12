# 🍽️ Restaurant E-Menu Application

A responsive restaurant digital menu web application built as part of the **Frontend Intern Hiring Test** for Softlien (Pvt) Ltd.

## 🚀 Features

- Display 50 restaurant menu items from API
- Category filtering (Appetizers, Main Course, Desserts, Beverages)
- Real-time search by item name
- Sorting by price and name
- Dietary preference filters (vegetarian, vegan, gluten-free)
- Item detail modal with full information
- Skeleton loading states
- Error and empty states
- Responsive design (mobile, tablet, desktop)
- Dark mode toggle (Tailwind CSS v4)
- Clean, reusable component architecture

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS v4 (Vite plugin)
- **State Management:** React Hooks
- **API:** JSON Server (provided)
- **Icons:** Emoji-based UI
- **Deployment Ready**

## 📦 Project Setup

### 1. Clone Repository
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

API runs at:
`http://localhost:3001`

### 4. Start Frontend

```bash
npm run dev
```

Frontend runs at:
`http://localhost:5173`

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
 ├─ main.jsx
 └─ index.css
```

## 🧠 Design & Technical Decisions

* Used **frontend filtering** for faster UX and fewer API calls
* Implemented **skeleton loaders** to avoid layout shifts
* Used **Tailwind CSS v4 dark mode with custom variant**
* Modal-based item detail view for better user experience
* Mobile-first responsive layout

---

## ⚠️ Assumptions

* Cart functionality is not implemented
* “Add to Cart” actions are placeholders
* Authentication is not required

---

## 👤 Author

**Tharushi Nimnadi Karunarathna**
Frontend Intern Candidate