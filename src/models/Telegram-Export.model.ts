type TelegramChat = {
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

type TelegramText = {
  token: string | Subtext
}
type Subtext = {
  type: string
  text: string
}
export type {TelegramChat, TelegramMessage, TelegramText, Subtext};
