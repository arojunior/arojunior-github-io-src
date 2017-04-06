import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {sendFormAction} from './modules/Contact/actions'

import Nav from './components/nav'
import Header from './components/header'
import Services from './components/services'
import Contact from './components/contact'
import Banner from './components/banner'
import Footer from './components/footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './landing-page.css'

class App extends Component {

    handleSubmit = (values, dispatch) => {
        dispatch(sendFormAction(values))
        dispatch(reset('contactForm'))
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
                    <Contact onSubmit={this.handleSubmit} />
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

const mapStateToProps = state => state.Contact

export default connect(mapStateToProps)(App)
