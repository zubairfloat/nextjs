import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movies = this.props.movie;
    console.log(movies);
    return (
      <>
        {movies.map((movie) => {
          return (
            <div className='col-lg-4 col-md-6 mb-4'>
              <div className='card h-100'>
                <a href='#'>
                  <img className='card-img-top' src={movie.image} alt='' />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a href='#'>{movie.name}</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className='card-text'>{movie.description}</p>
                </div>
                <div className='card-footer'>
                  <small className='text-muted'>{movie.rating}</small>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default MovieList;
