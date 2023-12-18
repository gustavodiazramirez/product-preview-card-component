import React from "react";
import ImagenPerfume from "./components/imagen-perfume";
import TitulosPerfume from "./components/titulos-perfume";
import PrecioPerfume from "./components/precio-perfume";
import CartButton from "./components/cart-button";
const App = () => {

  return (

    <div className="flex justify-center items-center h-screen bg-orange-100">
      <div className="mx-4 my-8 bg-white shadow-md rounded-md overflow-hidden max-w-md sm:max-w-lg">
        <div className="sm:flex">
          <div className="sm:w-72">
            <ImagenPerfume />
          </div>
          <div className="sm:w-80">
            <TitulosPerfume />
            <PrecioPerfume />
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default App;
