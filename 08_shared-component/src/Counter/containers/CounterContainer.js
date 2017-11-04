import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Counter from 'Counter/components/Counter'
import CounterAction from 'Counter/redux/CounterAction'

class CounterContainer extends React.Component {
  render() {
    return (
      <Counter 
        value={this.props.counter.value} 
        increment={this.props.increment}
        decrement={this.props.decrement}
      />
    )
  }
}

export default connect(
  (state) => ({ counter: state.counter }),
  (dispatch) => bindActionCreators(CounterAction, dispatch)
)(CounterContainer)