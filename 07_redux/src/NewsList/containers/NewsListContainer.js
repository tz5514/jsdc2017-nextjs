import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NewsList from 'NewsList/components/NewsList'
import NewsListAction from 'NewsList/redux/NewsListAction'

class NewsListContainer extends React.Component {
  render() {
    const { status, data } = this.props.newsList;
    return (
      <div>
        {status == 'request' && (
          <div>loading...</div>
        )}

        {status == 'success' && (
          <NewsList 
            data={data} 
            fetchNewsList={this.props.fetchNewsList}
          />
        )}

        {status == 'error' && (
          <div>error</div>
        )}
      </div>
    )
  }
}

export default connect(
  (state) => ({ newsList: state.newsList }),
  (dispatch) => bindActionCreators(NewsListAction, dispatch)
)(NewsListContainer)