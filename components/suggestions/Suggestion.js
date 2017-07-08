import React from 'react'
export default class Suggestion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      farsi: '',
      english: '',
      description: '',
    }
  }


  _handleFarsiChange = (e) => {
    this.setState({
      farsi: e.value
    })
  }

  _handleEnglishChange = (e) => {
    this.setState({
      english: e.value
    })
  }

  _handleDescriptionChange = (e) => {
    this.setState({
      description: e.value
    })
  }

  render () {
    return (
      <div>
        <style jsx>{`
          input {
            font-size: 14px;
            border: 3px solid var(--dark-blue);
            border-radius :10px;
            -webkit-box-shadow:
              inset 0 0 8px  rgba(0,0,0,0.1),
                    0 0 16px rgba(0,0,0,0.1);
            -moz-box-shadow:
              inset 0 0 8px  rgba(0,0,0,0.1),
                    0 0 16px rgba(0,0,0,0.1);
            box-shadow:
              inset 0 0 8px  rgba(0,0,0,0.1),
                    0 0 16px rgba(0,0,0,0.1);
            padding: 15px;
            background: var(--p-green-0);
            margin: 0 0 10px 0;
          }

          textarea {
            overflow: hidden;
            padding: 10px;
            font-size: 14px;
            border: 3px solid var(--dark-blue);
            border-radius: 10px;
            width: 200px;
            background: var(--p-green-0);
            margin: 0 0 10px 0;
          }

          .content {
            text-decoration: none;
            padding-right: 10px;
            transition: transform .3s ease;
            width: 250px;
            margin: 20px;
          }

          .vocab-card {
            display: flex;
            flex-direction: column;
          }

          .farsi-input {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .input {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
          }

          .content {
            padding: 15px;
            border-radius: 2px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16),
                        0 3px 6px rgba(0,0,0,0.23);
            background: var(--p-green-0);
          }

          .content:hover {
            box-shadow: 0 3px 6px rgba(0,0,0,0.16),
                        0 3px 6px rgba(0,0,0,0.23),
                        0 12px 12px rgba(0,0,0,0.30);
          }
        `}</style>
        <div className='content'>
          <div className='vocab-card'>
            <div className='farsi-input'>
              <input
                className='title farsi'
                value={this.state.farsi}
                placeholder='فارسی'
                onChange={this._handleFarsiChange}
              />
              <h3 className='title farsi'>🇮🇷</h3>
            </div>
            <div className='input'>
              <input
                className='title'
                value={this.state.english}
                placeholder='English'
                onChange={this._handleEnglishChange}
              />
              <h3 className='title'>🇺🇸</h3>
            </div>
            <div className='input'>
              <textarea
                className='description-input'
                onChange={this._handleDescriptionChange}
                value={this.state.description}
                placeholder='Describe the new suggestion and mention suitable tags'
              />
              <h3 className='title'>🇺🇸</h3>
            </div>
            <div className='button'>
              Add
            </div>
          </div>
        </div>
      </div>
    )
  }
}