import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';


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

  static contextType = AppContext;

  render() {
    return (
      <>
        <div className={css(styles.header)}>
          <img className={css(styles.headerImg)} src={logo} alt="Holberton School logo"></img>
          <h1>School dashboard</h1>
        </div>
        {this.context.user.isLoggedIn && (
          <section id="logoutSection">
            <p>Welcome <b>{this.context.user.email}</b> <span
              onClick={this.context.logOut}
              className={css(styles.logoutSpan)}
            >(logout)</span></p>
          </section>
        )}
      </>
    );
  }
}

export default Header;