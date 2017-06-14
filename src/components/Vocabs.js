import React from 'react'
import { graphql, gql } from 'react-apollo'
import Loading from 'react-loading-animation'

import VocabCard from './VocabCard'
import PropTypes from 'prop-types'

class Vocabs extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  _renderPrev = () => {
    return (
      <a
        className='link dim silver tc v-mid fw4 f1'
        onClick={this.props.previous}
      >
        {'<'}
      </a>
    )
  }

  _renderNext = () => {
    return (
      <a
        className='link dim silver tc v-mid fw4 f1'
        onClick={this.props.next}
      >
        {'>'}
      </a>
    )
  }

  render () {
    if (this.props.data.loading) {
      return (<div className='flex w-100 h-100 items-center justify-center pt7'>
        <Loading />
      </div>)
    }

    return (
      <div className={'flex pa6 justify-center items-center w-100'}>
        {this._renderPrev()}
        <div className='' style={{maxWidth: 1150}}>
          {this.props.data.allVocabs.map((vocab) => (
            <VocabCard
              key={vocab.id}
              vocab={vocab}
            />
          ))}
        </div>
        {this._renderNext()}
      </div>
    )
  }
}

const allVocabsQuery = gql`
query VocabPage($skip: Int!) {
  allVocabs(
    first: 1
    skip: $skip
    filter: {
      isApproved: true
    }
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
        skip: ownProps.page
      }
    }
  }
})(Vocabs)