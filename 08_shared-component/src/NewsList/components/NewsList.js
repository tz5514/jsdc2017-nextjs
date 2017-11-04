export default class NewsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(item => (
          <div key={item}>
            {item}
          </div>
        ))}
      </div>
    )
  }
}