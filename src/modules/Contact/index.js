import {createAction} from 'redux-actions'
import axios from 'axios'

const CONTACT_SENDING = 'modules/CONTACT/SENDING'
const CONTACT_SENT = 'modules/CONTACT/SENT'
const CONTACT_ERROR = 'modules/CONTACT/ERROR'

const initialState = {
    sending: false,
    text: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_SENDING:
            return {
                ...state,
                sending: true
            }
        case CONTACT_SENT:
            return {
                ...state,
                sending: false,
                text: 'OK'
            }
        case CONTACT_ERROR:
            return {
                ...state,
                sending: false,
                text: action.payload.text
            }
        default:
            return state
    }
}

const server = 'http://arojunior.com'

export const sendFormAction = values =>
    axios.post(`${server}/home/contact_send`, values)

export const contactSending = createAction(CONTACT_SENDING, sendFormAction)
export const contactSent = createAction(CONTACT_SENT)
export const contactError = createAction(CONTACT_ERROR)
