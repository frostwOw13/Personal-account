import React from 'react';

const Home: React.FC = () => (
  <div>
    <main className="form-signin">
      <form>
        <img
          alt=""
          className="mb-4"
          height="57"
          src="/docs/5.1/assets/brand/bootstrap-logo.svg"
          width="72"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <label htmlFor="floatingInput">
            Email address
            <input
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              type="email"
            />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="floatingPassword">
            Password
            <input
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              type="password"
            />
          </label>
        </div>

        <div className="checkbox mb-3">
          <label htmlFor="remember-me">
            Remember me
            <input id="remember-me" type="checkbox" value="remember-me" />
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
  </div>
);

export default Home;
