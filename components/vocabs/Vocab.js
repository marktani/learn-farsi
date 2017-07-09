import React from 'react'

import Label from './Label'
import VocabDetails from './VocabDetails'

export default class Vocab extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  _toggleActive = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {

    const vocab = this.props.vocab

    return (
      <div>
        <style jsx>{`
          .content {
            text-decoration: none;
            padding: 15px;
            transition: transform .3s ease;
            border-radius: 2px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16),
                        0 3px 6px rgba(0,0,0,0.23);
            background: var(--p-green-0);
            width: 200px;
            margin: 20px;
          }

          .content:hover {
            box-shadow: 0 3px 6px rgba(0,0,0,0.16),
                        0 3px 6px rgba(0,0,0,0.23),
                        0 12px 12px rgba(0,0,0,0.30);
          }

          .vocab-card {
            display: flex;
            flex-direction: column;
          }
        `}</style>
        <div
          className='content'
          onClick={this._toggleActive}
        >
          <div className='vocab-card'>
            <Label
              text={vocab.farsi}
              isEnglish={false}
            />
            <Label
              text={vocab.english}
              isEnglish={true}
            />
            {
              this.state.active ? <VocabDetails /> : '' //<div style={{background: 'var(--p-green-3)', textAlign: 'center'}}>Click to expand</div>
            }
          </div>
        </div>
      </div>
    )
  }
}