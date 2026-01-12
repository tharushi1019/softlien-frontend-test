import { useState } from "react";

function ItemDetailModal({ item, onClose }) {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("medium");
  const [addons, setAddons] = useState([]);
  const availableAddons = ["Extra Cheese", "Extra Sauce", "Fries"];

  const toggleAddon = (addon) => {
  setAddons((prev) =>
    prev.includes(addon)
      ? prev.filter((a) => a !== addon)
      : [...prev, addon]
  );
};

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow z-10"
        >
          ✕
        </button>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Image */}
          <div className="h-56 md:h-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col justify-between">

            {/* Top Content */}
            <div className="space-y-4">

              {/* Title */}
              <div>
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-green-600 font-bold text-lg">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-3">
                {item.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {item.dietary.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1 text-xs bg-gray-100 rounded-full"
                  >
                    {d}
                  </span>
                ))}
                <span className="text-xs text-gray-500">
                  {item.spicyLevel > 0
                    ? "🌶️".repeat(item.spicyLevel)
                    : "Not spicy"}
                </span>
              </div>

              {/* Size */}
              <div>
                <p className="text-sm font-medium mb-1">Size</p>
                <div className="flex gap-3">
                  {["small", "medium", "large"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 py-1 rounded-full border text-sm transition
                        ${
                          size === s
                            ? "bg-green-600 text-white border-green-600"
                            : "border-gray-300 text-gray-600"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <p className="text-sm font-medium mb-1">Add-ons</p>
                <div className="flex flex-wrap gap-2">
                  {availableAddons.map((addon) => (
                    <button
                      key={addon}
                      onClick={() => toggleAddon(addon)}
                      className={`px-3 py-1 rounded-full text-sm border transition
                        ${
                          addons.includes(addon)
                            ? "bg-green-600 text-white border-green-600"
                            : "border-gray-300 text-gray-600 hover:border-green-600"
                        }`}
                    >
                      {addon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Qty</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 border rounded-full"
                  >
                    −
                  </button>
                  <span className="w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 border rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => alert("Added to cart")}
              className="mt-6 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition text-sm font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailModal;
