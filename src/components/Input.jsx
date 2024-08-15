import { PiCityFill } from "react-icons/pi";
function Input() {
  return (
    <div className="text-center my-5">
      <div className="mb-3">
        <label className="fw-bolder h5" htmlFor="ciudad">
          Ingresa tu ciudad:
        </label>
        <div className="h2">
          <PiCityFill />
        </div>
      </div>
      <input
        className="form-control-lg text-center"
        type="text"
        id="ciudad"
        required
      />
    </div>
  );
}

export default Input;
