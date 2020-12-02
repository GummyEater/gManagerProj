import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import firebase from 'firebase';
import { BrowserRouter as Router } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBMhAACd3v0BzZduU7nQKUqUw1vTkgGq5U",
  authDomain: "guardian-item-manager.firebaseapp.com",
  databaseURL: "https://guardian-item-manager.firebaseio.com",
  projectId: "guardian-item-manager",
  storageBucket: "guardian-item-manager.appspot.com",
  messagingSenderId: "147776144811",
  appId: "1:147776144811:web:2abc14f9fb5d65f2b17eee",
  measurementId: "G-Q1NPYM2D3R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#c62828'
    },
    secondary: {
      main: '#0277bd'
    },
  }
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
