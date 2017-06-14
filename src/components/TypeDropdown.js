import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import PropTypes from 'prop-types'

class TypeDropdown extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
    }
  }

  render() {
    if (this.props.data.loading) {
      return (<div></div>)
    }

    return (
      <div>
        <select value={this.state.type || this.props.data.type.enumValues[0]} onChange={this._handleChange}>
          {this.props.data.type.enumValues.map(v => (
            <option key={v.name}>{v.name}</option>
          ))}
        </select>
      </div>
    )
  }

  _handleChange = (event) => {
    this.setState({
      type: event.target.value,
    })
    this.props.dropdownUpdate(event.target.value)
  }
}

const TypeQuery = gql`
query TypeQuery {
  type: __type(name: "VOCAB_TYPE") {
    enumValues {
      name
    }
  }
}`

export default graphql(TypeQuery)(TypeDropdown)