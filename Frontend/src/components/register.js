import styles from '../css/register.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import child from '../tar.svg';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [sign, setSign] = useState('Sign Up');

  const handleChange = (e) => {
    const name = e.target.name;
    setRegisterData({
      ...registerData,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSign('Registering...');
    registerUser();
    setRegisterData({
      name: '',
      email: '',
      password: '',
    });
  };

  const registerUser = async () => {
    const response = await fetch(
      'https://book-update.herokuapp.com/user/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      }
    );
    const data = await response.json();
    console.log(data);
    if (data._id) {
      setShowSuccess(true);
      setSign('Sign Up');
    } else {
      setShowError(data.message);
      setSign('Sign Up');
    }
  };

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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={registerData.name}
            onChange={handleChange}
          ></input>
        </div>
        <div className={styles.box}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className={styles.box}>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className={styles.button}>
          {sign}
        </button>
        {showSuccess && (
          <p className={styles.para}>
            Registration Successful! <br />
            <Link to="/login">LogIn here!</Link>
          </p>
        )}
        {showError && <p>{showError}</p>}
      </form>
    </div>
  );
};

export default Register;
