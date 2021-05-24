import React, { useState } from 'react';
import styles from '../css/login.module.css';
import { Link, Redirect } from 'react-router-dom';
import child from '../tar.svg';

const Login = ({ setTok }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [showStatus, setShowStatus] = useState('LogIn');

  const [token, setToken] = useState(localStorage.getItem('jwtTok'));

  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    setLoginData({
      ...loginData,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowStatus('Hang On...');
    getToken();
    setLoginData({
      email: '',
      password: '',
    });
  };

  const getToken = async () => {
    const response = await fetch(
      'https://book-update.herokuapp.com/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      }
    );
    const data = await response.json();
    if (data.jwtToken) {
      localStorage.setItem('jwtTok', data.jwtToken);
      setToken(localStorage.getItem('jwtTok'));
      setTok(localStorage.getItem('jwtTok'));
    } else {
      setShowError(data.message);
      setShowStatus('LogIn');
    }
  };

  if (!token) {
    return (
      <div className={styles.container}>
        <img
          className={styles.child}
          src={child}
          width="300px"
          height="300px"
        ></img>

        <form className={styles.frm} onSubmit={handleSubmit}>
          <div className={styles.box}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className={styles.box}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Enter your password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" className={styles.button}>
            {showStatus}
          </button>
          <p className={styles.para}>
            New User ? <Link to="/register">Register Here</Link>
          </p>
          {showError && (
            <p style={{ color: 'red', textDecoration: 'underline' }}>
              {showError}
            </p>
          )}
        </form>
      </div>
    );
  } else if (token) {
    return (
      <div className={styles.container}>
        <h3>Logged In</h3>
        <Redirect to="/" />
      </div>
    );
  }
};

export default Login;
