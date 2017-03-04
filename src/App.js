import React, { Component } from 'react'
import Vocabs from './components/Vocabs'
import Legend from './components/Legend'


import './App.css'


export default class App extends Component {

  render() {
    return (
      <div>
        <Vocabs />
        <Legend />
      </div>
    )
  }
}
