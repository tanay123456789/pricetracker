import styles from '../css/profile.module.css';
import jwt from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

const Profile = ({ setTok }) => {
  const token = localStorage.getItem('jwtTok');
  const data = jwt.decode(token);

  const [change, setChange] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem('jwtTok');
    setTok(null);
    setChange(true);
  };

  if (!change) {
    return (
      <div className={styles.container}>
        <h3>Thanks For Visiting {data.name ? data.name : ''}!!</h3>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
    );
  } else if (change) {
    return (
      <div className="something">
        <Redirect to="/" />
      </div>
    );
  }
};

export default Profile;
