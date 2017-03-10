import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reset} from 'redux-form'

import {sendFormAction,contactSent,contactError} from './modules/Contact'

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

        sendFormAction(values)
        .then(res =>  {
            dispatch(reset('contactForm'))
            return contactSent()
        })
        .catch(err => contactError({text : err}))

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

const mapDispatchToProps = dispatch =>
    bindActionCreators({sendFormAction}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
