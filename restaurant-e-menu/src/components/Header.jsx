import { useEffect, useState } from "react";

function Header({ searchQuery, onSearchChange }) {
  const [input, setInput] = useState(searchQuery || "");
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Track scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
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
    <header 
      className={`
        sticky top-0 z-50 
        transition-all duration-300
        ${isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg' 
          : 'bg-white dark:bg-gray-900 shadow-sm'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4 md:gap-6">

          {/* Logo with gradient */}
          <div className="flex items-center gap-2 group cursor-pointer">
              <img 
                src="/logo.svg" 
                alt="Logo" 
                className="w-6 h-6 sm:w-12 sm:h-12 flex-shrink-0 object-contain"
              />
            <span className="
              hidden sm:block
              text-xl font-bold 
              bg-gradient-to-r from-green-600 to-emerald-600 
              dark:from-green-400 dark:to-emerald-400
              bg-clip-text text-transparent
              group-hover:from-green-500 group-hover:to-emerald-500
              transition-all duration-300
            ">
              Delicious Bites
            </span>
          </div>

          {/* Modern Search Bar with floating effect */}
          <div className="flex-1 relative max-w-md">
            <div className="relative group">
              {/* Search Icon */}
              <svg 
                className="
                  absolute left-4 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-gray-400 dark:text-gray-500
                  group-focus-within:text-green-500
                  transition-colors duration-200
                " 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>

              <input
                type="text"
                placeholder="Search delicious dishes..."
                value={input}
                onChange={handleChange}
                className="
                  w-full rounded-2xl py-3 pl-12 pr-12
                  bg-gray-50 dark:bg-gray-800/50
                  text-gray-900 dark:text-gray-100
                  border-2 border-transparent
                  focus:border-green-500 dark:focus:border-green-400
                  focus:bg-white dark:focus:bg-gray-800
                  focus:outline-none 
                  focus:shadow-lg focus:shadow-green-500/20
                  transition-all duration-300
                  placeholder:text-gray-400 dark:placeholder:text-gray-500
                "
              />

              {/* Clear Button */}
              {input && (
                <button
                  onClick={clearSearch}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2 
                    w-7 h-7 rounded-full
                    bg-gray-200 dark:bg-gray-700
                    hover:bg-gray-300 dark:hover:bg-gray-600
                    flex items-center justify-center
                    transition-all duration-200
                    hover:scale-110
                    group/clear
                  "
                >
                  <svg 
                    className="w-4 h-4 text-gray-600 dark:text-gray-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Dark Mode Toggle - Modern Switch */}
          <button
            onClick={toggleDarkMode}
            className="
              relative w-14 h-7 rounded-full
              bg-gray-200 dark:bg-gray-700
              transition-colors duration-300
              hover:bg-gray-300 dark:hover:bg-gray-600
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
              dark:focus:ring-offset-gray-900
            "
            title="Toggle dark mode"
          >
            <span 
              className={`
                absolute top-0.5 left-0.5
                w-6 h-6 rounded-full
                bg-white dark:bg-gray-900
                shadow-md
                flex items-center justify-center
                transition-transform duration-300
                ${darkMode ? 'translate-x-7' : 'translate-x-0'}
              `}
            >
              {darkMode ? (
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </span>
          </button>

          {/* Cart Icon - Modern with badge */}
          <button 
            className="
              relative p-2 rounded-xl
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-all duration-200
              hover:scale-105
              group
            "
          >
            <svg 
              className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <span className="
              absolute -top-1 -right-1 
              min-w-[20px] h-5 px-1.5
              bg-gradient-to-r from-green-500 to-emerald-500
              text-white text-xs font-bold
              rounded-full
              flex items-center justify-center
              shadow-lg shadow-green-500/40
              animate-pulse
            ">
              2
            </span>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;