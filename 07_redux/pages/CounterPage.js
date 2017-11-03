import reduxPage from 'config/store'
import CounterContainer from 'Counter/containers/CounterContainer'
import CounterAction from 'Counter/redux/CounterAction'

class CounterPage extends React.Component {
  static getInitialProps({ store, isServer }) {
    if (isServer) {
      store.dispatch(CounterAction.increment());
      store.dispatch(CounterAction.increment());
    }
  }

  render() {
    return (
      <CounterContainer/>
    )
  }
}

export default reduxPage(CounterPage)