import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/components/App/index.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './app/actions/actions.js'

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
   document.getElementById('root'));