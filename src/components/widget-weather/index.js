import React, { useEffect, useState } from "react";
import axios from 'axios';
import './style.css';
// https://neumorphism.io/#212130

function WidgetWeather (props) {
 const [isLoad, setIsLoad] = useState(true);
 const [weatherData, setWeatherData] = useState();
 useEffect(() => {
  setIsLoad(true);
  // https://openweathermap.org/current#current_JSON
  axios.get(
   `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&apiKey=6490ea3ba3c851128f51015075087ee2`
  ).then((response) => {
   console.log('response:', response.data);
   setWeatherData(response.data);
   setIsLoad(false);
  });
 }, [props.city]);

 return (
  <div className="widget-weather">
   {
    isLoad
     ? (<div className="widget-weather-load-bar"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>)
     : (<div><div>{props.city}</div>
      <div className="widget-weather-coord">
       <div>Longitude: {weatherData.coord.lon}</div>
       <div>Latitude: {weatherData.coord.lat}</div>
      </div></div>)
   }
  </div>
 );
}

export default WidgetWeather;