import React, { useState, useEffect } from 'react'
import { getWeather } from '../apis/weather'
import { getCityById } from '../apis/cities'
import DetailedWeather from './DetailedWeather'

const WeatherWidget = ({ weather, location }) => {
  const [widgetExpanded, setWidgetExpanded] = useState(false)
  const [widgetLocation, setwidgetLocation] = useState(null)
  const [widgetWeather, setWidgetWeather] = useState({})

  const toggleWidget = () => {
    setWidgetExpanded(!widgetExpanded)
  }

  useEffect(() => {
    location !== 'current'
      ? getCityById(location)
        .then(res => {
          setwidgetLocation(res.name)
          getWidgetWeather(res.long, res.lat)
          return null
        })
        .catch(err => console.log(err))
      : setWidgetWeather(weather)
  }, [])

  const getWidgetWeather = (long, lat) => {
    getWeather(long, lat)
      .then((res) => setWidgetWeather(res))
      .catch(err => console.log(err))
  }

  return (
    <>
      <div onClick={() => toggleWidget()} className={widgetExpanded ? 'weather-widget weather-widget__large' : 'weather-widget'}>
        {widgetWeather.current && <>
          {!widgetExpanded
            ? <>
              <h2>{widgetLocation || 'Your Location' }</h2>
              <h3>{widgetWeather.current.temp}℃</h3>
              <img src={`http://openweathermap.org/img/wn/${widgetWeather.current.weather[0].icon}@2x.png`} />
              <h3>Currently {widgetWeather.current.weather[0].description} with {widgetWeather.current.humidity}% humidity</h3>
              <h3>Feels like: {widgetWeather.current.feels_like}℃ </h3>
            </>
            : <DetailedWeather weather={widgetWeather} location={widgetLocation} />}
        </>}
      </div>
      {widgetExpanded && <div className='weather-widget weather-widget__placeholder'></div>}
    </>
  )
}

export default WeatherWidget
