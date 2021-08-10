import React, { useState } from 'react';

import LoginForm from './components/LoginForm/LoginForm';
import Profile from './components/Profile/Profile';
import './App.scss';
import { UserLoginData, users } from './shared/state';

const App: React.FC = () => {
  const [user, setUser] = useState({name: ""});
  const [error, setError] = useState("");

  const login = (details: UserLoginData) => {
    if (details.name === users[0].name && details.password === users[0].password) {
      setUser({
        name: details.name,
      });
    } else {
      setError("Username or password incorrect");
    }
  };

  const logout = () => {
    setUser({name: ""});
    setError("");
  };

  return (
    <div className="App">
      {(user.name !== "") ? (
      <div className="welcome">
        <div className="welcome-header">
          <button className="welcome-btn" onClick={logout} type="button">Logout</button>
          <h2 className="welcome-message">Welcome, <span>{user.name}</span></h2>
        </div>
        <Profile />

      </div>
    ) : (
      <LoginForm error={error} login={login}/>
    )}
    </div>
  );
};

export default App;
