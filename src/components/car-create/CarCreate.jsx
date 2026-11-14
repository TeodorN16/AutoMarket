export default function CarCreate() {
  return (
    <section className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 p-6">
      <h1 className="text-2xl font-bold mb-1">Sell a Car</h1>
      <p className="text-gray-500 mb-6">Fill in the details to list your car.</p>

      <form className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="brand" className="block text-sm font-medium mb-1">
              Brand
            </label>
            <input
              id="brand"
              name="brand"
              type="text"
              placeholder="e.g. BMW"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="model" className="block text-sm font-medium mb-1">
              Model
            </label>
            <input
              id="model"
              name="model"
              type="text"
              placeholder="e.g. 320d"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium mb-1">
              Year
            </label>
            <input
              id="year"
              name="year"
              type="number"
              placeholder="e.g. 2019"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">
              Price (€)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              placeholder="e.g. 24500"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="milage" className="block text-sm font-medium mb-1">
              Mileage (km)
            </label>
            <input
              id="milage"
              name="milage"
              type="number"
              placeholder="e.g. 98000"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="e.g. Sofia"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium mb-1">
            Image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            placeholder="https://..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="desc" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            rows="5"
            placeholder="Tell buyers more about the car..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create Listing
        </button>
      </form>
    </section>
  );
}