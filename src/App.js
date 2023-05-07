import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import './App.css'
 

function App() {
  
  return (
    <>
     <Navbar />
     <Router >
     <AllRoutes />
     </Router>

    </>
  );
}

export default App;
