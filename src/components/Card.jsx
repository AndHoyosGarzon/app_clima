import { useEffect, useState } from "react";

function Card() {
  const [clima, setClima] = useState([]);

  useEffect(() => {
    async function weather() {
      const url = `http://api.weatherapi.com/v1/current.json?key= e7b9ec1db68a40a0b5220315241508&q=valparaiso&aqi=yes`;
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      };

      try {
        const res = await fetch(url, options);
        if (!res.ok)
          throw new Error({ message: `${res.statusText}, ${res.status}` });
        const result = await res.json();
        setClima(result);
      } catch (error) {
        console.log({ error });
      }
    }

    weather();
  }, []);

  console.log(clima.location, clima.current);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card bg-light" style={{ width: "600px", height: "auto" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <span className="fw-bolder h5">Ciudad:</span>
              <span className="text-white bg-dark p-1 border ms-1 rounded">
                {clima.location && clima.location.name}
              </span>
            </div>
            <div>
              <span className="fw-bolder h5">Pais:</span>
              <span className="text-white bg-dark p-1 border ms-1 rounded">
                {clima.location && clima.location.country}
              </span>
            </div>
          </div>
          <p className="">
            Cantidad de Nubes:
            <span className=""> {clima.current && clima.current.cloud} </span>
          </p>
          <p className="card-text">
            Humedad: {clima.current && clima.current.humidity}%
          </p>
          <p className="card-text">
            Temperatura: {clima.current && Math.floor(clima.current.temp_c)}{" "}
            celcius
          </p>
          <p className="card-text">
            Velocidad del viento: {clima.current && clima.current.vis_km} Km/h
          </p>
          <p className="card-text h3">
            Estado:
            <span>
              <img src={clima.current && clima.current.condition.icon} alt="" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
