import React from 'react';
import {render, screen} from '@testing-library/react'
import {StakingRewardExport, Format} from './StakingRewardExport';
import userEvent from '@testing-library/user-event';

describe('Export Staking Reward', () => {
  let mockStakingYearGroup = {
    year: 2022,
    stakingRewards:
      [
        {date: new Date(2022, 2), amount: 2},
        {date: new Date(2022, 3), amount: 2},
        {date: new Date(2022, 4), amount: 1}
      ]
  }

  test('Proper Year displayed', () => {
    render(
      <StakingRewardExport
        stakingYearGroup={mockStakingYearGroup}
        format={Format.CoinLedger}
      />
    )
    const linkElement = screen.getByText(/2022/i);
    expect(linkElement).toBeInTheDocument();

  })

  test('Export Button', () => {
    let exp =
      "Coin Symbol,Amount,Timestamp,Incoming Type\n" +
      "BNB,2,03/01/2022 00:00:00,Staking\n" +
      "BNB,2,04/01/2022 00:00:00,Staking\n" +
      "BNB,1,05/01/2022 00:00:00,Staking"

    let mockExportFunc = jest.fn((csv: string) => {
      expect(csv).toBe(exp)
    })

    render(
      <StakingRewardExport
        stakingYearGroup={mockStakingYearGroup}
        format={Format.CoinLedger}
        onExport={mockExportFunc}
      />
    )

    userEvent.click(screen.getByText(/Export/i))
    expect(mockExportFunc.mock.calls.length).toBe(1)

  })
})
