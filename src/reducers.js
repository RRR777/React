import { combineReducers } from 'redux';

// initial state for when state isn't present to have a fallback solution
const initialState = {
  list: [],
};

const moviesReducer = (state = initialState, action) => {
  // reducer - always return NEW state, no functionality can be done here
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, list: action.movies };

    default:
      return state;
  }
};
const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return { ...state, list: action.genres };

        default:
            return state;
    }
};

const heartedReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HEART':
            return [...state, action.id];
        case 'REMOVE_HEART':
            return state.filter((currentId) => currentId !== action.id);
        default:
            return state;
    }
};

const cardReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD_OPENED':
            return [...state, action.id];
        case 'REMOVE_CARD_OPENED':
            return state.filter((currentId) => currentId !== action.id);
        default:
            return state;
    }
};

const logsReducer = (state = [],action) => {
    switch (action.type) {
        case 'ADD_LOG':
            return {...state,[format_date()]:action.logs};
        default:
            return state;
    }
};

const format_date = () => {
    let result="";
    let d = new Date();
    result += d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()
        + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    return result;
};

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  hearted: heartedReducer,
  logs: logsReducer,
  cardsOpened: cardReducer,
});
