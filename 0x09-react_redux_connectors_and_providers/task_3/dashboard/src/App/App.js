import React, { Component } from "react";
import { connect } from 'react-redux';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import AppContext, { user, logOut } from './AppContext';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest
} from "../actions/uiActionCreators";
import PropTypes from 'prop-types';


const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

document.body.style.margin = 0;

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "8px",
    marginRight: "8px",
    fontFamily: "sans-serif",
  },

  app: {
    color: cssVars.mainColor,
    borderBottom: `5px solid ${cssVars.mainColor}`,
  },

  appBody: {
    padding: "50px",
  },

  footer: {
    borderTop: `5px solid ${cssVars.mainColor}`,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    gap: "10px",
    bottom: 0,
    fontStyle: "italic",
    backgroundColor: "white",
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      user,
      logOut: this.logOut,
      listNotifications,
    };
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter((item) => item.id !== id),
    })
  }

  handleKeyCombination(e) {
    if (e.key === "h" && e.ctrlKey) {
      e.preventDefault();
      alert("Logging you out");
      this.state.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyCombination);
  }

  render() {
    const { isLoggedIn, displayDrawer } = this.props;
    const { listNotifications } = this.state;
    const contextVal = { user: this.state.user, logOut: this.state.logOut };

    return (
      <AppContext.Provider value={contextVal}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.props.displayNotificationDrawer}
          handleHideDrawer={this.props.hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.container)}>
          <div className={css(styles.app)}>
            <Header />
          </div>
          <div className={css(styles.appBody)}>
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.props.login} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
          </div>
          <BodySection title="News from the School">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </BodySection>

          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => { },
  hideNotificationDrawer: () => { }
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => {
      dispatch(displayNotificationDrawer());
    },
    hideNotificationDrawer: () => {
      dispatch(hideNotificationDrawer());
    },
    login: (email, password) => {
      dispatch(loginRequest(email, password));
    }
  }
};

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App);