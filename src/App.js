import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'


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
