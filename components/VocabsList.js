import VocabSection from './VocabSection'
import { graphql, gql } from 'react-apollo'

const VideosList = ({ data, url }) => {

  if (data.loading) {
    return <div>Loading</div>
  }

  return (
    <div className='videos-list'>
      <VocabSection
        tag='Interrogatives'
        vocabs={data.interrogatives.vocabs}
      />
      <VocabSection
        tag='Numbers'
        vocabs={data.numbers.vocabs}
      />
      <VocabSection
        tag='Pronouns'
        vocabs={data.pronouns.vocabs}
      />
    </div>
  )
}

const query = gql`
  {
    all: Tag(key: "all") {
      ... TagInfo
    }
    numbers: Tag(key: "numbers") {
      ... TagInfo
    }
    interrogatives: Tag(key: "interrogatives") {
      ... TagInfo
    }
    pronouns: Tag(key: "pronouns") {
      ... TagInfo
    }
  }
  
  fragment TagInfo on Tag {
    vocabs {
      id
      farsi
      english
      german
    }
  }
`

export default graphql(query)(VideosList)

//