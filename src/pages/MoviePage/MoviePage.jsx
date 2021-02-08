import React, {useEffect} from 'react'
import styles from './MoviePage.module.scss'
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {requestMovie, requestTv} from '../../redux/actions';
import {getMoviePage, getTvPage} from '../../redux/selectors';
import Loader from '../../components/common/Loader/Loader';

const MoviePage = ({config, type, ...props}) => {
  const dispatch = useDispatch()
  const moviePage = useSelector(getMoviePage)
  const tvPage = useSelector(getTvPage)
  useEffect(() => {
    const id = props.match.params.id
    if (type === 'movie') dispatch(requestMovie(id))
    else dispatch(requestTv(id))
  }, [dispatch, props.match.params.id, type])

  if ((type === 'movie' && !moviePage) || (type === 'tv' && !tvPage)) return <Loader/>
  return (
      <div className={styles.moviePage}>
        <div className={styles.wrapper}>
          <img className={styles.background}
               src={`${config.images.secure_base_url}${config.images.profile_sizes[3]}${type === 'movie'
                   ? moviePage.backdrop_path
                   : tvPage.backdrop_path}`}
               alt='movie'/>
          <div className={styles.movie}>
            <img src={`${config.images.secure_base_url}${config.images.profile_sizes[3]}${type === 'movie'
                ? moviePage.poster_path
                : tvPage.poster_path}`}
                 alt=""/>
            <div className={styles.info}>
              {type === 'movie'
                  ? <h1>{moviePage.title} ({new Date(moviePage.release_date).getFullYear()})</h1>
                  : <h1>{tvPage.name} ({new Date(tvPage.first_air_date).getFullYear()})</h1>}
              <div className={styles.genres}>Жанры:
                {type === 'movie'
                    ? moviePage.genres.map(g => <span key={g.id}>{g.name};</span>)
                    : tvPage.genres.map(g => <span key={g.id}>{g.name};</span>)}
              </div>
              <div className={styles.votes}>
              <span>Оценка пользователей: {type === 'movie'
                  ? moviePage.vote_average.toFixed(1)
                  : tvPage.vote_average.toFixed(1)}.</span>
                <span>Всего голосов: {type === 'movie' ? moviePage.vote_count : tvPage.vote_count}</span>
              </div>
              {type === 'movie' && moviePage.tagline &&
              <p className={styles.tagline}>&laquo;{moviePage.tagline}&raquo;</p>}
              {type === 'tv' && tvPage.tagline && <p className={styles.tagline}>&laquo;{tvPage.tagline}&raquo;</p>}

              <h3>Обзор</h3>
              <p>{type === 'movie' ? moviePage.overview : tvPage.overview}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default withRouter(MoviePage)
