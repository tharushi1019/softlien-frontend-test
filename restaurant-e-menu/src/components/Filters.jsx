import { useState } from "react";

function Filters({
  sortOption,
  onSortChange,
  dietaryFilters,
  onDietaryChange,
}) {
  const dietaryOptions = ["vegetarian", "vegan", "gluten-free"];
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { value: "", label: "Default" },
    { value: "price-asc", label: "Price: Low → High" },
    { value: "price-desc", label: "Price: High → Low" },
    { value: "name-asc", label: "Name: A → Z" },
  ];

  const handleSortSelect = (value) => {
    onSortChange(value);
    setIsSortOpen(false);
  };

  return (
    <>
      <div
        className="
          flex flex-col gap-6
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* SORT — Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Sort by
          </label>
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="
              rounded-xl
              px-4 py-2.5
              text-sm
              bg-gray-50 dark:bg-gray-900
              text-gray-800 dark:text-gray-200
              border border-gray-300 dark:border-gray-700
              focus:outline-none
              focus:ring-2 focus:ring-green-500/40
              transition
            "
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* SORT — Mobile Button */}
        <button
          onClick={() => setIsSortOpen(true)}
          className="
            md:hidden
            w-full
            px-4 py-3
            rounded-xl
            border border-gray-300 dark:border-gray-700
            bg-white dark:bg-gray-900
            text-sm text-gray-700 dark:text-gray-300
            flex items-center justify-between
          "
        >
          Sort
          <span className="text-gray-400">⌄</span>
        </button>

        {/* Dietary Filters */}
        <div className="flex flex-wrap gap-3">
          {dietaryOptions.map((option) => (
            <label
              key={option}
              className={`
                cursor-pointer
                px-4 py-2.5
                rounded-full
                text-sm
                border
                transition-all
                ${
                  dietaryFilters.includes(option)
                    ? "bg-green-600 text-white border-green-600 shadow"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-green-500"
                }
              `}
            >
              <input
                type="checkbox"
                checked={dietaryFilters.includes(option)}
                onChange={() => onDietaryChange(option)}
                className="hidden"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* MOBILE SORT BOTTOM SHEET */}
      {isSortOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 "
            onClick={() => setIsSortOpen(false)}
          />

          {/* Sheet */}
          <div
            className="
              absolute bottom-0 left-0 right-0
              bg-white dark:bg-gray-900
              rounded-t-2xl
              p-6
              animate-slideUp
              dark:text-gray-300
            "
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Sort by</h3>
              <button
                onClick={() => setIsSortOpen(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSortSelect(opt.value)}
                  className={`
                    px-4 py-3 rounded-xl text-left text-sm
                    ${
                      sortOption === opt.value
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800"
                    }
                  `}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Filters;
