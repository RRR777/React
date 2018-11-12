import React from 'react';
import { connect } from 'react-redux';
import { getGenres, getMoviesByGenre, logGenreChange } from "../thunks";
import { setGenres } from "../actions";

class Genres extends React.Component {
  constructor(props) {
    super(props);

    props.onGetGenres();
 }

  render() {
    const { genresList, setMoviesByGenreList } = this.props;

    return (
      <div className="genres">
        {genresList.map((genre) => (
          <div key={genre.id} className="genre" onClick={() => setMoviesByGenreList(genre.id, genre.name)}>
            {genre.name}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
    (state) => {
        return {
            genresList: state.genres.list,
        };
    },
    (dispatch) => {
        return {
            onSetGenres: (genres) => dispatch(setGenres(genres)),
            onGetGenres: () => dispatch(getGenres()),
            setMoviesByGenreList: (id, name) => {dispatch(getMoviesByGenre(id));dispatch(logGenreChange(name))},
        };
    },
)(Genres);
