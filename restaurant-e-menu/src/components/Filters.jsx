function Filters({
  sortOption,
  onSortChange,
  dietaryFilters,
  onDietaryChange,
}) {
  const dietaryOptions = [
    "vegetarian",
    "vegan",
    "gluten-free",
  ];

  return (
    <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      
      {/* Sort */}
      <div>
        <label className="text-sm text-gray-600 mr-2">
          Sort by:
        </label>
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="name-asc">Name: A → Z</option>
        </select>
      </div>

      {/* Dietary Filters */}
      <div className="flex flex-wrap gap-4">
        {dietaryOptions.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              checked={dietaryFilters.includes(option)}
              onChange={() => onDietaryChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filters;
