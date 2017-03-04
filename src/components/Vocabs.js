import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from 'react-loading-animation'

import VocabCard from './VocabCard'
import Legend from './Legend'

class Vocabs extends React.Component {

  static propTypes = {
    data: React.PropTypes.object.isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<div className='flex w-100 h-100 items-center justify-center pt7'>
        <Loading />
      </div>)
    }

    return (
      <div className={'w-100 flex justify-center pa6'}>
        <div className='w-100 flex flex-wrap' style={{maxWidth: 1150}}>
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
query {
  allVocabs {
    id
    farsi
    german
    phonetics
    type
  }
}`


export default graphql(allVocabsQuery)(Vocabs)