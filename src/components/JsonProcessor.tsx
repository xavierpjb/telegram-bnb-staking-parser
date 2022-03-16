import React, {Component} from 'react';
import {log4TSProvider} from "../config/LogConfig";
import {TelegramExport, TelegramMessage, TelegramText} from "../models/Telegram-Export.model";

const log = log4TSProvider.getLogger("jsonProcessor")
class JsonProcessor extends Component<{tgMessages: TelegramMessage[]}> {
  ignoredMessages: TelegramMessage[] = []
  stakingMessages: TelegramMessage[] = []

  render() {
    log.debug('Render JsonProcessor')
    if (!this.props.tgMessages.length) return (<div data-testid="empty-jsp"></div>)

    log.debug('Filtering non staking messages')
    this.ignoredMessages = []
    this.stakingMessages = []
    this.props.tgMessages.forEach((message) => {
      if (typeof (message.text[0]) === "string"
        && message.text[0] === "Today's ")
        this.stakingMessages.push(message)
      else this.ignoredMessages.push(message)
    });
    log.debug(`Found ${this.stakingMessages.length} Staking messages out of ${this.props.tgMessages.length} `)

    return (
      <div>
        Staking messages:
        <ul aria-label='stakingMessages'>
          {this.stakingMessages.map((message) => <li key={message.id}>{message.id}</li>)}
        </ul>

        Ignored messages:
        <ul aria-label='ignoredMessages'>
          {this.ignoredMessages.map((message) => <li key={message.id}>{message.id}</li>)}

        </ul>
      </div>
    );
  }

}

export default JsonProcessor;
