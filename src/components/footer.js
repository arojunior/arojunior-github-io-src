import React from 'react';

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="list-inline">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="https://medium.com/@arojunior/">Articles</a>
                        </li>
                    </ul>
                    <p className="copyright text-muted small">Copyright &copy; Junior Oliveira . All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
