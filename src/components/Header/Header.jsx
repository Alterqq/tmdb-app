import React from 'react'
import logo from '../../assets/logo.svg'
import styles from './Header.module.scss'
import {NavLink} from 'react-router-dom';

const Header = ({setViewSearch, viewSearch}) => {
  return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <nav className={styles.navBar}>
            <NavLink to='/'><img src={logo} alt=""/></NavLink>
          </nav>
          <NavLink to='/search'><span className={`material-icons ${styles.search}`}>search</span></NavLink>
        </div>
      </header>
  )
}

export default Header
