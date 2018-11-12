import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { getMovies } from '../thunks';
import { addLog } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.onGetMovies();
  }

    componentDidMount() {
        const {createLog} = this.props;
        createLog('Aplikacija užkrauta');
    }

  render() {
    const { movieList } = this.props;

    return (
      <React.Fragment>
        <Genres onChangeList={this.onGetMovies} />

        <div className="cards">
          {movieList.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  // function to get data from redux store to this components props
  (state) => {
    return {
      movieList: state.movies.list,
    };
  },
  // function to pass action callers to this components props
  (dispatch) => {
    return {
      // onSetMovies - simplest way to pass data to store
      onSetMovies: (movies) => dispatch(setMovies(movies)),
      onGetMovies: () => dispatch(getMovies()),
      createLog: (message) => dispatch(addLog(message)),
    };
  },
)(App);
