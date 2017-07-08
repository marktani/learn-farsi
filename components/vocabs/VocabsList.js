import VocabSection from './VocabSection'
import { graphql, gql } from 'react-apollo'

const VocabsList = ({ data, url }) => {

  if (data.loading) {
    return <div>Loading</div>
  }

  return (
    <div>
      {
        /*
         <VocabSection
         tag='Explanation'
         vocabs={[data.explanation]}
         />
         */
      }
      <VocabSection
        tag='Nouns'
        vocabs={data.nouns.vocabs}
      />
      <VocabSection
        tag='Numbers'
        vocabs={data.numbers.vocabs}
      />
      <VocabSection
        tag='All'
        vocabs={data.all.vocabs}
      />
    </div>
  )
}

const query = gql`
  {
    explanation: allVocabs(filter: {
      type: EXPLANATION
    }) {
      ... VocabInfo
    }
    all: Tag(key: "all") {
      ... TagInfo
    }
    numbers: Tag(key: "numbers") {
      ... TagInfo
    }
    interrogatives: Tag(key: "interrogatives") {
      ... TagInfo
    }
    nouns: Tag(key: "nouns") {
      ... TagInfo
    }
  }
  
  fragment TagInfo on Tag {
    vocabs {
      ... VocabInfo
    }
  }
  
  fragment VocabInfo on Vocab {
    id
    farsi
    english
    german
  }
`

export default graphql(query)(VocabsList)