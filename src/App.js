import React, { Component } from 'react'
import Pager from './components/Pager'
import Vocabs from './components/Vocabs'
import Legend from './components/Legend'
import Footer from './components/Footer'


import './App.css'


export default class App extends Component {

  render() {
    return (
      <div>
        <Pager>
          <Vocabs />
        </Pager>
        {
          // <Legend />
        }
        <Footer />
      </div>
    )
  }
}
