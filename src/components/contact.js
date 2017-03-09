import React from 'react'

export default (props) => {
    const {handleSubmit, handleFieldChange} = props
    return(
        <div className="container" id="contact">
            <legend>Contact</legend>
            <form id="contact-form" method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        onChange={handleFieldChange}
                        placeholder="Email"
                        name="data[contact][email]" />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleFieldChange}
                        placeholder="Name"
                        name="data[contact][name]" />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Message"
                        onChange={handleFieldChange}
                        name="data[contact][message]">
                        </textarea>
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>

        </div>
    )
}
