import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import WeatherWidget from './WeatherWidget'
import { getWeather } from '../apis/weather'

const Display = (props) => {
  const [weather, setWeather] = useState(null)
  const [position, setPosition] = useState(null)

  const getLocation = () => {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition((pos) => setPosition(pos), (err) => console.log(err))
      : console.log('Geolocation is not supported')
  }

  useEffect(() => {
    getLocation()
    // setWeather(getWeather(position?.coords.longitute, position?.coords.latitude))
  }, [])

  useEffect(() => {
    position && getWeather(position?.coords.longitude, position?.coords.latitude)
      .then(res => setWeather(res))
      .catch(err => console.log(err))
  }, [position])

  return (
    <div className='display'>
      {weather && <WeatherWidget weather={weather} />}
      {/* {props.fave.map(e => {
        return <WeatherWidget />
      })
      } */}
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    fave: globalState.fave
  }
}

export default connect(mapStateToProps)(Display)
