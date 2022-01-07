// React
import React from 'react';
import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';

// Redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { handleRobots, toggleFamilyCheckbox } from './reducers';
import thunkMiddleware from "redux-thunk";

// Styling
import './index.css';
import 'tachyons';

// Application
import App from './containers/App';

const logger = createLogger();

const rootReducer = combineReducers({handleRobots, toggleFamilyCheckbox})

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))

// console.info("Index level store:", store)
// console.info("Index level state:", store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
