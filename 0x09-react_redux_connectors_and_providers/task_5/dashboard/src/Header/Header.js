import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';
import { user } from '../App/AppContext';


const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
  },
  headerImg: {
    width: "200px",
  },
  logoutSpan: {
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className={css(styles.header)}>
          <img className={css(styles.headerImg)} src={logo} alt="Holberton School logo"></img>
          <h1>School dashboard</h1>
        </div>
        {this.props.user && (
          <section id="logoutSection">
            <p>Welcome <b>{this.props.user.email}</b> <span
              onClick={this.props.logout}
              className={css(styles.logoutSpan)}
            >(logout)</span></p>
          </section>
        )}
      </>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object
};

Header.defaultProps = {
  user: null
};

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export { Header };

export default connect(mapStateToProps, mapDispatchToProps)(Header);