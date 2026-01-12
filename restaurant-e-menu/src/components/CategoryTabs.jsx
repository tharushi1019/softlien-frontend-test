function CategoryTabs({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {/* All category */}
      <button
        onClick={() => onCategoryChange("")}
        className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition
          ${
            activeCategory === ""
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition
            ${
              activeCategory === category.id
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {category.icon} {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
