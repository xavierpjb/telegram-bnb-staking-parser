import React from 'react';
import './App.css';
import {log4TSProvider} from "./config/LogConfig";
import Home from './components/Home';
import TelegramExportInstructions from './components/TelegramExportInstructions';

const log = log4TSProvider.getLogger("app")
function App() {
  log.trace("Starting app")

  return (
    <div>
      This app assumes that you set up your telegram staking notifications with
      @BSC_Binance_Chain_Bot
      <ol>
        <li>
          <TelegramExportInstructions />
        </li>
        <Home />
      </ol>
    </div>
  );
}

export default App;
