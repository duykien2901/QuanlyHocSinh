import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import jwts from "jsonwebtoken"
import { LOGIN_SUCCESS } from './redux/constants/action-types';
import { DecodeJwt } from './commom/DecodeJwt';

const token = localStorage.getItem("token");
if(token) {
  let pubData = jwts.decode(token);
    let now = new Date().getTime() / 1000; // timestamp in seconds
    if (pubData && pubData.exp > now) {
      let { username, permission, id } = DecodeJwt(token);
        store.dispatch({
          type: LOGIN_SUCCESS,
          payload: {
              token,
              username,
              permission,
              id
          }
        });
    }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
