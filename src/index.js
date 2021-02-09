import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux';
import store from './redux/store';
import { HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>, document.getElementById('root')
)

reportWebVitals()
