import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <nav className='pa3 pa4-ns'>
          <div className='tc pb3'>
            <Link to='/vocabs' className='link dim gray f6 f5-ns dib mr3' href='#'>Vocabs</Link>
            <Link to='/phrases' className='link dim gray f6 f5-ns dib mr3' href='#'>Phrases</Link>
          </div>
        </nav>
      </div>
    )
  }
}
