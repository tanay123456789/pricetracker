import { useState } from 'react';
import InputComp from './inputcomp';
import ShowList from './showlist';
import styles from '../css/home.module.css';
import target from '../tar.svg';

const Home = () => {
  const [result, setResult] = useState(null);
  const checkfor = (value) => {
    setResult(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <InputComp getValue={checkfor}></InputComp>
      </div>
      
      <div className={styles.image}>
          <img src={target} width="200px" height="200px" ></img>
        </div>
      <div className="res">
        {result ? <ShowList res={result}></ShowList> : undefined}
      </div>
    </div>
  );
};

export default Home;
