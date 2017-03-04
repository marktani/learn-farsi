import React from 'react'
import { backgroundForType } from '../utils'

import Marker from './Marker'

export default class VocabItem extends React.Component {

  static propTypes = {
    vocab: React.PropTypes.object.isRequired,
  }

  render () {
    console.log(this.props.vocab.type, backgroundForType(this.props.vocab.type))

    return (
      <div
        className={'bg-white ma3 grow box vocab flex flex-column no-underline br2'}
      >
        <div className='flex items-center black-80 fw3 description'>
          {this.props.vocab.farsi}
        </div>
        <div className='flex items-center black-80 fw3 description'>
          {this.props.vocab.phonetics}
        </div>
        <div className='flex items-center black-80 fw3 description'>
          {this.props.vocab.german}
        </div>
        <Marker
          color={backgroundForType(this.props.vocab.type)}
        />
      </div>
    )
  }
}