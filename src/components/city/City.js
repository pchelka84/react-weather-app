import React from "react";

const City = ({
  name,
  main: { temp, feels_like, humidity, temp_max, temp_min },
  sys: { country },
  wind: { speed },
  weather,
}) => {
  const currentCondition = JSON.stringify(
    weather[0].description.charAt(0).toUpperCase() +
      weather[0].description.slice(1)
  ).replace(/^"|"$/g, "");

  return (
    <div className='mb-4'>
      <h1 className='text-3xl font-bold text-gray-700 mt-5 mb-5'>
        {name}, {country}
      </h1>
      <p className='font-semibold text-gray-500 mb-5 text-4xl'>
        {parseInt(temp)}°F
      </p>
      <ul>
        <li className='mb-4'>
          <span className='bg-gray-100 rounded-xl p-2 mr-3'>
            <strong>Feels like:</strong> {parseInt(feels_like)}°F
          </span>{" "}
          <span className='bg-gray-100 rounded-xl p-2'>
            <strong>{currentCondition}</strong>
          </span>
        </li>
        <li className='mb-2'>
          <strong>High/low:</strong> {parseInt(temp_max)}/{parseInt(temp_min)}°F
        </li>
        <li className='mb-2'>
          <strong>Wind: </strong> {speed}m/s
        </li>
        <li className='mb-2'>
          <strong>Humidity: </strong> {humidity}%
        </li>
      </ul>
    </div>
  );
};

export default City;
