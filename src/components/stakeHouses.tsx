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
  const { stakeHouseWithSyndicate, isLoading } = useStakehouses();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <>
      {isLoading ? (
        <Box minHeight="765px">
          <Spinner color="white" />
        </Box>
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
              <Box minHeight="680px">
                <StakeHouseTable data={stakeHouseWithSyndicate} />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box minHeight="680px">
                <StakeHouseCharts data={stakeHouseWithSyndicate} />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </>
  );
}

export default StakeHouses;
