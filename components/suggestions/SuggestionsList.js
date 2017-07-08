import VocabSection from '../vocabs/VocabSection'
import SuggestionSection from './SuggestionSection'
import { graphql, gql } from 'react-apollo'

const SuggestionsList = ({ data, url }) => {

  if (data.loading) {
    return <div>Loading</div>
  }

  return (
    <div>
      <SuggestionSection />
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