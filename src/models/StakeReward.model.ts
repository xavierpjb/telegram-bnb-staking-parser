type StakingReward = {
  date: Date
  amount: number
}

type StakingYearGroup = {
  year: number
  stakingRewards: StakingReward[]
}
export type {StakingReward, StakingYearGroup};
