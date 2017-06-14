import React from 'react'
import { graphql, gql } from 'react-apollo'
import Loading from 'react-loading-animation'
import PropTypes from 'prop-types'

import VocabCard from './VocabCard'

class Vocabs extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<div className='flex w-100 h-100 items-center justify-center pt7'>
        <Loading />
      </div>)
    }

    return (
      <div className={'flex flex-column justify-center items-center w-100'}>
        <div className='flex justify-center flex-wrap'>
          {this.props.data.allVocabs.map((vocab) => (
            <VocabCard
              key={vocab.id}
              vocab={vocab}
            />
          ))}
        </div>
      </div>
    )
  }
}

const allVocabsQuery = gql`
query Gallery($filter: VocabFilter!) {
  allVocabs(
    first: 100
    filter: $filter
  ) {
    id
    farsi
    german
    phonetics
    english
    type
  }
}`

export default graphql(allVocabsQuery, {
  options: (ownProps) => {
    return {
      variables: {
        filter: ownProps.filter
      }
    }
  }
})(Vocabs)