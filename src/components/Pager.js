import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from 'react-loading-animation'

class Pager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
  }

  render () {
    if (this.props.data.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <Loading />
        </div>
      )
    }

    return (
      <div>
        <div>
          {this.props.data._allVocabsMeta.count}
        </div>
        {React.cloneElement(this.props.children, {page: this.state.page, previous: this._prev, next: this._next})}
      </div>
    )
  }

  _prev = () => {
    if (this.state.page > 0) {
      this.setState({
        page: this.state.page - 1
      })
    } else {
      this.setState({
        page: this.props.data._allVocabsMeta.count - 1
      })
    }
  }

  _next = () => {
    if (this.state.page < this.props.data._allVocabsMeta.count - 1) {
      this.setState({
        page: this.state.page + 1
      })
    } else {
      this.setState({
        page: 0
      })
    }
  }
}

const vocabCount = gql`
query vocabCount {
  _allVocabsMeta {
    count
  }
}
`

export default graphql(vocabCount)(Pager)