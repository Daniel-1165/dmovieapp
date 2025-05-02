import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Allroutes from './routes/Allroutes';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      
      <Header />
      <Allroutes />
      <Footer/>
    </div>
  )
}

export default App
