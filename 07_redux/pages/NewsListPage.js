import reduxPage from 'config/store'
import NewsListContainer from 'NewsList/containers/NewsListContainer'
import NewsListAction from 'NewsList/redux/NewsListAction'
const { fetchNewsList } = NewsListAction;

class NewsListPage extends React.Component {
  static async getInitialProps({ store, isServer, query }) {
    if (isServer) {
       await store.dispatch(fetchNewsList(query.page));
    } else {
      store.dispatch(fetchNewsList(query.page));
    }
  }

  render() {
    return (
      <NewsListContainer/>
    )
  }
}

export default reduxPage(NewsListPage)
