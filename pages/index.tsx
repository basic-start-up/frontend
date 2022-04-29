import type { NextPage } from 'next'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <main className='d-flex flex-column min-vh-100'>
      <Header />

      <div className="container">
        <h1>
          Welcome to <a>My StartUp</a>
        </h1>

        <p>
          First things first!{' '}
          <code>Hello World!</code>
        </p>
      </div>


      <Footer />
    </main>
  )
}

export default Home
