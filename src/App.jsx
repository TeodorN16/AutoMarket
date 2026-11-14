import { Route, Routes } from "react-router";
import Header from "./header/Header";
import CarCatalog from "./components/car-catalog/CarCatalog";
import Footer from "./footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./home/Home";
import CarCreate from "./components/car-create/CarCreate";
import CarDetails from "./components/car-details/CarDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<CarCatalog />} />
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/cars/create" element = {<CarCreate/>}/>
        <Route path="/cars/edit/:id" element = {<CarDetails/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
