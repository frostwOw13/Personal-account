import React, { useState } from 'react';

import LoginForm from './components/LoginForm/LoginForm';
import Profile from './components/Profile/Profile';
import './App.scss';
import { users } from './shared/state';

const App: React.FC = () => {
  const [user, setUser] = useState({name: ""});
  const [error, setError] = useState("");

  const login = (details: any) => {
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
        <h2>Welcome, <span>{user.name}</span></h2>
        <Profile username={user.name} />
        <button onClick={logout} type="button">Logout</button>
      </div>
    ) : (
      <LoginForm error={error} login={login}/>
    )}
    </div>
  );
};

export default App;
