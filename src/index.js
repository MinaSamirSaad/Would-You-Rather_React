import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'
import 'semantic-ui-css/semantic.min.css'
import{BrowserRouter} from 'react-router-dom'
import 'w3-css/w3.css';

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>
, document.getElementById('root'))