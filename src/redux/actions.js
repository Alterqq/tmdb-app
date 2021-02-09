import {
  SET_CONFIG,
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_POPULAR_TV,
  GET_MOVIE,
  CLEAR_MOVIE_PAGE,
  GET_TV,
  SEARCH_MOVIES,
  CLEAR_SEARCHED_MOVIES,
  UPDATE_SEARCH_VALUE,
  UPDATE_PAGE_COUNTER,
  CLEAR_PAGE_COUNTER,
  SET_NOT_FOUND,
  TOGGLE_IS_FETCHING,
  SEARCH_TV,
  CLEAR_SEARCHED_TV,
  TOGGLE_VIEW_BUTTON,
  SET_TEMP_SEARCH_VALUE, GET_MOVIES_TITLES, GET_TV_TITLES
} from './types';
import {tmdbAPI} from '../api/api';

export const clearMoviePage = () => ({type: CLEAR_MOVIE_PAGE})
export const updateSearchValue = (payload) => ({type: UPDATE_SEARCH_VALUE, payload})
export const updatePageCounter = () => ({type: UPDATE_PAGE_COUNTER})
export const clearPageCounter = () => ({type: CLEAR_PAGE_COUNTER})
export const clearSearchedMovies = () => ({type: CLEAR_SEARCHED_MOVIES})
export const clearSearchedTv = () => ({type: CLEAR_SEARCHED_TV})
export const setNotFound = (payload) => ({type: SET_NOT_FOUND, payload})
export const toggleIsFetching = (payload) => ({type: TOGGLE_IS_FETCHING, payload})
export const setViewBtn = (payload) => ({type: TOGGLE_VIEW_BUTTON, payload})
export const setTempSearchValue = (payload) => ({type: SET_TEMP_SEARCH_VALUE, payload})
const requestPopularMoviesSuccess = payload => ({type: GET_POPULAR_MOVIES, payload})
const requestPopularTvSuccess = payload => ({type: GET_POPULAR_TV, payload})
const requestTopRatedMoviesSuccess = payload => ({type: GET_TOP_RATED_MOVIES, payload})
const requestMovieSuccess = payload => ({type: GET_MOVIE, payload})
const requestTvSuccess = payload => ({type: GET_TV, payload})
const searchMoviesSuccess = payload => ({type: SEARCH_MOVIES, payload})
const searchTvSuccess = payload => ({type: SEARCH_TV, payload})
const requestConfigSuccess = (payload) => ({type: SET_CONFIG, payload})
const getMoviesTitlesSuccess = (payload) => ({type: GET_MOVIES_TITLES, payload})
const getTvTitlesSuccess = (payload) => ({type: GET_TV_TITLES, payload})

export const requestPopularMovies = (page) => async dispatch => {
  const popular = await tmdbAPI.requestPopularMovies(page)
  dispatch(requestPopularMoviesSuccess(popular.results))
}

export const searchTv = (adult, query, page) => async dispatch => {
  dispatch(toggleIsFetching(true))
  const tv = await tmdbAPI.searchTv(adult, query, page)
  if (tv.results.length) {
    dispatch(searchTvSuccess(tv.results))
    dispatch(setNotFound(true))
  } else {
    dispatch(setNotFound(false))
  }
  dispatch(toggleIsFetching(false))
}

export const searchMovies = (adult, query, page) => async dispatch => {
  dispatch(toggleIsFetching(true))
  const movies = await tmdbAPI.searchMovies(adult, query, page)
  if (movies.results.length) {
    dispatch(searchMoviesSuccess(movies.results))
    dispatch(setNotFound(true))
  } else {
    dispatch(setNotFound(false))
  }
  dispatch(toggleIsFetching(false))
}

export const searchMoviesTitles = (query, page) => async dispatch => {
  dispatch(toggleIsFetching(true))
  const movies = await tmdbAPI.searchMovies(false, query, page)
  dispatch(getMoviesTitlesSuccess(movies.results))
  dispatch(toggleIsFetching(false))
}

export const searchTvTitles = (query, page) => async dispatch => {
  dispatch(toggleIsFetching(true))
  const tv = await tmdbAPI.searchMovies(false, query, page)
  dispatch(getTvTitlesSuccess(tv.results))
  dispatch(toggleIsFetching(false))
}


export const requestMovie = (id) => async dispatch => {
  const movie = await tmdbAPI.requestMovie(id)
  dispatch(requestMovieSuccess(movie))
}

export const requestTv = (id) => async dispatch => {
  const tv = await tmdbAPI.requestTv(id)
  dispatch(requestTvSuccess(tv))
}

export const requestPopularTv = (page) => async dispatch => {
  const popular = await tmdbAPI.requestPopularTv(page)
  dispatch(requestPopularTvSuccess(popular.results))
}

export const requestTopRatedMovies = (page) => async dispatch => {
  const topRated = await tmdbAPI.requestTopRatedMovies(page)
  dispatch(requestTopRatedMoviesSuccess(topRated.results))
}

export const requestConfig = () => async dispatch => {
  const config = await tmdbAPI.requestConfigAPI()
  dispatch(requestConfigSuccess(config))
}

