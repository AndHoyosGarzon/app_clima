import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

function Card({ city }) {
  const [clima, setClima] = useState([]);

  useEffect(() => {
    async function weather() {
      const url = `http://api.weatherapi.com/v1/current.json?key= e7b9ec1db68a40a0b5220315241508&q=${city}&aqi=yes`;
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

  return (
    <div className="d-flex justify-content-center">
      <div className="card bg-light" style={{ width: "500px", height: "auto" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <span className="fw-bolder h5">Ciudad:</span>
              <span className="text-white bg-dark p-1 border ms-1 rounded">
                {clima.location ? clima.location.name : "loading..."}
              </span>
            </div>
            <div>
              <span className="fw-bolder h5">
                <FaLocationDot color="darkred" />
              </span>
              <span className="text-white bg-dark p-1 border ms-1 rounded">
                {clima.location ? clima.location.country : "loading..."}
              </span>
            </div>
          </div>
          <p className="mt-3 ">
            Fecha y Hora Local:
            <span className="text-white bg-dark p-1 border ms-1 rounded">
              {clima.location ? clima.location.localtime : "loading..."}{" "}
            </span>
          </p>
          <p className="card-text ">
            Humedad:
            <span className="text-white bg-dark p-1 border ms-1 rounded">
              {clima.current ? clima.current.humidity : "loading..."}%
            </span>
          </p>
          <p className="card-text ">
            Temperatura:
            <span className="ms-1 bg-dark text-white rounded p-1">
              {clima.current ? clima.current.temp_c : "loading..."} c
            </span>
          </p>
          <p className="card-text">
            Velocidad del viento:
            <span className="ms-1 bg-dark text-white rounded p-1">
              {clima.current ? clima.current.gust_kph : "loading..."} Km/h
            </span>
          </p>
          <p className="card-text fw-bolder h4 ">
            Ahora:
            <span className="ms-3">
              <img
                className="bg-dark rounded pb-2"
                src={
                  clima.current ? clima.current.condition.icon : "loading..."
                }
                alt={
                  clima.current
                    ? clima.current.condition.text
                    : "cargando clima"
                }
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
