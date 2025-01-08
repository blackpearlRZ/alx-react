import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  login: {
    margin: "10px",
    width: "100%",
    '@media (max-width: 900px)': {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: '5px',
    }
  },
  inputField: {
    margin: "0 15px",
    '@media (max-width: 900px)': {
      margin: 0,
    }
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.props.logIn(email, password);
  }

  handleChangeEmail(e) {
    if (e.target.value !== "" && this.state.password !== "") {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    if (this.state.email !== "" && e.target.value !== "") {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.login)} onSubmit={this.handleLoginSubmit}>
          <label>Email:</label>
          <input
            className={css(styles.inputField)}
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChangeEmail} />
          <label>Password:</label>
          <input
            className={css(styles.inputField)}
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChangePassword} />
          <input
            type="submit"
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
}

Login.defaultProps = {
  logIn: () => { },
}

export default Login