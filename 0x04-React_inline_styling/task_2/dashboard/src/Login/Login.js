
import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    login: {
        margin: "50px",
        flexGrow: 1,
    },
    inputField: {
        margin: "0 15px"
    },
    buttonOk: {
        minWidth: "50px",
        minHeight: "30px",
        fontWeight: "bold",
        backgroundColor: "white",
        color: "#e1003c",
        border: "1px solid lightgrey",
        borderRadius: "5px",
        ":hover": {
            backgroundColor: "#e1003c",
            color: "white",
        },
        ":active": {
            backgroundColor: "#8e0127",
        }
    }
});
const Login = () => {
    return (
        <div className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <label>Email:</label>
            <input className={css(styles.inputField)} type="email" id="email" />
            <label>Password:</label>
            <input className={css(styles.inputField)} type="password" id="password"></input>
            <button className={css(styles.buttonOk)}>OK</button>
        </div>
    )
}

export default Login
