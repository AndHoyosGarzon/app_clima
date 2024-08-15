import { PiCityFill } from "react-icons/pi";
import Card from "./Card";
import { useState } from "react";
function Input() {
  const [location, setLocation] = useState("");

  function handleClick() {
    const city = document.querySelector("input");
    setLocation(city.value);
    city.value = "";
  }

  return (
    <div className="text-center my-3">
      <div className="mb-3">
        <label className="fw-bolder h5" htmlFor="ciudad">
          Ingresa tu ciudad:
        </label>
        <div className="h2">
          <PiCityFill />
        </div>
      </div>
      <input
        className="form-control-md text-center"
        type="text"
        id="ciudad"
        required
      />
      <div className="mt-3">
        <button
          onClick={handleClick}
          className="btn btn-dark btn-sm mb-5 text-white "
        >
          Enviar
        </button>
      </div>
      {location ? (
        <Card city={location} />
      ) : (
        <span className="mt-5 r p-2 h4">Ingresar ciudad</span>
      )}
    </div>
  );
}

export default Input;
