import Home from './components/home';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Login from './components/login';
import Profile from './components/profile';
import Register from './components/register';
import { useState } from 'react';

function App() {
  const [tok, setTok] = useState(() => {
    return localStorage.getItem('jwtTok');
  });

  return (
    <div className="App">
      <NavBar token={tok} />
      <Switch>
        <Route exact path="/login">
          <Login setTok={setTok} />
        </Route>
        <Route exact path="/profile">
          <Profile setTok={setTok} />
        </Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
