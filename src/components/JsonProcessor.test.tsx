import React from 'react';
import JsonProcessor from './JsonProcessor';
import telegramExportSampe from './TelegramExport.sample';
import {render, within, screen, waitFor} from '@testing-library/react';
import {TelegramMessage} from '../models/Telegram-Export.model'


describe('Telegram export processing', () => {
  let mockTGMessages: TelegramMessage[] = telegramExportSampe.messages

  test('No messages', () => {
    render(<JsonProcessor tgMessages={[]} />)
    const linkElement = screen.getByTestId('empty-jsp')
    expect(linkElement).toBeInTheDocument();
  })

  test('Message classification', () => {
    render(<JsonProcessor tgMessages={mockTGMessages} />)

    // Get Staking list
    const stakinglist = screen.getByRole("list", {
      name: /stakingMessages/i
    });
    let {getAllByRole} = within(stakinglist)
    const stakingItems = getAllByRole("listitem")
    expect(stakingItems.length).toBe(2)

    //Get Ignored list
    const ignoredList = screen.getByRole("list", {
      name: /ignoredMessages/i
    });
    ({getAllByRole} = within(ignoredList))
    const ignoredItems = getAllByRole("listitem")
    expect(ignoredItems.length).toBe(1)

  })

  test('Parsing Validation', () => {
    render(<JsonProcessor tgMessages={mockTGMessages} />)
    const stakinglist = screen.getByRole("list", {
      name: /stakingMessages/i
    });
    expect(stakinglist).toMatchInlineSnapshot(`
    <ul
      aria-label="stakingMessages"
    >
      <li>
        2021-12-09T05:00:00.000Z
        : 
        0.00292682
      </li>
      <li>
        2022-01-26T05:00:00.000Z
        : 
        0.00109348
      </li>
    </ul>
    `)
  })

})
