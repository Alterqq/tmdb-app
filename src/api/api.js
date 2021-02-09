import axios from 'axios';

const API_KEY = 'api_key=aee2215c6411642a540bd3f9007fa7fd'
const LANGUAGE_RU = 'language=ru-RU'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})
export const tmdbAPI = {
  requestPopularMovies(page = 1) {
    return instance.get(`/movie/popular?${API_KEY}&${LANGUAGE_RU}&page=${page}`).then(res => res.data)
  },
  requestPopularTv(page = 1) {
    return instance.get(`/tv/popular?${API_KEY}&${LANGUAGE_RU}&page=${page}`).then(res => res.data)
  },
  requestTopRatedMovies(page = 1) {
    return instance.get(`/movie/top_rated?${API_KEY}&${LANGUAGE_RU}&page=${page}`).then(res => res.data)
  },
  requestMovie(id) {
    return instance.get(`/movie/${id}?${API_KEY}&${LANGUAGE_RU}`).then(res => res.data)
  },
  requestTv(id) {
    return instance.get(`/tv/${id}?${API_KEY}&${LANGUAGE_RU}`).then(res => res.data)
  },
  searchMovies(adult = false, query = '', page = 1) {
    return instance.get(`/search/movie?${API_KEY}&${LANGUAGE_RU}&include_adult=${adult}&query=${query}&page=${page}`).then(res => res.data)
  },
  searchTv(adult = false, query = '', page = 1) {
    return instance.get(`/search/tv?${API_KEY}&${LANGUAGE_RU}&include_adult=${adult}&query=${query}&page=${page}`).then(res => res.data)
  },
  requestConfigAPI() {
    return instance.get(`/configuration?${API_KEY}`).then(res => res.data)
  },
}
