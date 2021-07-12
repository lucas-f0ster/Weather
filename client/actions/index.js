import { getCities } from '../apis/cities'

export const SET_CITIES = 'SET_CITIES'
export const SET_NAV = 'SET_NAV'

export function setCities (cities) {
  return {
    type: SET_CITIES,
    cities
  }
}

export function fetchCities () {
  return dispatch => {
    return getCities()
      .then(cities => {
        dispatch(setCities(cities))
        return null
      })
  }
}

export const openNav = () => {
  return {
    type: SET_NAV,
    open: true
  }
}
