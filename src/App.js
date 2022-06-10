import React from 'react'; 
import Navbar from './components/Navbar/Navbar';
import Aboutme from './components/About Me/Aboutme';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Aboutme />
    </div>
  );
}

export default App;
