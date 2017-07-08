import App from '../components/App'
import Header from '../components/Header'
import SuggestionsList from '../components/suggestions/SuggestionsList'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Header url={props.url} />
    <SuggestionsList url={props.url} />
  </App>
))
