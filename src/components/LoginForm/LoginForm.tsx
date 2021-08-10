import React, { useState } from 'react';
import './LoginForm.scss';

interface LoginFormProps {
  login: (details: any) => void,
  error: string
}

const LoginForm: React.FC<LoginFormProps> = ({ error, login }) => {
  const [details, setDetails] = useState({name: "", password: ""});

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(details);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="card">
            <form className="box" onSubmit={submitHandler}>
              <h1>Login</h1>
              {(error !== "") ? (
                <div className="error">{error}</div>
              ) : ""}
              <p className="text-muted">Please enter your login and password!</p>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDetails({...details, name: e.target.value});
                }}
                placeholder="Username"
                type="text"
                value={details.name}/>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDetails({...details, password: e.target.value});
                }}
                placeholder="Password"
                type="password"
                value={details.password}/>
              <button className="btn-submit" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
