import React, { Component } from 'react';
import icon from '../images/icon.png';

class LoginContainer extends Component {
    render() {
        return (
            <div id="LoginContainer" className="inner-container">
                <div id="Header">
                    <img src={icon} alt="logo" />
                    <h1>Chatastrophe</h1>
                </div>
                <form>
                    <p>Sign in or sign up by entering your email and password.</p>
                    <input
                        type="text"
                        placeholder="Your email" />
                    <input
                        type="password"
                        placeholder="Your password" />
                    <button className="red light" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginContainer;