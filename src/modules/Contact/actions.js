import {createAction} from 'redux-actions'
import axios from 'axios'

const CONTACT_SENDING = 'modules/CONTACT/SENDING'
const CONTACT_SENT    = 'modules/CONTACT/SENT'
const CONTACT_ERROR   = 'modules/CONTACT/ERROR'

const server = 'http://arojunior.com'

const contactSending = createAction(CONTACT_SENDING)
const contactSent    = createAction(CONTACT_SENT)
const contactError   = createAction(CONTACT_ERROR)

export const sendFormAction = values => ({
    type : [
        contactSending,
        contactSent,
        contactError
    ],
    payload : {
        data : () => axios.post(`${server}/home/contact_send`, values)
    }
})