import React, { Component } from 'react';
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Services />
                <Projects />
                <Contact />
            </div>
        )
    }
}