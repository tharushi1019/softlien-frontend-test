function ItemDetailModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="bg-white rounded-xl max-w-lg w-full mx-4 overflow-hidden">
        
        {/* Image */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="h-60 w-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 shadow"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold">
              {item.name}
            </h2>
            <span className="text-green-600 font-bold">
              ${item.price.toFixed(2)}
            </span>
          </div>

          <p className="text-gray-600 text-sm">
            {item.description}
          </p>

          {/* Dietary */}
          <div className="flex gap-2 flex-wrap">
            {item.dietary.map((d) => (
              <span
                key={d}
                className="px-2 py-1 text-xs bg-gray-100 rounded-full"
              >
                {d}
              </span>
            ))}
          </div>

          {/* Spicy */}
          <div className="text-sm">
            {item.spicyLevel > 0
              ? "🌶️".repeat(item.spicyLevel)
              : "Not spicy"}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm font-medium">
              Quantity:
            </span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border rounded">−</button>
              <span>1</span>
              <button className="px-3 py-1 border rounded">+</button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={() => alert("Added to cart")}
            className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailModal;
