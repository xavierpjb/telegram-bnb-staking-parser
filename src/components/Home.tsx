import React, {Component} from 'react';
import {log4TSProvider} from "../config/LogConfig";
import {TelegramExport} from '../models/Telegram-Export.model';
import FileSelector from './FileSelector';
import JsonProcessor from './JsonProcessor';

const log = log4TSProvider.getLogger("Home")
class Home extends Component {
  state = {tgMessages: []}

  render() {
    log.debug('Render home')
    return (
      <div >
        <li className="pt-5">
          <div className="bg-white p-5 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl mb-2">Import the json file</h3>
            <FileSelector
              onValidTGExport={this.onValidTGExport}
              onInvalidTGExport={this.onInvalidTGExport}
            />
          </div>
        </li>

        {this.state.tgMessages.length === 0 ? null :
          <li className="pt-5">
            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-2">
                Select staking year to export
              </h3>
              <JsonProcessor tgMessages={this.state.tgMessages} />
            </div>
          </li>
        }
      </div>
    )
  }

  onValidTGExport = (tgExport: TelegramExport) => {
    log.debug(`onValidTGExport called with export: ${tgExport}`)
    this.setState({tgMessages: tgExport.messages})
  }

  onInvalidTGExport = () => {
    log.debug(`onInvalidTGExport called`)
    this.setState({tgMessages: []})
  }

}

export default Home;
