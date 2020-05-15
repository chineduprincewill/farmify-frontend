import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {

  static propTypes = {
      user: PropTypes.object,
      isAuthenticated: PropTypes.bool
  }

  render() {

    const { user } = this.props;

    let userRole = '';
    let reqViews = '';

    if(user && user.user.usertype < 2){

        if(user.user.usertype === 0){

            userRole = (
                    <div className="col-sm-4">
                        <div className="card text-white bg-info mt-3">
                            <div className="card-body">
                                <Link to="/cart" className="btn btn-link">
                                <p className="card-text text-light"><i className="fa fa-industry fa-3x mr-5"></i> Farm</p>
                                </Link>
                            </div>
                        </div>
                    </div>
            );
        }
        else if(user.user.usertype === 1){
            userRole = (
                <div className="col-sm-4">
                    <div className="card text-white bg-info mt-3">
                        <div className="card-body">
                            <Link to="/cart" className="btn btn-link">
                            <p className="card-text text-light"><i className="fa fa-cogs fa-3x mr-5"></i> Services</p>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        reqViews = (
                <div className="col-sm-4">
                    <div className="card text-white bg-danger mt-3">
                        <div className="card-body">
                            <Link to="/cart" className="btn btn-link">
                            <p className="card-text text-light"><i className="fa fa-tasks fa-3x mr-5"></i> Requests</p>
                            </Link>
                        </div>
                    </div>
                </div>
        );
    }

    return (
        <div className="container" data-test="dashboard">
        <h5 className="alert alert-primary mb-5">Dashboard</h5>
        <div className="row mt-5">

             <div className="col-sm-4">
                 <div className="card text-white bg-success mt-3">
                     <div className="card-body">
                         <Link to="/" className="btn btn-link">
                           <p className="card-text text-light"><i className="fa fa-home fa-3x mr-5"></i> Store</p>
                         </Link>
                     </div>
                 </div>
             </div>

             <div className="col-sm-4">
                 <div className="card text-white bg-warning mt-3">
                     <div className="card-body">
                         <Link to="/cart" className="btn btn-link">
                           <p className="card-text text-light"><i className="fa fa-shopping-cart fa-3x mr-5"></i> Cart</p>
                         </Link>
                     </div>
                 </div>
             </div>

             <div className="col-sm-4">
                 <div className="card text-white bg-primary mt-3">
                     <div className="card-body">
                         <Link to="/order" className="btn btn-link">
                           <p className="card-text text-light"><i className="fa fa-list fa-3x mr-5"></i> Orders</p>
                         </Link>
                     </div>
                 </div>
             </div>
         </div>
         
        <hr />

         <div className="row mt-5">
            { userRole }
            { reqViews }
         </div>
     </div>
    );
  }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Dashboard);
