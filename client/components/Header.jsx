import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <div className='header'>
      <button className='hamburger-button' onClick={() => props.dispatch({ type: 'SET_NAV' })} />
    </div>
  )
}

export default connect()(Header)
