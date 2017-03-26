import React, { Component } from 'react'
import Footer from './pages/Footer'
import Header from './pages/Header'


import './App.css'


export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
