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
    <ul className='list pl0 ml0 center mw4'>
        {this.props.data.type.enumValues.map((type) => (
          <li
            className='flex items-center lh-copy ph0-l'
          >
            <div
              className='w2 h2'
            >
              <Marker
                color={backgroundForType(type.name)}
                label={type.name}
              />
            </div>
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