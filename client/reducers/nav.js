import { SET_NAV } from '../actions'
const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV:
      return !state
    default:
      return state
  }
}

export default reducer
