import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../actions/index'

const List = (props) => {
  const [showTowns, setShowTowns] = useState(false)

  useEffect(() => {
    props.dispatch(fetchCities())
  }, [])

  return (
    <div className='list'>
      <button className='nav-button'><h2 className='nav-button__text'>Home</h2></button>
      <button className='nav-button'
        onClick={() => setShowTowns(!showTowns)}><h2 className='nav-button__text'>Towns</h2></button>
      {!showTowns && <button
        className='nav-button'><h2 className='nav-button__text'>Favourites</h2></button>}
      {showTowns && props.cities?.map(city => {
        return <div
          className='nav-button'
          key={city.internalid}>
          <h2 className='nav-button__text'>
            {city.name}
          </h2>
        </div>
      })}
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    cities: globalState.cities
  }
}

export default connect(mapStateToProps)(List)
