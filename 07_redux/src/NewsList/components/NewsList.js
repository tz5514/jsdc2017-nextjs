export default class NewsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(news => (
          <div key={news.id}>
            {news.title}
          </div>
        ))}
      </div>
    )
  }
}