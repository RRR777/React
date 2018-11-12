import axios from 'axios';
import { setMovies, setGenres, addLog } from './actions';
import { endpoints } from '../config';

export const getMovies = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((res) => {
      dispatch(setMovies(res.data.results))
    })
    .catch((error) => console.log(error));
};

export const getGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => {
            dispatch(setGenres(res.data.genres))
        })
        .catch((error) => console.log(error));
};

export const getMoviesByGenre = (id) => (dispatch) => {
    axios
        .get(endpoints.genreMovies(id))
        .then((res) => {
            dispatch(setMovies(res.data.results))
        })
        .catch((error) => console.log(error));
};

export const logGenreChange = (genreName) => (dispatch) => {
    dispatch(addLog("Pakeistas žanras į  " + genreName));
};

export const logHeartAddition = (movieName) => (dispatch) => {
    dispatch(addLog("Uždėta širdelė filmui " + movieName));
};

export const logHeartRemoval = (movieName) => (dispatch) => {
    dispatch(addLog("Nuimta širdelė filmui " + movieName));
};
