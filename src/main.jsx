import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MailView from './components/MailView'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Tiptap /> */}
    <MailView />
  </React.StrictMode>,
)
