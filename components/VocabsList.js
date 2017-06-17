import VocabSection from './VocabSection'
import { graphql, gql } from 'react-apollo'

const VideosList = ({ data, url }) => {

  const a = url

  if (data.loading) {
    return <div>Loading</div>
  }

  console.log(data)

  return (
    <div className='videos-list'>
      <VocabSection
        key="All"
        vocabs={data.all.vocabs}
      />
    </div>
  )
}

const query = gql`
  {
    all: Tag(key: "all") {
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