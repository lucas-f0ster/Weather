import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import List from './List'
import Display from './Display'

function App (props) {
  return (
    <>
      <Header />
      <div className='app'>
        {props.nav && <List />}
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
