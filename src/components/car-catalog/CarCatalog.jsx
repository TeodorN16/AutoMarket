import CarCard from "../car-card/CarCard";

const cars = [
  { id: 1, brand: "BMW", model: "320d", year: 2019, price: 24500, mileage: 98000, fuel: "Diesel", city: "Sofia" },
  { id: 2, brand: "Audi", model: "A4 Avant", year: 2020, price: 28900, mileage: 74000, fuel: "Petrol", city: "Plovdiv" },
  { id: 3, brand: "Toyota", model: "Corolla", year: 2021, price: 21900, mileage: 45000, fuel: "Hybrid", city: "Varna" },
  { id: 4, brand: "Volkswagen", model: "Golf 7", year: 2017, price: 13900, mileage: 142000, fuel: "Diesel", city: "Burgas" },
  { id: 5, brand: "Tesla", model: "Model 3", year: 2022, price: 38500, mileage: 31000, fuel: "Electric", city: "Sofia" },
  { id: 6, brand: "Mercedes-Benz", model: "C 220", year: 2018, price: 26700, mileage: 112000, fuel: "Diesel", city: "Ruse" },
];

export default function CarCatalog() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-1">Cars Catalog</h1>
      <p className="text-gray-500 mb-6">Browse all cars available on AutoMarket.</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}