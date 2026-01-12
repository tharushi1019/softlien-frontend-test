import { useEffect, useState } from "react";

function Header({ searchQuery, onSearchChange }) {
  const [input, setInput] = useState(searchQuery || "");
  const [darkMode, setDarkMode] = useState(false);

  // Load theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      // Switch to LIGHT
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      // Switch to DARK
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    onSearchChange(e.target.value);
  };

  const clearSearch = () => {
    setInput("");
    onSearchChange("");
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/logo.png"
            alt="Delicious Bites"
            className="h-9 w-9 object-contain"
          />
          <span className="text-lg font-bold text-green-700 dark:text-gray-100">
            Delicious Bites
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 relative max-w-md">
          <input
            type="text"
            placeholder="Search menu items..."
            value={input}
            onChange={handleChange}
            className="
              w-full rounded-full py-2 px-4 pr-10
              bg-white text-gray-900 border border-gray-300
              dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-green-500
            "
          />

          {input && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              ✕
            </button>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="
            w-10 h-10 flex items-center justify-center
            rounded-full
            bg-gray-100 dark:bg-gray-800
            hover:scale-105
            transition
          "
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Cart */}
        <div className="relative">
          <span className="text-2xl">🛒</span>
          <span className="absolute -top-1 -right-2 bg-green-600 text-white text-xs rounded-full px-1.5">
            2
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
