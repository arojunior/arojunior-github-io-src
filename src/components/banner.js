import React from 'react'

export default() => {
    return(
        <div className="container">

            <div className="row">
                <div className="col-lg-6">
                    <h2>Connect to Junior Oliveira:</h2>
                </div>
                <div className="col-lg-6">
                    <ul className="list-inline banner-social-buttons">
                        <li>
                            <a
                                href="http://www.facebook.com/arojunior18"
                                className="btn btn-default btn-md">
                                <i className="fa fa-facebook fa-fw"></i>
                                <span className="network-name">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/arojunior"
                                className="btn btn-default btn-md">
                                <i className="fa fa-github fa-fw"></i>
                                <span className="network-name">Github</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/arojunior"
                                className="btn btn-default btn-md">
                                <i className="fa fa-linkedin fa-fw"></i>
                                <span className="network-name">LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
