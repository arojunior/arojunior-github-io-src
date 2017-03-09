import React, {Component} from 'react'
import Nav from './components/nav'
import Header from './components/header'
import Services from './components/services'
import Contact from './components/contact'
import Banner from './components/banner'
import Footer from './components/footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './landing-page.css'

class App extends Component {

    constructor() {
        super()

        this.state = {
            "data[contact][name]"    : null,
            "data[contact][email]"   : null,
            "data[contact][message]" : null
        }
    }

    handleFieldChange = (e) => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-default navbar-fixed-top topnav"
                    role="navigation">
                    <Nav/>
                </nav>
                <div className="intro-header">
                    <Header/>
                </div>
                <div className="content-section-a">
                    <Services/>
                </div>
                <div className="content-section-b">
                    <Contact
                        onSubmit={this.handleSubmit}
                        fieldChange={this.handleFieldChange}
                    />
                </div>
                <div className="banner">
                    <Banner/>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        )
    }

}

export default App
