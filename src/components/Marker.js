import React from 'react'

export default class Marker extends React.Component {

  static propTypes = {
    color: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
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