import React, { Component } from 'react';
import { auth } from 'firebase';
import LoginContainer from './LoginForm.jsx';
import './app.css';

class App extends Component {
    state = { user: null };

    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }
    render() {
        return (
            <div id="container" className="inner-container">
                <LoginContainer />
            </div>
        );
    }
}

export default App;