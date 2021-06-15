import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { Theme } from './components/Theme';
import { router as Route} from './pages/router'
import {solarize} from './components/asset-icons'
import { Nav } from './components/Header/Nav';
import { NavSub } from './components/Header/NavSub';

const App = () => {
  
  return (
    <Router>
      <Nav/>
      
      {/* Route is located at pages folder */}
      <Route/>
    </Router>
  );
}

export default App;
