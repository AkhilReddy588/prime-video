import './index.css'

const MovieItem = props => {
  const {movie} = props
  console.log(movie)
  const {thumbnailUrl, videoUrl} = movie
  return (
    <div>
      <img src={thumbnailUrl} alt="thumbnail" className="movie-img" />
    </div>
  )
}

export default MovieItem
