import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../actions/auth';


class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    static propTypes = {
        error: PropTypes.object,
        isAuthenticated: PropTypes.bool,
        login: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name] : e.target.value
    });


    onSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const userdata = {
            email, 
            password
        }

        this.props.login(userdata);
    }

    render() {

        if(this.props.isAuthenticated){
            return <Redirect to="/dashboard" />
        }

        const { email, password } = this.state;
        const { error } = this.props;

        return (
            <div className="p-5" data-test="login">
                <h3 className="text-center mt-3">LOGIN</h3>
                  <p className="text text-danger text-center">
                      { error ? error.error : ""}
                  </p>
                  <form onSubmit={this.onSubmit}>
                    <div className="col-lg-6 col-md-6 p-3 m-auto" data-test="login-form">
                        <div className="form-group">
                            <input 
                                type="email"
                                name="email" 
                                className="form-control mt-5" 
                                placeholder="Email"
                                onChange={this.onChange} 
                                value={email}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="password"
                                name="password" 
                                className="form-control mt-5" 
                                placeholder="Password"
                                onChange={this.onChange} 
                                value={password} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-info btn-block mt-5" data-test="sign-in">Login</button>
                        </div>
                    </div>
                  </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
