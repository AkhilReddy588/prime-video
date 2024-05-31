import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(
      eachItem => eachItem.categoryId === 'ACTION',
    )
    const comedyMovies = moviesList.filter(
      eachItem => eachItem.categoryId === 'COMEDY',
    )
    return (
      <div className="prime-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          className="prime-poster"
          alt="prime video"
        />
        <div className="content">
          <h1 className="heading">Action Movies</h1>
          <MoviesSlider movies={actionMovies} />
          <h1 className="heading">Comedy Movies</h1>
          <MoviesSlider movies={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
