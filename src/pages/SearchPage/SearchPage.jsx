import React, {useEffect, useState} from 'react'
import styles from './SearchPage.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {
  getIsFetching,
  getIsFound,
  getPageCounter,
  getSearchedMovies,
  getSearchedTv,
  getSearchValue
} from '../../redux/selectors';
import MovieCard from '../../components/MovieCard/MovieCard';
import {NavLink} from 'react-router-dom';
import {
  clearPageCounter,
  clearSearchedMovies, clearSearchedTv,
  searchMovies, searchTv,
  updatePageCounter,
  updateSearchValue
} from '../../redux/actions';

const SearchPage = () => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  const [mode, setMode] = useState('movie')
  const [viewButton, setViewButton] = useState(true)
  const searchValue = useSelector(getSearchValue)
  const pageCounter = useSelector(getPageCounter)
  const isFound = useSelector(getIsFound)
  const isFetching = useSelector(getIsFetching)
  const searchedMovies = useSelector(getSearchedMovies)
  const searchedTv = useSelector(getSearchedTv)

  const onSearch = (page) => {
    dispatch(clearSearchedMovies())
    if (searchValue.trim() !== '') {
      dispatch(clearPageCounter())
      if (mode === 'movie') {
        dispatch(searchMovies(checked, searchValue, page))
      } else {
        dispatch(searchTv(checked, searchValue, page))
      }
      setViewButton(true)
      dispatch(updatePageCounter())
    }
  }

  const loadingMore = (pageNumber) => {
    dispatch(updatePageCounter())
    if (mode === 'movie') {
      dispatch(searchMovies(checked, searchValue, pageNumber))
    } else {
      dispatch(searchTv(checked, searchValue, pageNumber))
    }
  }
  const onUpdateSearchValue = (text) => {
    dispatch(updateSearchValue(text))
  }

  useEffect(() => {
    if (searchValue.trim() === '') {
      setViewButton(false)
    }
  }, [searchValue])

  const onMovieMode = () => {
    dispatch(clearSearchedTv())
    setMode('movie')
    dispatch(updateSearchValue(''))
  }

  const onTvMode = () => {
    dispatch(clearSearchedMovies())
    setMode('tv')
    dispatch(updateSearchValue(''))
  }

  return (
      <div className={styles.search}>
        <div className={styles.input}>
          <div className={styles.searchMode}><h1>Поиск</h1>
            <span
                className={`${styles.mode} ${mode === 'movie' && styles.active}`}
                onClick={onMovieMode}>фильмов</span>
            <span
                className={`${styles.mode} ${mode === 'tv' && styles.active}`}
                onClick={onTvMode}>сериалов</span></div>
          <span onClick={() => onSearch(pageCounter)} className={`material-icons`}>search</span>
          <input onKeyUp={event => {
            if (event.key === 'Enter') onSearch(pageCounter)
          }}
                 value={searchValue}
                 onChange={(e) => onUpdateSearchValue(e.target.value)}
                 type="text"
                 placeholder={'Введите запрос'}
          />
          <div className={styles.adult}>
            <label htmlFor='adult'>Показывать фильмы 18+</label>
            <input onChange={() => setChecked(!checked)} type="checkbox" id='adult'/></div>
        </div>
        {isFound && viewButton && !isFetching && <h1>Результаты поиска:</h1>}

        {mode === 'movie'
            ? <div className={styles.results}>
              {searchedMovies.map(m => <NavLink key={m.id} to={`movie/${m.id}`}>
                <MovieCard
                    key={m.id}
                    item={m}
                    type={mode}
                /></NavLink>)}
            </div>
            : <div className={styles.results}>
              {searchedTv.map(m => <NavLink key={m.id} to={`tv/${m.id}`}>
                <MovieCard
                    key={m.id}
                    item={m}
                    type={mode}
                /></NavLink>)}
            </div>}
        {!isFound && !isFetching && <p>По данному запросу ничего не найдено!</p>}
        {isFound && viewButton && !isFetching &&
        <button disabled={isFetching} onClick={() => loadingMore(pageCounter)}>Загрузить еще</button>}
      </div>
  )
}

export default SearchPage
