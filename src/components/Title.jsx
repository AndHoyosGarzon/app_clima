import { TiWeatherPartlySunny } from "react-icons/ti";


function Title() {
  return (
    <div className="container text-center mt-5">
      <div className="text-dark d-flex justify-content-center ">
        <h1 className="display-3 fw-bold mb-3">
          <span className="text-secondary">Tú</span> Clima
        </h1>
        <span className="display-4 ms-3 text-primary">
          <TiWeatherPartlySunny />
        </span>
      </div>
      <p className="fw-bolder mt-1">
        Esta App permite al usuario ver las condiciones del tiempo, <br /> dependiendo
        la ciudad donde se encuentre.
      </p>
    </div>
  );
}

export default Title;
