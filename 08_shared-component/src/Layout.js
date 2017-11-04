import reduxPage from 'config/store'
import { Link } from 'config/routes'

export default (WrappedComponent) => {
  class Layout extends React.Component {
    render() {
      return (
        <div>
          <Link route="index">
            <a>Index </a>
          </Link>

          <Link route="news.list" params={{ page: 1 }}>
            <a>News </a>
          </Link>

          <Link route="counter">
            <a>Counter</a>
          </Link>

          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
  Layout.getInitialProps = WrappedComponent.getInitialProps;
  return reduxPage(Layout);
}
