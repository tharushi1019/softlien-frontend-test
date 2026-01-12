function CategoryTabs({ categories, activeCategory, onCategoryChange }) {
  return (
    <div
      className="
        mt-4
        flex items-center gap-3
        overflow-x-auto
        pb-3
        scrollbar-hide
      "
    >
      {/* All category */}
      <button
        onClick={() => onCategoryChange("")}
        className={`flex items-center gap-1 px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300
          ${
            activeCategory === ""
              ? "bg-green-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-0.5 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          }`}
      >
        🌐 All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300
            ${
              activeCategory === category.id
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-0.5 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            }`}
        >
          <span className="text-base">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
