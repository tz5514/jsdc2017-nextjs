export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}>-</button>
        <input type="text" value={this.props.value} readOnly/>
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}