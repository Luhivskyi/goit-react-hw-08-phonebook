import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

class HomeView extends Component {
  componentDidMount() {
    this.props.history.push('/');
  }

  render() {
    const { userName, isAuthenticated } = this.props;

    return (
      <Container className="pt-4 text-center">
        {isAuthenticated ? (
          <>
            <p>
              Welcome, <b>{userName}</b>!
            </p>
          </>
        ) : (
          <>
            <h2 className="mb-5">Welcome</h2>
            <p className="h5 mb-3">
              You can save your contacts with phone number
            </p>
            <p className="h5">
              To use this app, you must to <NavLink to="/login">Login</NavLink>{' '}
              or <NavLink to="/register">Register</NavLink>
            </p>
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  userName: authSelectors.getUsername(state),
});

export default connect(mapStateToProps)(HomeView);
