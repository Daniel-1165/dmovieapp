import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container text-center py-3 my-3 border-top">
            <p className="text-muted">© 2025 Movie App. All rights reserved.</p>
            <p className="text-muted">Developed by Your CineScope.Digital</p>
        </div>
        <div className="social-media text-center py-3 my-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="contact-info text-center py-3 my-3">
            <p className="text-muted">Contact us: info@movieapp.com</p>
            <p className="text-muted">Follow us on social media for updates!</p>
        </div>
    </footer>
  )
}

export default Footer