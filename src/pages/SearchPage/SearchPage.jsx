import React, {useEffect, useState} from 'react'
import styles from './SearchPage.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {
  getIsFetching,
  getIsFound, getMoviesTitles,
  getPageCounter,
  getSearchedMovies,
  getSearchedTv,
  getSearchValue, getTempValue, getTvTitles, getViewBtn
} from '../../redux/selectors';
import MovieCard from '../../components/MovieCard/MovieCard';
import {Link, NavLink} from 'react-router-dom';
import {
  clearPageCounter,
  clearSearchedMovies, clearSearchedTv,
  searchMovies, searchMoviesTitles, searchTv, searchTvTitles, setNotFound, setTempSearchValue, setViewBtn,
  updatePageCounter,
  updateSearchValue
} from '../../redux/actions';

const SearchPage = () => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  const [vieDropdown, setViewDropdown] = useState(false)
  const viewBtn = useSelector(getViewBtn)
  const [mode, setMode] = useState('movie')
  const tempValue = useSelector(getTempValue)
  const searchValue = useSelector(getSearchValue)
  const pageCounter = useSelector(getPageCounter)
  const isFound = useSelector(getIsFound)
  const isFetching = useSelector(getIsFetching)
  const searchedMovies = useSelector(getSearchedMovies)
  const searchedTv = useSelector(getSearchedTv)
  const moviesTitles = useSelector(getMoviesTitles)
  const tvTitles = useSelector(getTvTitles)

  const onSearch = (page) => {
    if (searchValue.trim() !== '') {
      dispatch(setTempSearchValue(searchValue))
      setViewDropdown(false)
      dispatch(clearPageCounter())
      if (mode === 'movie') {
        dispatch(clearSearchedMovies())
        dispatch(searchMovies(checked, searchValue, page))
      } else {
        dispatch(clearSearchedTv())
        dispatch(searchTv(checked, searchValue, page))
      }
      dispatch(setViewBtn(true))
      dispatch(updatePageCounter())
    }
  }

  const loadingMore = (pageNumber) => {
    dispatch(updatePageCounter())
    if (mode === 'movie') {
      dispatch(searchMovies(checked, tempValue, pageNumber))
    } else {
      dispatch(searchTv(checked, tempValue, pageNumber))
    }
  }
  const onUpdateSearchValue = (text, page) => {
    dispatch(updateSearchValue(text))
    if (mode === 'movie') {
      dispatch(searchMoviesTitles(text, page))
    } else {
      dispatch(searchTvTitles(text, page))
    }
    setViewDropdown(true)

    if (!text) {
      setViewDropdown(false)
    }
  }


  const onMovieMode = () => {
    dispatch(clearSearchedTv())
    setMode('movie')
    dispatch(setViewBtn(false))
    dispatch(setNotFound(true))
    dispatch(updateSearchValue(''))
    setViewDropdown(false)
    setChecked(false)
  }

  const onTvMode = () => {
    dispatch(clearSearchedMovies())
    setMode('tv')
    dispatch(setViewBtn(false))
    dispatch(setNotFound(true))
    dispatch(updateSearchValue(''))
    setViewDropdown(false)
    setChecked(false)
  }

  useEffect(() => {
    dispatch(setNotFound(true))
  }, [dispatch])

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
          <span onClick={() => onSearch(pageCounter)} className={`material-icons ${styles.searchBnt}`}>search</span>
          <input
              onKeyUp={event => {
                if (event.key === 'Enter') onSearch(pageCounter)
              }}
              value={searchValue}
              onChange={(e) => onUpdateSearchValue(e.target.value, 1)}
              type="text"
              placeholder={'Введите запрос'}
          />

          {vieDropdown && <div className={styles.dropdown}>
            {mode === 'movie' && moviesTitles.length && !isFetching ? moviesTitles.map(m => <Link
                className={styles.item}
                to={`movie/${m.id}`}
            >{m.title}</Link>)
            : mode === 'movie' && !moviesTitles.length && <span>Ничего не найдено</span>}
            {mode === 'tv' && tvTitles.length && !isFetching ? tvTitles.map(m => <Link
                className={styles.item}
                to={`tv/${m.id}`}
            >{m.title}</Link>)
            : mode === 'tv' && !tvTitles.length && <span>Ничего не найдено</span>
            }
          </div>}

          <div className={styles.adult}>
            <label htmlFor='adult'>Показывать фильмы 18+</label>
            <input checked={checked} onChange={() => setChecked(!checked)} type="checkbox" id='adult'/></div>
        </div>
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
            </div>

        }
        {!isFound && !isFetching && <p>По данному запросу ничего не найдено!</p>}
        {viewBtn && isFound &&
        <button disabled={isFetching} onClick={() => loadingMore(pageCounter)}>Загрузить еще</button>}
      </div>

  )
}

export default SearchPage
