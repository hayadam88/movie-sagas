import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import Axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
    yield takeEvery('EDIT_MOVIE', editMovie);
}

//Generator Function that handles editMovie
function* editMovie(action){
    try{
        // axios put to update database

        yield Axios.put(`/movies/${action.payload.id}`, action.payload);
        yield put ({type: 'FETCH_MOVIES'})
    }
    catch(error) {
        console.log('Error updating DB', error);
    }
}

// generator Function that handles fetchMovies
function* fetchMovies(action) {
    try {
        const response = yield Axios.get('/movies');
        yield put ({type: 'SET_MOVIES', payload: response.data});
    }
    catch (error) {
        console.log('Error getting movies', error);
        alert(`Couldn't get your movie data`);
    }
}

// generator Function that handles fetchMovieDetials
function* fetchMovieDetails(action) {
  console.log('fetchMovieDetails action is', action);
  const detailsResponse = yield Axios.get(`/movies/details/${action.payload.id}`);
  yield put({type: 'SET_MOVIE_DETAILS', payload: detailsResponse.data})
  const genresResponse = yield Axios.get(`/genres/${action.payload.id}`)
  yield put({type: 'SET_GENRES', payload: genresResponse.data})
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store specific movie details
const movieDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        movieDetails,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
