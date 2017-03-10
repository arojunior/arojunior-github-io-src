import React from 'react'

export default() => {
    return (
        <div className="container" id="about">

            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message">
                        <h1>Junior Oliveira</h1>
                        <h3>IT Manager / Developer </h3>
                        <hr className="intro-divider"/>
                        <ul className="list-inline intro-social-buttons">
                            <li>
                                <a
                                    href="http://arojunior.com/resume"
                                    className="btn btn-default btn-lg">
                                    <i className="fa fa-newspaper-o fa-fw"></i>
                                    <span className="network-name">Resume</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://www.facebook.com/arojunior18"
                                    className="btn btn-default btn-lg">
                                    <i className="fa fa-facebook fa-fw"></i>
                                    <span className="network-name">Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/arojunior"
                                    className="btn btn-default btn-lg">
                                    <i className="fa fa-github fa-fw"></i>
                                    <span className="network-name">Github</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/arojunior"
                                    className="btn btn-default btn-lg">
                                    <i className="fa fa-linkedin fa-fw"></i>
                                    <span className="network-name">Linkedin</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
