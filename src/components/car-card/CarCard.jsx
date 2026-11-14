
const badgeColors = {
  Petrol: "bg-orange-100 text-orange-700",
  Diesel: "bg-gray-200 text-gray-700",
  Hybrid: "bg-green-100 text-green-700",
  Electric: "bg-blue-100 text-blue-700",
};
export default function CarCard({ car }) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
      <div className="h-40 bg-gray-200 flex items-center justify-center text-5xl">
        🚗
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-lg font-semibold">
            Test brand Test model
          </h2>
          <span
            className={`text-xs font-medium px-2 py-1 rounded ${badgeColors[car.fuel]}`}
          >
            Test fuel
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          Test year • 1000km • Kazanlak
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            €5000
          </span>
          <a
            href="#"
            className="text-sm bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          >
            Details
          </a>
        </div>
      </div>
    </article>
  );
}
    
