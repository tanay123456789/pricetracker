import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from '../css/navbar.module.css';

const NavBar = ({ token }) => {
  //const [token, setToken] = useState(localStorage.getItem('jwtTok'));

  if (!token) {
    return (
      <div className={styles.container}>
        <div className={styles.bar}>
          <Link to="/" className={styles.logo}>
            <h3>TRACQ</h3>
          </Link>
          <ul className={styles.navlinks}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">LogIn</NavLink>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.bar}>
          <Link to="/" className={styles.logo}>
            <h3>TRACQ</h3>
          </Link>
          <ul className={styles.navlinks}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </ul>
        </div>
      </div>
    );
  }
};

export default NavBar;
