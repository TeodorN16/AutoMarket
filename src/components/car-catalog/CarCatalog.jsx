import CarCard from "../car-card/CarCard";
import { useState, useEffect } from "react";

export default function CarCatalog() {
  const [cars, setCars] = useState([]);

  console.log("CarCatalog rendered");

  useEffect(() => {
    fetch("https://jmthstiplswopqfsdbbw.supabase.co/rest/v1/cars", {
      headers: {
        
      },
    })
      .then((result) => result.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Error:", error));
  }, []);

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