import React, { useState, useEffect } from 'react'

const DetailedWeather = ({ weather, location, shown }) => {
  const [selectedDay, setSelectedDay] = useState(null)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const handleClick = (index, date) => {
    setSelectedDay(index === 0 ? 'Today' : days[index])
  }

  return (
    <div className={`detailed${'__' + shown.toString()}`}>
      <h1>{location || 'Your Location'}</h1>
      <h2>Daily weather?</h2>
      <div className='detailed-daily'>
        {weather.daily.map((e, i) => {
          if (i < 5) {
            const date = new Date(e.dt * 1000)
            return (
              <div key={i} className='detailed-daily-info' onClick={() => handleClick(i, date)}>
                <h4>{i === 0 ? 'Today' : days[date.getDay()]}</h4>
                <img src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} />
                <h4>High: <span className='temp__high'>{e.temp.max} &deg;C</span></h4>
                <h4>Low: <span className='temp__low'>{e.temp.min} &deg;C</span></h4>
                <h4>{e.weather[0].description}</h4>
              </div>
            )
          }
        })
        }
      </div>
    </div>
  )
}

export default DetailedWeather
