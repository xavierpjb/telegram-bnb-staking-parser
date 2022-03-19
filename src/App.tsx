import React from 'react';
import logo from './logo.svg';
import './App.css';
import {log4TSProvider} from "./config/LogConfig";
import Home from './components/Home';

const log = log4TSProvider.getLogger("app")
function App() {
  log.trace("Starting app")

  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
