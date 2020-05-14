import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/" data-test="logo">FARMIFY</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/register" className="nav-link" data-test="sign-up">
                            Sign up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" data-test="login">
                            Sign in
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
}

export default Header;
