import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../actions/index'

import Header from './Header'
import Footer from './Footer'
import List from './List'
import Display from './Display'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchCities())
  }, [])

  return (
    <>
      <Header />
      <div className='app'>
        {<List classname={props.nav ? 'list-open' : 'list-closed'} />}
        <Display />
      </div>
      <Footer />
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits,
    nav: globalState.nav
  }
}

export default connect(mapStateToProps)(App)
