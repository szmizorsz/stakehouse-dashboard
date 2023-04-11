import React, { useState } from "react";
import {
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";

import StakeHouseCharts from "./stakeHouseCharts";
import StakeHouseTable from "./stakeHouseTable";
import { useStakehouses } from "@/hooks/useStakehouses";

function StakeHouses() {
  const { data, isLoading } = useStakehouses();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Tabs
          index={activeTab}
          onChange={handleTabChange}
          variant="soft-rounded"
          colorScheme="blue"
          isFitted
          align="center"
        >
          <TabList mb={4}>
            <Tab _selected={{ color: "white", bg: "blue.800" }}>
              Stakehouses
            </Tab>
            <Tab _selected={{ color: "white", bg: "blue.800" }}>Charts</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <StakeHouseTable data={data} />
            </TabPanel>
            <TabPanel>
              <Box minHeight="680px">
                <StakeHouseCharts data={data} />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </>
  );
}

export default StakeHouses;
