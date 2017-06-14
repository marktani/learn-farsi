import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import TypeDropdown from './TypeDropdown'

class SuggestionCard extends React.Component {
  static propTypes = {
    vocab: React.PropTypes.object,
  }

  constructor(props) {
    super(props)

    const vocab = props.vocab || {
      english: '',
      farsi: '',
      german: '',
      phonectics: '',
      type: 'OTHER',
    }

    this.state = {
      vocab
    }
  }

  render () {

    return (
      <div
        className={'bg-white ma3 box vocab flex flex-column no-underline br2 center'}
      >
        <TypeDropdown
          type={this.state.vocab.type}
          dropdownUpdate={this._updateVocabType}
        />
        <div
          className='flex justify-between black-80 fw3 description pa3'
          title={`${this.state.vocab.phonetics}`}
        >
          <div>
            🇮🇷
          </div>
          <input
            style={{
              'borderSizing': 'border-box',
              'maxWidth': '70%'
            }}
            type='text'
            value={this.state.farsi}
            onChange={this._updateFarsi}
          />
        </div>
        <div className='flex items-center black-80 fw3 description pa3'>
          <div>
            🇺🇸
          </div>
          <input
            style={{
              'borderSizing': 'border-box',
              'maxWidth': '70%'
            }}
            type='text'
            value={this.state.english}
            onChange={this._updateEnglish}
          />
        </div>
        <div className='flex items-center black-80 fw3 description pa3'>
          <div>
            🇩🇪
          </div>
          <input
            style={{
              'borderSizing': 'border-box',
              'maxWidth': '70%'
            }}
            type='text'
            value={this.state.german}
            onChange={this._updateGerman}
          />
        </div>
        {this.state.vocab.farsi && (this.state.vocab.english || this.state.vocab.german) &&
          <div
            className='link dim silver tc v-mid pointer'
            onClick={this._createVocab}
          >Create Suggestion</div>
        }
      </div>
    )
  }

  _updateEnglish = (event) => {
    this.setState({
      vocab: {...this.state.vocab, english: event.target.value}
    })
  }

  _updateFarsi = (event) => {
    this.setState({
      vocab: {...this.state.vocab, farsi: event.target.value}
    })
  }

  _updateGerman = (event) => {
    this.setState({
      vocab: {...this.state.vocab, german: event.target.value}
    })
  }

  _updateVocabType = (type) => {
    this.setState({
      vocab: {...this.state.vocab, type}
    })
  }

  _createVocab = () => {
    this.props.mutate({variables: this.state.vocab}).then(
      window.location.reload()
    )

  }
}

const createVocabMutation = gql`
  mutation createVocab($english: String!, $farsi: String!, $german: String!, $type: VOCAB_TYPE!) {
    createVocab(
      english: $english
      farsi: $farsi
      german: $german
      type: $type
    ) {
      id
    }
  }
`

export default graphql(createVocabMutation)(SuggestionCard)