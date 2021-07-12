import React, { useState, useEffect } from 'react'

const DetailedWeather = ({ weather, location }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  console.log(weather)

  return (
    <>
      <h1>{location}</h1>
      <div className='detailed-daily'>
        <h2>Daily weather?</h2>
        {weather.daily.map((e, i) => {
          if (i < 5) {
            const date = new Date(e.dt * 1000)
            return (
              <div key={i} className='detailed-daily-info'>
                <h4>{days[date.getDay()]}</h4>
              </div>
            )
          }
        })
        }
      </div>
    </>
  )
}

export default DetailedWeather
