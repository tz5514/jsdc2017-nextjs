import { Link } from 'config/routes'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Link route="news.list" params={{ page: 1 }}>
        <a>News</a>
      </Link>
    )
  }
}