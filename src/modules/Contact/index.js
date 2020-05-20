import {handleActions} from 'redux-actions'

import {CONTACT_SENDING, CONTACT_SENT, CONTACT_ERROR} from './actions'

const initialState = {
    sending: false,
    text: null
}

const reducer = handleActions({
  [CONTACT_SENDING]: (state) => ({
      ...state,
      sending: true
  }),

  [CONTACT_SENT]: (state) => ({
      ...state,
      sending: false,
      text: 'OK'
  }),

  [CONTACT_ERROR]: (state, action) => ({
      ...state,
      sending: false,
      text: action.payload.data
  })
}, initialState)

export default reducer
