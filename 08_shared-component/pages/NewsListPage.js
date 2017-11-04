import wrapWithLayout from 'src/Layout'
import NewsListContainer from 'NewsList/containers/NewsListContainer'
import NewsListAction from 'NewsList/redux/NewsListAction'
const { fetchNewsList } = NewsListAction;

class NewsListPage extends React.Component {
  static async getInitialProps({ store, isServer, query }) {
    if (store.getState().newsList.status != 'success') {
      if (isServer) {
        await store.dispatch(fetchNewsList(query.page));
      } else {
        store.dispatch(fetchNewsList(query.page));
      }
    }
  }

  render() {
    return (
      <NewsListContainer/>
    )
  }
}

export default wrapWithLayout(NewsListPage)
