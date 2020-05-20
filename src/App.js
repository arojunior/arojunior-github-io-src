import React from 'react'
import Nav from './components/nav'
import Header from './components/header'
import About from './components/about';
import Banner from './components/banner'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/landing-page.css'

const App = () => {
    return (
        <div>
            <nav
                className="navbar navbar-default navbar-fixed-top topnav"
                role="navigation">
                <Nav />
            </nav>
            <div className="intro-header">
                <Header />
            </div>
            <div className="content-section-a">
                <About />
            </div>
            <div className="banner">
                <Banner />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App;
