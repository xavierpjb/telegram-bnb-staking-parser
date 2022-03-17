import React, {Component} from 'react';
import {log4TSProvider} from "../config/LogConfig";
import {TelegramMessage, TelegramSubtext} from "../models/Telegram-Export.model";
import {StakingReward} from "../models/StakeReward.model";

const log = log4TSProvider.getLogger("jsonProcessor")
class JsonProcessor extends Component<{tgMessages: TelegramMessage[]}> {
  static dateTextPositionRange = {start: 1, end: 2};
  static amountTextPositionRange = {start: 3, end: 7};

  render() {
    log.debug('Render JsonProcessor')
    if (!this.props.tgMessages.length) return (<div data-testid="empty-jsp"></div>)

    log.debug('Filtering non staking messages')
    const ignoredMessages: TelegramMessage[] = []
    const stakingMessages: TelegramMessage[] = []
    this.props.tgMessages.forEach((message) => {
      if (typeof (message.text[0]) === "string"
        && message.text[0] === "Today's ")
        stakingMessages.push(message)
      else ignoredMessages.push(message)
    });
    log.debug(`Found ${stakingMessages.length} Staking messages out of ${this.props.tgMessages.length} `)

    const stakingRewards = this.parseStakingRewards(stakingMessages)

    return (
      <div>
        Staking messages:
        <ul aria-label='stakingMessages'>
          {stakingRewards.map((message) =>
            <li key={message.date.toISOString()}>
              {message.date.toISOString()}: {message.amount}
            </li>
          )}
        </ul>

        Ignored messages:
        <ul aria-label='ignoredMessages'>
          {ignoredMessages.map((message) => <li key={message.id}>{message.id}</li>)}

        </ul>
      </div>
    );
  }

  parseStakingRewards(messages: TelegramMessage[]): StakingReward[] {
    log.debug('Parsing dates and amounts from telegram texts')
    return messages.map((message) => {
      return {date: this.parseDate(message), amount: this.parseAmount(message)}
    })
  }

  parseDate(message: TelegramMessage) {
    const dateSubText = message.text
      .slice(JsonProcessor.dateTextPositionRange.start,
        JsonProcessor.dateTextPositionRange.end)[0] as TelegramSubtext
    return new Date(dateSubText.text)
  }

  parseAmount(message: TelegramMessage) {
    let amountSubTexts = message.text
      .slice(JsonProcessor.amountTextPositionRange.start,
        JsonProcessor.amountTextPositionRange.end)
    let amountSubstrings: string[] = amountSubTexts.map((subText) => {
      if (typeof (subText) === "string") return subText
      return subText.text
    })

    //Amount string contains a trailing ' BNB (' in subtext 3
    //Hence we remove before converting it to a number
    amountSubstrings[3] = amountSubstrings[3].slice(0, -6)
    return Number(amountSubstrings.join(''))
  }
}
export default JsonProcessor;
