import React, { Component } from 'react'
import Gallery from '../components/Gallery'

export default class Interrogatives extends Component {
  render() {
    return (
      <div>
        <Gallery
          filter={{
            isInterrogative: true,
            isApproved: true,
          }}
        />
      </div>
    )
  }
}