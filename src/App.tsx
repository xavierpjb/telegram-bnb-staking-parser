import React from 'react';
import './App.css';
import {log4TSProvider} from "./config/LogConfig";
import Home from './components/Home';
import TelegramExportInstructions from './components/TelegramExportInstructions';

const log = log4TSProvider.getLogger("app")
function App() {
  log.trace("Starting app")

  return (
    <div className="bg-amber-300 p-10">
      <h2 className="font-bold text-4xl">
        BNB Telegram staking tax csv generator 
      </h2>

      <p className="pt-2">
        Generate a csv file from Telegram's @BSC_Binance_Chain_Bot
        staking reward notifications.
      </p>

      <ol className="list-decimal">
        <TelegramExportInstructions />
        <Home />
      </ol>
    </div>
  );
}

export default App;
