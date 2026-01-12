function MenuCard({ item, onSelect }) {
  const {
    name,
    description,
    price,
    image,
    dietary,
    spicyLevel,
  } = item;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      
      {/* Image */}
      <div className="h-44 w-full overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        
        {/* Name + Price */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
            {name}
          </h3>
          <span className="text-green-600 dark:text-green-400 font-bold">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
          {description}
        </p>

        {/* Dietary badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {dietary?.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full
                bg-gray-100 text-gray-700
                dark:bg-gray-700 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Spicy Level */}
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {spicyLevel > 0 ? (
            <span>{"🌶️".repeat(spicyLevel)}</span>
          ) : (
            <span className="text-gray-400 dark:text-gray-500">
              Not spicy
            </span>
          )}
        </div>

        {/* Button */}
        <button
          onClick={() => onSelect(item)}
          className="
            mt-auto
            bg-green-600 hover:bg-green-700
            dark:bg-green-500 dark:hover:bg-green-600
            text-white
            py-2 rounded-lg
            transition text-sm
          "
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
