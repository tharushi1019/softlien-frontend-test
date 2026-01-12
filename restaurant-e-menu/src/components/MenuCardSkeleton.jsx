function MenuCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse">
      
      {/* Image skeleton */}
      <div className="h-44 bg-gray-200" />

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />

        <div className="flex gap-2 mt-2">
          <div className="h-5 w-16 bg-gray-200 rounded-full" />
          <div className="h-5 w-16 bg-gray-200 rounded-full" />
        </div>

        <div className="h-9 bg-gray-200 rounded-lg mt-4" />
      </div>
    </div>
  );
}

export default MenuCardSkeleton;
