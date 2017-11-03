import { Link, Router } from '../routes'

export default () => (
  <div>
    <Link route="about" params={{ name: 'Zet' }}>
      <a>about page</a>
    </Link>

    <button onClick={() => Router.pushRoute('about', { name: 'Zet' })}>
      about page
    </button>
  </div>
)