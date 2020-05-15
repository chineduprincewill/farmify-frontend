import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { register } from '../actions/auth';

class Register extends Component {

    //$('#auth').hide();

    state = {
        firstName : "",
        lastName : "",
        email : "",
        mobile : "",
        address: "",
        city : "",
        state : "",
        country : "",
        username : "",
        password : "",
        password2 : "",
        userType: "",
        showBio : true,
        showAddrs : false,
        showAuth : false,
        showConfirm : false,
        showFinishBtn : false,
    }


    static propTypes = {
        errors: PropTypes.array,
        successMsg: PropTypes.object,
        isRegistered : PropTypes.bool,
        register: PropTypes.func.isRequired
    }

    
    goToAddrs = () => {

       /** const {firstName, lastName, mobile} = this.state;
        if(firstName === "" || lastName === "" || mobile === ""){
            this.setState({
                error : "First name or last name or mobile must not be empty!"
            })
        }
        else{ **/
            this.setState({
                showBio : false,
                showAddrs : true,
                showAuth : false,
                showConfirm : false,
                showFinishBtn : false,
                error : ""
            });
        //}
    }

    goToBio = () => {
        
        this.setState({
            showBio : true,
            showAddrs : false,
            showAuth : false,
            showConfirm : false,
            showFinishBtn : false,
        });
        
    }

    goToAuth = () => {

        //const {address, city, state, country} = this.state;
        /**if(address === "" || city === "" || state === "" || country === ""){
            this.setState({
                error : "All fields must be filled!"
            })
        }
        else{**/
            this.setState({
                showBio : false,
                showAddrs : false,
                showAuth : true,
                showConfirm : false,
                showFinishBtn : false,
                error : ""
            });
        //}
    }

    goToConfirm = () => {

        //const {username, password, password2, userType} = this.state;

        /**if(username === "" || password === "" || password2 === "" || userType === ""){
            this.setState({
                error : "All fields must be filled!"
            })
        }
        else if(password !== password2){
            this.setState({
                error : "Password mismatch!"
            })
        }
        else{**/
            this.setState({
                showBio : false,
                showAddrs : false,
                showAuth : false,
                showConfirm : true,
                showFinishBtn : true,
                error : ""
            });
        //}
    }


    onChange = (e) => this.setState({
        [e.target.name] : e.target.value
    });


    onSubmit = (e) => {
        e.preventDefault();

        let usertype = 2;
        
        if(this.state.userType === "Farmer"){
                usertype = 0;
        }
        else if(this.state.userType === "Other services provider"){
            usertype = 1;
        }
        else if(this.state.userType === "Buyer"){
            usertype = 2;
        }

        const regData = {

            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            phone : this.state.mobile,
            address: this.state.address,
            city : this.state.city,
            state : this.state.state,
            country : this.state.country,
            username : this.state.username,
            password : this.state.password,
            userType: usertype
        }

        this.props.register(regData);

    }


