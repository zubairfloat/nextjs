import Head from 'next/head';
import Navbar from '../Components/navar';
import styles from '../styles/Home.module.css';
import SideMenue from '../Components/sideMenu';
import Carousel from '../Components/carousel';
import MovieList from '../Components/movieList';
import Footer from '../Components/footer';
import MOVIE_DATA from '../resources/data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossOrigin='anonymous'
        />
        <script
          src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
          integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
          crossOrigin='anonymous'
        ></script>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
          integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1'
          crossOrigin='anonymous'
        ></script>
        <script
          src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
          integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <Navbar />
      <div style={{ padding: '70px 0px 0px 0px' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <SideMenue />
            </div>
            <div className='col-lg-9'>
              <Carousel />
              <div className='row'>
                <MovieList movie={MOVIE_DATA} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
