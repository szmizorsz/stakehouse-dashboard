import React, { useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";
import {
  StakeHousesQueryDocument,
  StakeHousesQueryQuery,
  execute,
} from "../../.graphclient";
import { truncateString } from "@/util/stringUtil";

type StakeHouseChartsProps = {
  data: StakeHousesQueryQuery | null | undefined;
};

const StakeHouseTable: React.FC<StakeHouseChartsProps> = ({ data }) => {
  const tableCellStyle = {
    color: "white",
  };

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th style={tableCellStyle}>Id</Th>
          <Th style={tableCellStyle}>Brand ID</Th>
          <Th style={tableCellStyle}>Knots</Th>
          <Th style={tableCellStyle}>dETH minted</Th>
          <Th style={tableCellStyle}>Sticker</Th>
          <Th style={tableCellStyle}>Slot Slashed</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.stakeHouses.map((sh) => (
          <Tr key={sh.id}>
            <Td style={tableCellStyle}>{truncateString(sh.id)}</Td>
            <Td style={tableCellStyle}>{sh.foundedBrandId}</Td>
            <Td style={tableCellStyle}>{sh.numberOfKnots}</Td>
            <Td style={tableCellStyle}>{sh.dETHMintedWithinHouse}</Td>
            <Td style={tableCellStyle}>{sh.sETHTicker}</Td>
            <Td style={tableCellStyle}>{sh.totalAmountOfSlotSlashed}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default StakeHouseTable;
