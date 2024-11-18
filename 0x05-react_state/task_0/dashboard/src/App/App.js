
import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import {StyleSheet, css} from "aphrodite"

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

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  "App": {
    margin: 0,
    padding: 0,
    fontFamily: "sans-serif",
    boxSizing: "border-box",
    maxHeight: "100vh",
  },
  "AppBody": {
    padding: "50px",
    fontSize: "1.5rem",
    height: "59vh",
  },
  "AppHeader": {
    display: "flex",
    alignItems: "center",
    color: "#e1003c",
    borderBottom: "5px solid #e1003c",
    paddingLeft: "20px",
  },
  'AppFooter': {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "5px solid #e1003c",
    fontStyle: "italic",
    fontSize: "large",
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  handleKeydown = (event) => {
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  render() {
    return (
      <>
        <div className={css(styles.App)}>
          <Notifications listNotifications={listNotifications} />
          <div className={css(styles.AppHeader)}>
            <Header />
          </div>
          <div className={css(styles.AppBody)}>
            {!this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Some Random Text</p>
            </BodySection>
          </div>
          <div className={css(styles.AppFooter)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
