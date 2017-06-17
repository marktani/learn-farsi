import App from '../components/App'
import Header from '../components/Header'
import VocabsList from '../components/VocabsList'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Header url={props.url} />
    <VocabsList url={props.url} />
  </App>
))
