import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="bg-white rounded-lg border border-gray-200 px-6 py-12 text-center">
        <div className="text-6xl mb-4">🚗</div>
        <h1 className="text-4xl font-bold mb-3">Find your next car on AutoMarket</h1>
        <p className="text-gray-500 max-w-xl mx-auto mb-6">
          Browse cars from sellers across the country, or list your own car in a few minutes.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            to="/catalog"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Browse Catalog
          </Link>
          <Link
            to="/cars/create"
            className="border border-gray-300 px-5 py-2 rounded hover:bg-gray-50"
          >
            Sell a Car
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">How it works</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-semibold mb-1">Browse</h3>
            <p className="text-sm text-gray-500">
              Look through the catalog and find a car that fits your needs.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="text-3xl mb-2">📝</div>
            <h3 className="font-semibold mb-1">List</h3>
            <p className="text-sm text-gray-500">
              Create an account and post your car with photos and a price.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="text-3xl mb-2">🤝</div>
            <h3 className="font-semibold mb-1">Connect</h3>
            <p className="text-sm text-gray-500">
              Check the details and get in touch with the seller.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}