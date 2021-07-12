import { SET_CITIES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return action.cities
    default:
      return state
  }
}

export default reducer
