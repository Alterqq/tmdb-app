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
  CLEAR_PAGE_COUNTER, SET_NOT_FOUND, TOGGLE_IS_FETCHING, SEARCH_TV, CLEAR_SEARCHED_TV
} from './types';

const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  popularTv: [],
  moviePage: null,
  tvPage: null,
  config: null,
  searchedMovies: [],
  searchedTv: [],
  searchValue: '',
  pageCounter: 1,
  isFound: true,
  isFetching: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {...state, popularMovies: [...state.popularMovies, ...action.payload]}
    case SET_CONFIG:
      return {...state, config: action.payload}
    case GET_TOP_RATED_MOVIES:
      return {...state, topRatedMovies: [...state.topRatedMovies, ...action.payload]}
    case GET_POPULAR_TV:
      return {...state, popularTv: [...state.popularTv, ...action.payload]}
    case GET_MOVIE:
      return {...state, moviePage: action.payload}
    case GET_TV:
      return {...state, tvPage: action.payload}
    case CLEAR_MOVIE_PAGE:
      return {...state, moviePage: null, tvPage: null}
    case SEARCH_MOVIES:
      return {...state, searchedMovies: [...state.searchedMovies, ...action.payload]}
    case CLEAR_SEARCHED_MOVIES:
      return {...state, searchedMovies: []}
    case CLEAR_SEARCHED_TV:
      return {...state, searchedTv: []}
    case UPDATE_SEARCH_VALUE:
      return {...state, searchValue: action.payload}
    case UPDATE_PAGE_COUNTER:
      return {...state, pageCounter: state.pageCounter + 1}
    case CLEAR_PAGE_COUNTER:
      return {...state, pageCounter: 1}
    case SET_NOT_FOUND:
      return {...state, isFound: action.payload}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.payload}
    case SEARCH_TV:
      return {...state, searchedTv: [...state.searchedTv, ...action.payload]}
    default:
      return state
  }
}

export default rootReducer
