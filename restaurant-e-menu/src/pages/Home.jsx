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

  const toggleDietary = (type) => {
    setDietaryFilters((prev) =>
      prev.includes(type)
        ? prev.filter((d) => d !== type)
        : [...prev, type]
    );
  };

  const filteredItems = useMemo(() => {
    let items = [...menuItems];

    // Category
    if (activeCategory) {
      items = items.filter(
        (item) => item.category === activeCategory
      );
    }

    // Search
    if (searchQuery.trim()) {
      items = items.filter((item) =>
        item.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    // Dietary
    if (dietaryFilters.length > 0) {
      items = items.filter((item) =>
        dietaryFilters.every((d) =>
          item.dietary.includes(d)
        )
      );
    }

    // Sorting
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

      <main className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto p-4">

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <Filters
            sortOption={sortOption}
            onSortChange={setSortOption}
            dietaryFilters={dietaryFilters}
            onDietaryChange={toggleDietary}
          />

          {!loading && !error && (
            <p className="mt-4 text-sm text-gray-500">
              {filteredItems.length} items found
            </p>
          )}

          {loading && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <MenuCardSkeleton key={i} />
              ))}
            </div>
          )}

          {!loading && error && (
            <p className="mt-10 text-center text-red-600">
              {error}
            </p>
          )}

          {!loading && !error && filteredItems.length === 0 && (
            <p className="mt-10 text-center text-gray-500">
              No results found
            </p>
          )}

          {!loading && !error && filteredItems.length > 0 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onSelect={setSelectedItem}
                />
              ))}
            </div>
          )}

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
