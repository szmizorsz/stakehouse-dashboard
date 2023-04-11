import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { StakeHousesQueryQuery } from "../../.graphclient";
import { truncateString } from "@/util/stringUtil";

type StakeHouseChartsProps = {
  data: StakeHousesQueryQuery | null | undefined;
};

const StakeHouseTable: React.FC<StakeHouseChartsProps> = ({ data }) => {
  const tableCellStyle = {
    color: "white",
  };

  const [currentPage, setCurrentPage] = useState(0);
  const elementsPerPage = 10;

  const dataSlice = data?.stakeHouses.slice(
    currentPage * elementsPerPage,
    (currentPage + 1) * elementsPerPage
  );

  useEffect(() => {
    setCurrentPage(0); // Reset to the first page when data changes
  }, [data]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
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
          {dataSlice?.map((sh) => (
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={8}
      >
        <Text mb={2}>
          Showing {currentPage * elementsPerPage + 1} to{" "}
          {Math.min(
            (currentPage + 1) * elementsPerPage,
            data?.stakeHouses.length || 0
          )}{" "}
          of {data?.stakeHouses.length || 0} entries
        </Text>
        <Box display="flex">
          <Button
            onClick={handlePrevPage}
            isDisabled={currentPage === 0}
            mr={2}
          >
            Prev
          </Button>
          <Button
            onClick={handleNextPage}
            isDisabled={
              (currentPage + 1) * elementsPerPage >=
              (data?.stakeHouses.length || 0)
            }
          >
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default StakeHouseTable;
