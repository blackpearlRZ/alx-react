
import React from 'react';
import logo from "../assests/Holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        color : 'red'
    },
    headerImg: {
        width: "200px",
    },
});

const Header = () => {
    return (
        <div className={css(styles.header)}>
            <img className={css(styles.headerImg)} src={logo} alt="Holberton School logo"></img>
            <h1>School dashboard</h1>
        </div>
    );
};

export default Header;
