import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'

const MoviesSlider = props => {
  const {movies} = props
  console.log(movies)
  const renderMovies = () => {
    return movies.map(eachItem => (
      <MovieItem movie={eachItem} key={eachItem.id} />
    ))
  }

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div>
      <Slider {...settings}>{renderMovies()}</Slider>
    </div>
  )
}

export default MoviesSlider
