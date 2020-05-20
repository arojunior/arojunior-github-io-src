import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Logo from '../assets/logo-junioroliveira.png';

export default () => {
    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/arojunior/my-cv/master/README.md`).then(({ data }) => {
            setMarkdown(data);
        })
    })

    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    {markdown && <ReactMarkdown source={markdown} />}
                </div>
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
        </section>
    )
}
