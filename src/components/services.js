import React from 'react'
import Logo from '../assets/logo-junioroliveira.png'

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Software Engineering</h2>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <br /><br />
                    <img
                        className="img-responsive"
                        alt="Junior Oliveira"
                        src={Logo}
                        width="300px" />
                </div>
            </div>
        </div>
    )
}
