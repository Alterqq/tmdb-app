import React from 'react'
import styles from './MoviesList.module.scss'
import MovieCard from '../MovieCard/MovieCard'
import {NavLink} from 'react-router-dom';

const MoviesList = ({movies, title, type}) => {
  return (
        <div className={styles.wrapper}>
          <h2>{title}</h2>
          <div className={styles.movies}>{movies.map(m => <NavLink key={m.id} to={type === 'movie' ? `movie/${m.id}` : `tv/${m.id}`}>
            <MovieCard
              key={m.id}
              item={m}
              type={type}
          /></NavLink>)}</div>
        </div>
  )
}

export default MoviesList
