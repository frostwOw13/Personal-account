import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <nav className="navbar navbar-dark bg-primary">
    <div className="col-12 d-flex justify-content-center text-white">
      <span className="h3 col-10">Personal Account Task</span>
      <Link to="/login">
        <button className="btn btn-primary" type="button">
          Log-in
        </button>
      </Link>
      <Link to="/registration">
        <button className="btn btn-primary" type="button">
          Sign-in
        </button>
      </Link>
    </div>
  </nav>
);

export default Header;