  render() {

    if(this.props.isRegistered){
        return <Redirect to="/login" />
    }

    const { successMsg, errors } = this.props;  

    const showSuccess = <span className="text-success">
                            { successMsg.success ? successMsg.success + ". Click on Sign in to login" : "" }
                         </span>;

    const showErrors = <span className="text-danger">
                            { errors.statusText ? "Invalid entries. Ensure that all fields are filled" : "" }
                        </span>;

    return (
      <div className="p-5" data-test="register">
        <h3 className="text-center mt-3">REGISTRATION</h3>
        <p className="text-center mt-3">
            <center>
                { successMsg ? showSuccess : showErrors }
            </center>
        </p>
        <form>
            { this.state.showBio && <div className="col-lg-6 col-md-6 p-3 m-auto" data-test="bio">

                    <div className="form-group">
                        <input 
                            name="firstName"
                            type="text" 
                            className="form-control mt-4"
                            placeholder="First name"
                            onChange={this.onChange}
                            value={this.state.firstName}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            name="lastName"
                            type="text" 
                            className="form-control mt-4"
                            placeholder="Last name"
                            onChange={this.onChange}
                            value={this.state.lastName}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            name="email"
                            type="email" 
                            className="form-control mt-4"
                            placeholder="Email"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            name="mobile"
                            type="text" 
                            className="form-control mt-4"
                            placeholder="Phone no."
                            onChange={this.onChange}
                            value={this.state.mobile}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-info float-right" onClick={ this.goToAddrs } data-test="show-address-form">Next</button>
                    </div>
        </div> }

            { this.state.showAddrs && <div className="col-lg-6 col-md-6 p-3 m-auto"  data-test="addrs">

                    <div className="form-group">
                        <input 
                            name="address"
                            type="text" 
                            className="form-control mt-4"
                            placeholder="Address"
                            onChange={this.onChange}
                            value={this.state.address}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            name="city"
                            type="text" 
                            className="form-control mt-4"
                            placeholder="City"
                            onChange={this.onChange}
                            value={this.state.city}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            name="state"
                            type="text" 
                            className="form-control mt-4"
                            placeholder="State"
                            onChange={this.onChange}
                            value={this.state.state}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <select 
                            name="country"
                            className="form-control mt-4"
                            onChange={this.onChange}
                            value={this.state.country}
                            required
                        >
                            <option value="">Choose country</option>
                            <option value="Nigeria">Nigeria</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-danger" onClick={ this.goToBio }>Back</button>
                        <button className="btn btn-info float-right" onClick={ this.goToAuth }>Next</button>
                    </div>
            </div>}

            { this.state.showAuth && <div className="col-lg-6 col-md-6 p-3 m-auto" data-test="auth" >

                    <div className="form-group">
                        <input 
                            name="username"
                            type="text" 
                            className="form-control mt-4"
                            placeholder="Username"
                            onChange={this.onChange}
                            value={this.state.username}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            name="password"
                            type="password" 
                            className="form-control mt-4"
                            placeholder="Password"
                            onChange={this.onChange}
                            value={this.state.password}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            name="password2"
                            type="password" 
                            className="form-control mt-4"
                            placeholder="Confirm password"
                            onChange={this.onChange}
                            value={this.state.password2}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <select 
                            name="userType"
                            className="form-control mt-4"
                            onChange={this.onChange}
                            value={this.state.userType}
                            required
                        >
                            <option value="">Choose User type</option>
                            <option value="Farmer">Farmer</option>
                            <option value="Other services provider">Other services provider</option>
                            <option value="Buyer">Buyer</option>
                        </select>
                    </div>

                    
                    <div className="form-group">
                        <button className="btn btn-danger" onClick={ this.goToAddrs }>Back</button>
                        <button className="btn btn-info float-right"  onClick={ this.goToConfirm }>Next</button>
                    </div>

            </div>}

            {this.state.showConfirm && <div className="row justify-content-center p-3" data-test="confirm" >
                <div className="col-auto">
                    <table className="table table-striped table-responsive float-center">
                        <tr>
                            <td className="text-primary">First name</td><td>{this.state.firstName}</td>
                            <td className="text-primary">Last name</td><td>{this.state.lastName}</td>
                        </tr>
                        <tr>
                            <td className="text-primary">Email</td><td>{this.state.email}</td>
                            <td className="text-primary">Phone no.</td><td>{this.state.mobile}</td>
                        </tr>
                        <tr>
                            <td className="text-primary">Address</td><td>{this.state.address}</td>
                            <td className="text-primary">City</td><td>{this.state.city}</td>
                        </tr>
                        <tr>
                            <td className="text-primary">State</td><td>{this.state.state}</td>
                            <td className="text-primary">country</td><td>{this.state.country}</td>
                        </tr>
                        <tr>
                            <td className="text-primary">Username</td><td>{this.state.username}</td>
                            <td className="text-primary">User type</td><td>{this.state.userType}</td>
                        </tr>
                        <tr>
                            <td colspan="2"><button className="btn btn-danger" onClick={ this.goToAuth }>Back</button></td>
                            <td colspan="2"><button type="submit" className="btn btn-success btn-block" onClick={this.onSubmit}>Confirm Your Entries</button></td>
                        </tr>
                    </table>
                </div>
            </div>}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    errors : state.auth.errors,
    successMsg : state.auth.successMsg,
    isRegistered : state.auth.isRegistered
});

export default connect(mapStateToProps, { register })(Register);