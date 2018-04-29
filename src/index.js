import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase';
import App from './components/App.jsx'

const config = {
    apiKey: FB_API_KEY,
    authDomain: "chatastrophe-cd8b1.firebaseapp.com",
    databaseURL: DB_URL,
    projectId: "chatastrophe-cd8b1",
    storageBucket: "chatastrophe-cd8b1.appspot.com",
    messagingSenderId: MSG_SENDER_ID
};
initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) module.hot.accept();