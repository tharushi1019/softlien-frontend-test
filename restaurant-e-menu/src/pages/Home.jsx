import { useEffect, useState, useMemo } from "react";
import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import MenuCard from "../components/MenuCard";
import MenuCardSkeleton from "../components/MenuCardSkeleton";
import Filters from "../components/Filters";
import { fetchCategories, fetchMenuItems } from "../services/api";
import ItemDetailModal from "../components/ItemDetailModal";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  const [sortOption, setSortOption] = useState("");
  const [dietaryFilters, setDietaryFilters] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedItem, setSelectedItem] = useState(null);

  // Load initial data
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError("");

        const [categoriesData, menuData] = await Promise.all([
          fetchCategories(),
          fetchMenuItems(),
        ]);

        setCategories(categoriesData);
        setMenuItems(menuData);
      } catch {
        setError("Unable to load menu items.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Toggle dietary filters
  const toggleDietary = (type) => {
    setDietaryFilters((prev) =>
      prev.includes(type)
        ? prev.filter((d) => d !== type)
        : [...prev, type]
    );
  };

  // Filter + sort logic
  const filteredItems = useMemo(() => {
    let items = [...menuItems];

    if (activeCategory) {
      items = items.filter(
        (item) => item.category === activeCategory
      );
    }

    if (searchQuery.trim()) {
      items = items.filter((item) =>
        item.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    if (dietaryFilters.length > 0) {
      items = items.filter((item) =>
        dietaryFilters.every((d) =>
          item.dietary.includes(d)
        )
      );
    }

    if (sortOption === "price-asc") {
      items.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      items.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      items.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return items;
  }, [
    menuItems,
    activeCategory,
    searchQuery,
    dietaryFilters,
    sortOption,
  ]);

  return (
    <>
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Categories */}
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Filters */}
          <div className="
            mt-6
            p-4 sm:p-5
            rounded-2xl
            bg-white/70 dark:bg-gray-800/70
            backdrop-blur-xl
            shadow-sm
            border border-gray-200/50 dark:border-gray-700/50"
          >
            <Filters
              sortOption={sortOption}
              onSortChange={setSortOption}
              dietaryFilters={dietaryFilters}
              onDietaryChange={toggleDietary}
            />
          </div>

          {/* Result count */}
          {!loading && !error && (
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {filteredItems.length} items found
            </p>
          )}

          {/* Loading skeleton */}
          {loading && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <MenuCardSkeleton key={i} />
              ))}
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <p className="mt-10 text-center text-red-600">
              {error}
            </p>
          )}

          {/* Empty state */}
          {!loading && !error && filteredItems.length === 0 && (
            <p className="mt-10 text-center text-gray-500 dark:text-gray-400">
              No results found
            </p>
          )}

          {/* Menu grid with smooth animation */}
          {!loading && !error && filteredItems.length > 0 && (
            <div
              key={activeCategory + searchQuery + sortOption}
              className="
                mt-6
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                gap-6
                animate-fadeIn
              "
            >
              {filteredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onSelect={setSelectedItem}
                />
              ))}
            </div>
          )}

          {/* Item details */}
          {selectedItem && (
            <ItemDetailModal
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
