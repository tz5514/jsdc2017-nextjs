import reduxPage from 'config/store'
import { Link } from 'config/routes'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Link route="news.list" params={{ page: 1 }}>
          <a>News</a>
        </Link>

        <Link route="counter">
        <a>Counter</a>
        </Link>
      </div>
    )
  }
}

export default reduxPage(IndexPage)
