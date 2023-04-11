import React, { useEffect } from "react";
import {
  StakeHousesQueryDocument,
  StakeHousesQueryQuery,
  execute,
} from "../../.graphclient";

export function useStakehouses() {
  const [data, setData] = React.useState<StakeHousesQueryQuery>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    execute(StakeHousesQueryDocument, {}).then((result) => {
      setData(result?.data);
      setIsLoading(false);
    });
  }, [setData]);

  return { data, isLoading };
}
