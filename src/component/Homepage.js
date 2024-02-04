// src/components/Homepage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Homepage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    console.log('API URL:', process.env.REACT_APP_API_URL);
    console.log('API Key:', process.env.REACT_APP_API_KEY);
  
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/weather?q=City&appid=${process.env.REACT_APP_API_KEY}`);
        setWeather(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    fetchWeather();

  }, []);
  
  useEffect(() => {
    console.log('Weather Data:', weather); // Log weather data when weather state changes
  }, [weather]);

  return (
    <div>
      <h1>Weather Information</h1>
      {weather && (
        <>
        <div>
          <p>Temperature: {weather.main.temp}</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
        <div className="des-wind"> 
        {/* <p>{weather.data.weather[0].description.toUpperCase()}</p>  */}
        <p>Wind Speed: {weather.wind.speed}m/s</p> 
      </div> </>
      )}
    </div>
  );
};

export default Homepage;
