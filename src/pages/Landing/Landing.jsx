import React from 'react'
import {useSelector} from 'react-redux';
import {getPopularMovies, getPopularTv, getTopRatedMovies} from '../../redux/selectors';
import MoviesList from '../../components/MoviesList/MoviesList';


const Landing = () => {
  const popularMovies = useSelector(getPopularMovies)
  const popularTv = useSelector(getPopularTv)
  const topRatedMovies = useSelector(getTopRatedMovies)
  return (
      <>
        <MoviesList movies={popularMovies} title={'Популярные фильмы'} type='movie'/>
        <MoviesList movies={popularTv} title={'Популярные сериалы'} type='tv'/>
        <MoviesList movies={topRatedMovies} title={'В тренде'} type='movie'/>
      </>
  )
}

export default Landing
