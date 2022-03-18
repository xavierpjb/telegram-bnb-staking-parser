import React from 'react';
import {render, screen, within} from '@testing-library/react'
import  ShallowRenderer  from 'react-test-renderer/shallow';
import StakingRewardView from './StakingRewardView';

describe('Staking Rewards View', () => {
  test('No staking rewards', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<StakingRewardView stakingRewards={[]}/>)
    expect(renderer.getRenderOutput()).toBeNull()
  })

  test('Staking By year', () => {
    let mockStakingRewards = [
      {date: new Date(2021,2), amount: 1},
      {date: new Date(2022, 2), amount: 2},
      {date: new Date(2022, 3), amount: 2}
    ]
    render(<StakingRewardView stakingRewards={mockStakingRewards}/>)
    const yearList = screen.getByRole("list", {
      name: /groupByYear/i
    })
    let {getAllByRole} = within(yearList)
    const stakingItems = getAllByRole("listitem")
    expect(stakingItems.length).toBe(2)
  })

})
