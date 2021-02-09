import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getConfig} from '../../redux/selectors';
import styles from './MovieCard.module.scss'
import defaultPoster from '../../assets/default-poster.jpg'
import {clearMoviePage} from '../../redux/actions';

const MovieCard = ({item, type}) => {
  const config = useSelector(getConfig)
  const dispatch = useDispatch()
  const onClear = () => {
    dispatch(clearMoviePage())
  }
  return (
      <div className={styles.card} onClick={onClear}>
        <img
            src={item.poster_path ? `${config.images.secure_base_url}${config.images.poster_sizes[4]}${item.poster_path}` : defaultPoster}
            alt="movie"/>
        <h3>{type === 'movie' ? item.title : item.name}</h3>
        <span>Оценка: {item.vote_average.toFixed(2)}</span>
      </div>
  )
}

export default MovieCard
