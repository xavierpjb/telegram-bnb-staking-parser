import {TelegramMessage, TelegramExport} from '../models/Telegram-Export.model';

let telegramExportSample: TelegramExport = {
  name: "Mock Telegram Export",
  type: "mock_typ",
  id: 1672546523,
  messages: [
    {
      id: 1,
      type: "message",
      date: new Date("2021-12-04T08:46:06"),
      from: "Joe Mama",
      from_id: "mock user",
      text: [
        "This should be ignored",
      ]
    },
    {
      id: 12,
      type: "message",
      date: new Date("2021-12-09T19:07:33"),
      from: "BSC Staking Bot",
      from_id: "user1672546523",
      text: [
        "Today's ",
        {
          "type": "bold",
          "text": "2021-12-9"
        },
        " staking:\nEarned ",
        {
          "type": "bold",
          "text": "0"
        },
        ".",
        {
          "type": "bold",
          "text": "00"
        },
        "292682 BNB (",
        {
          "type": "bold",
          "text": "1.68"
        },
        "$ at price ",
        {
          "type": "bold",
          "text": "573.73"
        },
        "$)\n\nTotal staking status: ",
        {
          "type": "bold",
          "text": "9"
        },
        " BNB\nTotal inactive staking: ",
        {
          "type": "bold",
          "text": "0"
        },
        " BNB\nTotal unbounding: ",
        {
          "type": "bold",
          "text": "0"
        },
        " BNB\nFor more details check: ",
        {
          "type": "bot_command",
          "text": "/status"
        }
      ]
    },
    {
      id: 71,
      type: "message",
      date: new Date("2022-01-26T19:06:33"),
      from: "BSC Staking Bot",
      from_id: "user1672546523",
      text: [
        "Today's ",
        {
          "type": "bold",
          "text": "2022-1-26"
        },
        " staking:\nEarned ",
        {
          "type": "bold",
          "text": "0"
        },
        ".",
        {
          "type": "bold",
          "text": "00"
        },
        "109348 BNB (",
        {
          "type": "bold",
          "text": "0.41"
        },
        "$ at price ",
        {
          "type": "bold",
          "text": "376.8"
        },
        "$)\n\nTotal available to stake: ",
        {
          "type": "bold",
          "text": "2"
        },
        ".",
        {
          "type": "bold",
          "text": "12"
        },
        "166524 BNB\nTotal staking status: ",
        {
          "type": "bold",
          "text": "7.5"
        },
        " BNB\nTotal inactive staking: ",
        {
          "type": "bold",
          "text": "3"
        },
        " BNB\nTotal unbounding: ",
        {
          "type": "bold",
          "text": "0"
        },
        " BNB\nFor more details check: ",
        {
          "type": "bot_command",
          "text": "/status"
        }
      ]
    }
  ]
}
export default telegramExportSample;
