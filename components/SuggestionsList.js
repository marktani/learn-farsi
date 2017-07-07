import VocabSection from './VocabSection'
import { graphql, gql } from 'react-apollo'

const SuggestionsList = ({ data, url }) => {

  if (data.loading) {
    return <div>Loading</div>
  }

  return (
    <div>
      <VocabSection
        tag='Suggestions'
        vocabs={data.suggestions}
      />
    </div>
  )
}

const query = gql`
  {
    suggestions: allVocabs(filter: {
      wordGroups_none: {
        id_contains: "c"
      }
    }) {
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

export default graphql(query)(SuggestionsList)