import { useEffect, useState } from "react";

function Nimbus() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const geoRes = await fetch(
        "https://geocoding-api.open-meteo.com/v1/search?name=Berlin"
      );
      const fetchedGeoData = await geoRes.json();

      console.log("Fetched Geo Data:", fetchedGeoData);
      const result = fetchedGeoData.results[0]; // Get the first result
      const {
        name: cityName,
        latitude,
        longitude,
        timezone,
        country_code: countryCode,
      } = result;

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=${timezone}`
      );
      const fetchedWeatherData = await weatherRes.json();
      console.log("Fetched Weather Data:", fetchedWeatherData);
    }

    getData();
  }, []);

  return (
    <div>
      <h1>P</h1>
    </div>
  );
}

export default Nimbus;
