import { Route, Routes } from "react-router";
import Header from "./header/Header";
import CarCatalog from "./components/car-catalog/CarCatalog";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CarCatalog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
