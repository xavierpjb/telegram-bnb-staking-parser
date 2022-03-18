import React, {Component} from 'react';
import {log4TSProvider} from "../../config/LogConfig";
import {StakingReward, StakingYearGroup} from "../../models/StakeReward.model";
import moment from 'moment'
import {saveAs} from 'file-saver'

enum Format {
  CoinLedger
}

interface StakingRewardExportProps {
  stakingYearGroup: StakingYearGroup,
  format: Format,
  onExport?: Function
}
const log = log4TSProvider.getLogger("stakingRewardsView")
class StakingRewardExport extends Component<StakingRewardExportProps>{
  render() {
    return (
      <div>
        {this.props.stakingYearGroup.year}
        <button onClick={this.onExport}>Export</button>
      </div>
    )
  }

  onExport = () => {
    log.debug('Export clicked')
    let entries = this.props.stakingYearGroup.stakingRewards.map((result) => {
      return this.formatter(result)
    })

    let csv = this.convertToCSV(entries)
    let blob = new Blob([csv], {type: "text/plain;charset=utf-8"})

    this.props.onExport ?
      this.props.onExport(csv) :
      saveAs(blob, `BNB staking ${this.props.stakingYearGroup.year}.csv`)
  }

  formatter = (entry: StakingReward) => {
    switch (this.props.format) {
      case Format.CoinLedger: {
        return {
          "Coin Symbol": "BNB",
          "Amount": entry.amount,
          "Timestamp": moment.utc(entry.date).format('MM/DD/YYYY 00:00:00'),
          "Incoming Type": "Staking"
        }
      }
    }
  }

  convertToCSV(arr: any[]): string {
    const array = [Object.keys(arr[0])].concat(arr)

    return array.map(it => {
      return Object.values(it).toString()
    }).join('\n')
  }
}
export {StakingRewardExport, Format}
