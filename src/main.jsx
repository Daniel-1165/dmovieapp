import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollTop from './components/ScrollTop.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID = '879890346674-iuu89s6ckjikscj92rvv2g52olfpgdso.apps.googleusercontent.com'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <BrowserRouter>
      <ScrollTop />
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>,
)
