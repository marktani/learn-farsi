import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { backgroundForType } from '../utils'

import Marker from './Marker'

class Legend extends React.Component {

  render () {
    if (this.props.data.loading) {
      return (<div></div>)
    }

    return (
    <ul class='list pl0 ml0 center mw5 ba b--light-silver br3'>
        {this.props.data.type.enumValues.map((type) => (
          <li class='ph3 pv2'>
            <div>{type.name}</div>
            <Marker
              color={backgroundForType(type.name)}
            />
          </li>
        ))}
    </ul>
    )
  }
}

const LegendQuery = gql`
query LegendQuery {
  type: __type(name: "VOCAB_TYPE") {
    enumValues {
      name
    }
  }
}`

export default graphql(LegendQuery)(Legend)