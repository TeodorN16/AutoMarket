import { Link } from "react-router";

export default function CarDetails() {
  return (
    <section className="max-w-4xl mx-auto">
      <Link to="/cars" className="text-sm text-blue-600 hover:underline">
        ← Back to catalog
      </Link>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mt-4">
        {/* Image */}
        <img
          src="https://placehold.co/1200x600?text=Car+Image"
          alt="BMW 320d"
          className="w-full h-72 object-cover bg-gray-200"
        />

        <div className="p-6">
          {/* Title and price */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
            <div>
              <h1 className="text-3xl font-bold">BMW 320d</h1>
              <p className="text-gray-500">Kazanlak</p>
            </div>
            <span className="text-3xl font-bold text-blue-600">€24,500</span>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-100 rounded p-3">
              <p className="text-xs text-gray-500">Brand</p>
              <p className="font-semibold">BMW</p>
            </div>
            <div className="bg-gray-100 rounded p-3">
              <p className="text-xs text-gray-500">Model</p>
              <p className="font-semibold">320d</p>
            </div>
            <div className="bg-gray-100 rounded p-3">
              <p className="text-xs text-gray-500">Year</p>
              <p className="font-semibold">2019</p>
            </div>
            <div className="bg-gray-100 rounded p-3">
              <p className="text-xs text-gray-500">Mileage</p>
              <p className="font-semibold">98,000 km</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">
              Well maintained car with full service history. No accidents, two
              owners, new tires and a recent oil change.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Link
              to="/cars/1/edit"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
              Edit
            </Link>
            <button
              type="button"
              className="border border-red-300 text-red-600 px-5 py-2 rounded hover:bg-red-50"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}