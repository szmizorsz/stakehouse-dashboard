import React, { useEffect } from "react";
import {
  StakeHousesQueryDocument,
  StakeHousesQueryQuery,
  SyndicatesQueryDocument,
  SyndicatesQueryQuery,
  execute,
  StakeHouse,
  Syndicate,
  LiquidStakingNetwork,
  Payout,
} from "../../.graphclient";

export interface StakeHouseWithSyndicate
  extends Pick<
    StakeHouse,
    | "dETHMintedWithinHouse"
    | "numberOfKnots"
    | "numberOfRageQuitKnots"
    | "foundedBrandId"
    | "id"
    | "index"
    | "sETH"
    | "totalAmountOfSlotSlashed"
    | "sETHTicker"
  > {
  syndicate?: Pick<
    Syndicate,
    "totalPayout" | "totalFeesAndMevPayout" | "totalNodeOperatorPayout"
  > & {
    liquidStakingNetwork: Pick<LiquidStakingNetwork, "ticker">;
    payouts: Pick<Payout, "amount" | "timestamp" | "type">[];
  };
}

export type StakeHousesWithSyndicateQueryQuery = {
  stakeHouses: Array<StakeHouseWithSyndicate>;
};

export function useStakehouses() {
  const [stakeHouseData, setStakeHouseDataData] =
    React.useState<StakeHousesQueryQuery>();
  const [syndicatesData, setSyndicatesData] =
    React.useState<SyndicatesQueryQuery>();
  const [stakeHouseWithSyndicate, setStakeHouseWithSyndicate] =
    React.useState<StakeHousesWithSyndicateQueryQuery>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    execute(StakeHousesQueryDocument, {}).then((result) => {
      setStakeHouseDataData(result?.data);
    });
  }, []);

  useEffect(() => {
    execute(SyndicatesQueryDocument, {}).then((result) => {
      setSyndicatesData(result?.data);
    });
  }, []);

  useEffect(() => {
    if (stakeHouseData && syndicatesData) {
      const stakeHousesWithSyndicate: StakeHouseWithSyndicate[] =
        stakeHouseData.stakeHouses.map((stakeHouse) => ({
          ...stakeHouse,
          syndicate: undefined,
        }));

      for (const stakeHouse of stakeHousesWithSyndicate) {
        for (const syndicate of syndicatesData.syndicates) {
          if (
            stakeHouse.sETHTicker.substring(1, stakeHouse.sETHTicker.length) ===
            syndicate.liquidStakingNetwork.ticker
          ) {
            stakeHouse.syndicate = syndicate;
            break;
          }
        }
      }

      setStakeHouseWithSyndicate({
        stakeHouses: stakeHousesWithSyndicate,
      });
      setIsLoading(false);
    }
  }, [stakeHouseData, syndicatesData]);

  return { stakeHouseWithSyndicate, isLoading };
}
