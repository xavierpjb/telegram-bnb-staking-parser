type TelegramExport = {
  name: string
  type: string
  id: number
  messages: TelegramMessage[]
}

type TelegramMessage = {
  id: number
  type: string
  date: Date
  from: string
  from_id: string
  text: TelegramText[]
}

type TelegramText = string | TelegramSubtext

type TelegramSubtext = {type:string, text:string}

export type {TelegramExport, TelegramMessage, TelegramText, TelegramSubtext};
