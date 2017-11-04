import fetch from 'isomorphic-fetch'

export default class NewsListPage extends React.Component {
  static async getInitialProps({ req, query }) {
    console.log('getInitialProps', (req) ? 'server' : 'client');

    const response = await fetch(`${API_DOMAIN}/api/news/list/${query.page}`);
    const data = await response.json();
    return { data };
  }

  render() {
    return (
      <div>
        {this.props.data && this.props.data.map(item => (
          <div key={item}>
            {item}
          </div>
        ))}
      </div>
    )
  }
}