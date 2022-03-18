import React, {Component} from 'react';
import {log4TSProvider} from "../../config/LogConfig";
import {StakingReward, StakingYearGroup} from "../../models/StakeReward.model";

const log = log4TSProvider.getLogger("stakingRewardsView")
class StakingRewardView extends Component<{stakingRewards: StakingReward[]}> {

  render() {
    log.debug("Render staking rewards")

    let stakingGroups = this.groupByYear(this.props.stakingRewards)
    if (stakingGroups.length === 0) return (null)

    return (
      <div>
        <ul aria-label="groupByYear">
          {stakingGroups.map((group) => <li key={group.year}>{group.year}</li>)}
        </ul>
      </div>
    )
  }

  groupByYear(stakingRewards: StakingReward[]) {
    log.debug("Grouping by years")

    let groups: StakingYearGroup[] = []
    if (stakingRewards.length === 0) return groups

    let currYear = stakingRewards[0].date.getUTCFullYear()
    groups.push({year: currYear, stakingRewards: []})

    // This assumes a sorted staking reward list
    stakingRewards.forEach((reward) => {
      let rewardYear = reward.date.getUTCFullYear()
      if (rewardYear !== currYear) {
        currYear = rewardYear
        groups.push({year: currYear, stakingRewards: []})
      }
      groups[groups.length - 1].stakingRewards.push(reward)
    })
    log.debug(`Found ${groups.length} groups`)

    return groups;
  }
}

export default StakingRewardView
