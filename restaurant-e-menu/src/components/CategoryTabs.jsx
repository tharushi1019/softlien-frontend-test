function CategoryTabs({ categories, activeCategory, onCategoryChange }) {
  return (
    <div
      className="
        mt-6
        flex items-center gap-3
        overflow-x-auto
        pb-4
        scrollbar-hide
      "
    >
      {/* All category */}
      <button
        onClick={() => onCategoryChange("")}
        className={`
          flex items-center gap-2
          px-5 py-2.5
          rounded-full
          whitespace-nowrap
          text-sm font-medium
          transition-all duration-300
          ${
            activeCategory === ""
              ? `
                bg-green-600 text-white
                shadow-lg shadow-green-600/30
                scale-[1.02]
              `
              : `
                bg-white/70 dark:bg-gray-800/70
                text-gray-700 dark:text-gray-200
                border border-gray-200 dark:border-gray-700
                hover:bg-white dark:hover:bg-gray-800
                hover:shadow-md
                hover:-translate-y-0.5
              `
          }
        `}
      >
        🌐 <span>All</span>
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            flex items-center gap-2
            px-5 py-2.5
            rounded-full
            whitespace-nowrap
            text-sm font-medium
            transition-all duration-300
            ${
              activeCategory === category.id
                ? `
                  bg-green-600 text-white
                  shadow-lg shadow-green-600/30
                  scale-[1.02]
                `
                : `
                  bg-white/70 dark:bg-gray-800/70
                  text-gray-700 dark:text-gray-200
                  border border-gray-200 dark:border-gray-700
                  hover:bg-white dark:hover:bg-gray-800
                  hover:shadow-md
                  hover:-translate-y-0.5
                `
            }
          `}
        >
          <span className="text-base">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
