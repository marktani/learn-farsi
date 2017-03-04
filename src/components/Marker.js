import React from 'react'

export default class Marker extends React.Component {

  static propTypes = {
    color: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
  }

  render () {


    return (
      <div
        className='box-marker'
        style={{
          backgroundColor: `${this.props.color}`,
        }}
      >
        {this.props.label}
      </div>
    )
  }
}