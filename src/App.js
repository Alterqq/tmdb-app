import React, {useEffect} from 'react'
import Header from './components/Header/Header'
import Landing from './pages/Landing/Landing'
import {useDispatch, useSelector} from 'react-redux'
import styles from './App.module.scss'
import {requestConfig, requestPopularMovies, requestPopularTv, requestTopRatedMovies} from './redux/actions';
import {getConfig} from './redux/selectors';
import Loader from './components/common/Loader/Loader';
import {Route} from 'react-router-dom';
import MoviePage from './pages/MoviePage/MoviePage';
import SearchPage from './pages/SearchPage/SearchPage';

const App = () => {
  const dispatch = useDispatch()
  const config = useSelector(getConfig)

  useEffect(() => {
    dispatch(requestConfig())
    dispatch(requestPopularMovies())
    dispatch(requestTopRatedMovies())
    dispatch(requestPopularTv())
  }, [dispatch])

  if (!config) {
    return <Loader/>
  }

  return (
      <div className={styles.app}>
        <Header/>
        <Route exact path='/' render={() => <Landing />}/>
        <Route path='/search' render={() => <SearchPage/>}/>
        <Route path='/movie/:id' render={() => <MoviePage config={config} type='movie'/>}/>
        <Route path='/tv/:id' render={() => <MoviePage config={config} type='tv'/>}/>
      </div>
  )
}

export default App
