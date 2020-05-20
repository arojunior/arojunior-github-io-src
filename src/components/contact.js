import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = props => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <div className="container" id="contact">
            <legend>Contact</legend>
            <form id="contact-form" method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <Field
                        type="email"
                        className="form-control"
                        component="input"
                        placeholder="Email"
                        name="email" />
                </div>
                <div className="form-group">
                    <Field
                        type="text"
                        className="form-control"
                        component="input"
                        placeholder="Name"
                        name="name" />
                </div>
                <div className="form-group">
                    <Field
                        className="form-control"
                        placeholder="Message"
                        component="textarea"
                        name="message"
                    />
                </div>
                <button
                    type="submit"
                    disabled={pristine || submitting}
                    className="btn btn-info">Submit
                </button>
            </form>

        </div>
    )
}

export default reduxForm({
    form: 'contactForm'
})(Form)
