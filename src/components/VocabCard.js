import React from 'react'
import { backgroundForType } from '../utils'

import Marker from './Marker'

export default class VocabCard extends React.Component {

  static propTypes = {
    vocab: React.PropTypes.object.isRequired,
  }

  render () {

    return (
      <div
        className={'bg-white ma3 box vocab flex flex-column no-underline br2'}
      >
        <Marker
          color={backgroundForType(this.props.vocab.type)}
          label={this.props.vocab.type}
        />
        <div
          className='flex justify-between black-80 fw3 description pa3'
          title={`${this.props.vocab.phonetics}`}
        >
          <div>
            🇮🇷
          </div>
          <div
            className='rtl'
          >
            {this.props.vocab.farsi}
          </div>
        </div>
        <div className='flex items-center black-80 fw3 description pa3'>
          <div>
            🇺🇸
          </div>
          <div>
            {this.props.vocab.english}
          </div>
        </div>
        <div className='flex items-center black-80 fw3 description pa3'>
          <div>
            🇩🇪
          </div>
          <div>
            {this.props.vocab.german}
          </div>
        </div>
      </div>
    )
  }
}
