// Home.js
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isloading: true,
    movies: [],
  };

  getMovies = async() => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isloading:false});
  };

  componentDidMount() {
    //영화 데이터 로딩!
    this.getMovies();
  }

  render() {
    const { isloading , movies } = this.state;
    return ( 
      <section className='container'>
        {isloading
        ? (
          <div className='loader'>
            <span className='loader__text'>Loading...</span>
          </div>
        )
        : (
          <div className='movies'>
            {movies.map( movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )
        }
      </section>
    );
  }
}

export default Home;