import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import 'tachyons'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'
import './index.css'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cizuhl7dh9uic0154gri10kkq',
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
