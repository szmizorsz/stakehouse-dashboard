## Syndicate data

1. I loaded the syndicate data from the Goerli subgraph and integrated it into the previous stakehouse dashboard by joining the syndicate.liquidStakingNetwork.ticker to stakehouse.sETHTicker.

2. For every stakehouse, we can now check the totalPayout in the stakehouses table. The table is now sortable on the number columns, including the totalPayout, and by default, it is sorted in descending order by the totalPayout. This way, we can rank stakehouses based on their earnings (execution layer tips and fees: MEV and fees, plus the node operator).

3. Since, under normal circumstances, the syndicate contract splits the network rewards between the MEV pool and the node operators by 50-50, any discrepancy is worth checking out. An icon is displayed to indicate the discrepancy. Based on my current understanding of the protocol, there can be differences that make sense. For example, the node operator can have smaller rewards due to leakage periods where they do not earn, while the MEV pool gets the rewards. However, there is an example where the node operator has a higher payout than the MEV pool, like in the case of the NIC stakehouse, for which I have no explanation.

4. The payout details are displayed in a modal, where the total payout is split between the MEV pool and the node operators. The discrepancy is visible there as well.

5. The list of payouts is also displayed as a histogram chart with different colors for the MEV pool and the node operators' payouts.

6. Technical details of joining the syndicate data to the stakehouse list:

- These two sets of data come from different subgraphs.
- I made the assumption that the ticker is unique, so I could join the data by the ticker.
- To be able to rank stakehouses by the payouts, I first loaded both datasets and joined them in the frontend.
- You can check the details in the useStakehouses hook.
- This is obviously not ideal, as performing these kinds of operations on the frontend is not optimal. However, I had no other choice for now. The longer-term solution would be to have a single subgraph that contains all the data. This subgraph should index both the stakehouse and the syndicate contracts and join or reference the relevant entities.
