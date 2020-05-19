import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { init } from '@sentry/browser'

import App from './components/App'
import * as serviceWorker from './serviceWorker'

init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV
})

window.browser = window.browser || window.chrome

browser.alarms.create("my-periodic-alarm", {
  delayInMinutes: 1
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
