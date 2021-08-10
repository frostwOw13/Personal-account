import React from 'react';

const RegistrationForm: React.FC = () => (
  <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
    <form>
      <div className="form-group text-left">
        <label htmlFor="email">
          Email address{' '}
          <input
            aria-describedby="emailHelp"
            className="form-control"
            id="email"
            placeholder="Enter email"
            type="email"
          />
        </label>
      </div>
      <div className="form-group text-left">
        <label htmlFor="password">
          Password
          <input
            className="form-control"
            id="password"
            placeholder="Password"
            type="password"
          />
        </label>
      </div>
      <div className="form-group text-left">
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            type="password"
          />
        </label>
      </div>
      <button className="btn btn-primary" type="submit">
        Register
      </button>
    </form>
  </div>
);

export default RegistrationForm;
