import React from 'react'
import PropTypes from 'prop-types'

export default class Marker extends React.Component {

  static propTypes = {
    color: PropTypes.string.isRequired,
    label: PropTypes.string,
  }

  render () {


    return (
      <div
        className='white tc'
        style={{
          backgroundColor: `${this.props.color}`,
          width: '125px',
          height: '25px',
        }}
      >
        {this.props.label}
      </div>
    )
  }
}