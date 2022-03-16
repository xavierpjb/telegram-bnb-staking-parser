import React, {Component} from 'react';
import {log4TSProvider} from "../config/LogConfig";
import {TelegramExport} from '../models/Telegram-Export.model';
import FileSelector from './FileSelector';
import JsonProcessor from'./JsonProcessor';

const log = log4TSProvider.getLogger("Home")
class Home extends Component {
  state = {tgMessages:[] }
  
  render() {
    log.debug('Render home')
    return (
      <div>

        <FileSelector
          onValidTGExport={this.onValidTGExport}
          onInvalidTGExport={this.onInvalidTGExport}
        />

        <JsonProcessor tgMessages={this.state.tgMessages} />

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
