import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getConfig} from '../../redux/selectors';
import styles from './MovieCard.module.scss'
import {clearMoviePage} from '../../redux/actions';

const MovieCard = ({item, type}) => {
  const config = useSelector(getConfig)
  const dispatch = useDispatch()
  const onClear = () => {
    dispatch(clearMoviePage())
  }
  return (
      <div className={styles.card} onClick={onClear}>
        <img src={`${config.images.secure_base_url}${config.images.poster_sizes[4]}${item.poster_path}`} alt="movie"/>
        <h3>{type === 'movie' ? item.title : item.name}</h3>
        <span>{
          type === 'movie'
              ? new Date(item.release_date).toLocaleDateString()
              : new Date(item.first_air_date).toLocaleDateString()}
        </span>
      </div>
  )
}

export default MovieCard
