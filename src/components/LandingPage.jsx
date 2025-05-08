import React from 'react'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()
    function handleLogout() {
        googleLogout();
        console.log('Logged out successfully!');
    }
  return (
    <div>
        <h1>Welcome to Movie App</h1>
        <p>Discover the latest movies and TV shows.</p>
        <GoogleLogin
            onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                navigate('/')
            }}
            onError={() => {
                console.error('Login Failed');
            }}
        auto_select={true} />  
    </div>
  )
}

export default LandingPage