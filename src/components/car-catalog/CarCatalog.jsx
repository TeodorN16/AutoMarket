export default function CarCatalog() {
  return (
    // <!-- Filters -->
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-8 flex flex-col sm:flex-row gap-3">
      <input
        id="search"
        type="text"
        placeholder="Search by brand or model..."
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        id="fuel"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All fuel types</option>
        <option>Petrol</option>
        <option>Diesel</option>
        <option>Hybrid</option>
        <option>Electric</option>
      </select>
      <select
        id="sort"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Sort by</option>
        <option value="price-asc">Price: low to high</option>
        <option value="price-desc">Price: high to low</option>
        <option value="year-desc">Newest first</option>
      </select>
    </div>
  );
}
