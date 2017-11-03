import Link from 'next/link'
import Router from 'next/router'

export default () => (
  <div>
    <Link href="/about?name=Zet">
      <a>about page</a>
    </Link>

    <Link href={{ 
      pathname: '/about',
      query: { name: 'Zet' } 
    }}>
      <a>about page</a>
    </Link>

    <Link href="/foo/bar">
      <button>bar page</button>
    </Link>

    <button onClick={() => Router.push('/foo/bar')}>
      bar page
    </button>

    <button onClick={() => Router.push({ 
      pathname: '/about',
      query: { name: 'Zet' } 
    })}>
      about page
    </button>
  </div>
)