export const setMovies = (movies) => {
  // action - always return only object with data, no functionality can be done here
  return {
    type: 'SET_MOVIES',
    movies,
  };
};

export const setGenres = (genres) => {
    return {
        type: 'SET_GENRES',
        genres,
    };
};

export const addHeart = (id) => {
    return {
        type: 'ADD_HEART',
        id,
    }
};

export const removeHeart = (id) => {
    return {
        type: 'REMOVE_HEART',
        id,
    }
};

export const addLog = (message) => {
    return {
        type: 'ADD_LOG',
        message,
    }
};

export const addCard = (id) => {
    return {
        type: 'ADD_CARD_OPENED',
        id,
    }
};
export const removeCard = (id) => {
    return {
        type: 'REMOVE_CARD_OPENED',
        id,
    }
};
