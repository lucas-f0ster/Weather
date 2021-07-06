import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../actions/index'

const List = (props) => {
  useEffect(() => {
    props.dispatch(fetchCities())
  }, [])

  return (
    <div className='list'>
      <h2>this should really be a list</h2>
      {props.cities?.map(city => {
        return <div className='nav-button' key={city.internalid}><h3 className='nav-button__text'>{city.name}</h3></div>
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
