import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

class City extends Component {
  state = {
    icons: [
      {
        title: "clear sky",
        imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
        id: "01d",
      },
      {
        title: "clear sky",
        imgUrl: "https://openweathermap.org/img/wn/01n@2x.png",
        id: "01n",
      },
      {
        title: "few clouds",
        imgUrl: "https://openweathermap.org/img/wn/02d@2x.png",
        id: "02d",
      },
      {
        title: "few clouds",
        imgUrl: "https://openweathermap.org/img/wn/02n@2x.png",
        id: "02n",
      },
      {
        title: "scattered clouds",
        imgUrl: "https://openweathermap.org/img/wn/03d@2x.png",
        id: "03d",
      },
      {
        title: "scattered clouds",
        imgUrl: "https://openweathermap.org/img/wn/03n@2x.png",
        id: "03n",
      },
      {
        title: "broken clouds",
        imgUrl: "https://openweathermap.org/img/wn/04d@2x.png",
        id: "04d",
      },
      {
        title: "broken clouds",
        imgUrl: "https://openweathermap.org/img/wn/04n@2x.png",
        id: "04n",
      },
      {
        title: "shower rain",
        imgUrl: "https://openweathermap.org/img/wn/09d@2x.png",
        id: "09d",
      },
      {
        title: "shower rain",
        imgUrl: "https://openweathermap.org/img/wn/09n@2x.png",
        id: "09n",
      },
      {
        title: "rain",
        imgUrl: "https://openweathermap.org/img/wn/10d@2x.png",
        id: "10d",
      },
      {
        title: "rain",
        imgUrl: "https://openweathermap.org/img/wn/10n@2x.png",
        id: "10n",
      },
      {
        title: "thunderstorm",
        imgUrl: "https://openweathermap.org/img/wn/11d@2x.png",
        id: "11d",
      },
      {
        title: "thunderstorm",
        imgUrl: "https://openweathermap.org/img/wn/11n@2x.png",
        id: "11n",
      },
      {
        title: "snow",
        imgUrl: "https://openweathermap.org/img/wn/13d@2x.png",
        id: "13d",
      },
      {
        title: "snow",
        imgUrl: "https://openweathermap.org/img/wn/13n@2x.png",
        id: "13n",
      },
      {
        title: "mist",
        imgUrl: "https://openweathermap.org/img/wn/50d@2x.png",
        id: "50d",
      },
      {
        title: "mist",
        imgUrl: "https://openweathermap.org/img/wn/50n@2x.png",
        id: "50n",
      },
    ],
  };

  render() {
    const {
      name,
      main: { temp, feels_like, humidity, temp_max, temp_min },
      sys: { country },
      wind: { speed },
      clouds,
      weather,
      loading,
      coord: { lon, lat },
    } = this.props;

    const currentCondition = JSON.stringify(
      weather[0].description.charAt(0).toUpperCase() +
        weather[0].description.slice(1)
    ).replace(/^"|"$/g, "");

    const currentIcon = weather[0].icon;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className='bg-white border border-gray-200 pb-4 mb-2'>
          <h1 className='text-3xl font-bold text-gray-700 mt-5 mb-8 pt-3'>
            {name}, {country}
          </h1>
          <div className='text-gray-800 mb-6 bg-gray-50 p-2'>
            <strong>Right now: {currentCondition}</strong>
          </div>
          <div className='flex items-center justify-center mb-6'>
            <div className='flex-1 text-right font-semibold text-gray-500 text-4xl'>
              {parseInt(temp)} °F
            </div>
            <div className='flex-1'>
              {this.state.icons
                .filter((icon) => icon.id === currentIcon)
                .map((icon) => (
                  <img src={icon.imgUrl} key={icon.id} alt={icon.title} />
                ))}
            </div>
          </div>

          <div className='flex mb-6'>
            <div className='flex-1 p-2 mr-3'>
              <strong>Feels like:</strong> {parseInt(feels_like)} °F
            </div>
            <div className='flex-1 p-2 font-bold'>
              <strong>High/Low:</strong> {parseInt(temp_max)}/
              {parseInt(temp_min)}
              °F
            </div>
          </div>

          <ul className='bg-gray-50 p-2 mb-4'>
            <li className='mb-2'>
              <strong>Clouds: </strong> {clouds.all} %
            </li>
            <li className='mb-2'>
              <strong>Wind: </strong> {speed} m/s
            </li>
            <li className='mb-2'>
              <strong>Humidity: </strong> {humidity} %
            </li>
          </ul>

          <div>
            <Link
              to={`/city/${lon}&${lat}`}
              className='bg-gray-600 text-white w-full p-2 mb-3'
            >
              Detailed Forecast
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default City;
