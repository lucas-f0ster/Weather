import React, { useState, useEffect } from 'react'

const WeatherWidget = ({ weather }) => {
  return (
    <div className='weather-widget'>
      <h2 className='weather-widget__text'>Your Location</h2>
      <h3>{weather.current.temp}℃</h3>
      <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} />
    </div>
  )
}

export default WeatherWidget
