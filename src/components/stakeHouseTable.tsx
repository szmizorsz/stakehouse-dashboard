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
  HStack,
} from "@chakra-ui/react";
import { truncateString, formatNumber } from "@/util/stringUtil";
import { StakeHousesWithSyndicateQueryQuery } from "@/hooks/useStakehouses";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

type StakeHouseChartsProps = {
  data: StakeHousesWithSyndicateQueryQuery | null | undefined;
};

type StakeHouse = NonNullable<
  StakeHousesWithSyndicateQueryQuery["stakeHouses"]
>[number];

const StakeHouseTable: React.FC<StakeHouseChartsProps> = ({ data }) => {
  const tableCellStyle = {
    color: "white",
  };

  const sortableColumnStyle = {
    ...tableCellStyle,
    cursor: "pointer",
    textDecoration: "underline",
  };

  const [currentPage, setCurrentPage] = useState(0);
  const elementsPerPage = 10;

  const [sortConfig, setSortConfig] = useState<{
    key: keyof StakeHouse | "syndicate.totalPayout" | null;
    direction: "asc" | "desc";
  }>({ key: "syndicate.totalPayout", direction: "desc" });

  const customSort = (
    a: StakeHouse,
    b: StakeHouse,
    key: keyof StakeHouse | "syndicate.totalPayout",
    direction: "asc" | "desc"
  ) => {
    let aValue: number;
    let bValue: number;

    if (key === "syndicate.totalPayout") {
      aValue = a.syndicate?.totalPayout ?? 0;
      bValue = b.syndicate?.totalPayout ?? 0;
    } else {
      aValue = (a[key] as unknown as number) ?? 0;
      bValue = (b[key] as unknown as number) ?? 0;
    }

    return direction === "asc" ? aValue - bValue : bValue - aValue;
  };

  const sortedData = React.useMemo(() => {
    if (!data?.stakeHouses || !sortConfig.key) return data?.stakeHouses;
    return [...data.stakeHouses].sort((a, b) => {
      return customSort(a, b, sortConfig.key, sortConfig.direction);
    });
  }, [data, sortConfig]);

  const dataSlice = sortedData?.slice(
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

  const handleSort = (key: keyof StakeHouse | "syndicate.totalPayout") => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          ...prev,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th style={tableCellStyle}>Id</Th>
            <Th style={tableCellStyle}>Brand ID</Th>
            <Th
              style={sortableColumnStyle}
              onClick={() => handleSort("numberOfKnots")}
            >
              <HStack spacing={1}>
                <Text>Knots</Text>
                {sortConfig.key === "numberOfKnots" ? (
                  sortConfig.direction === "asc" ? (
                    <TriangleUpIcon />
                  ) : (
                    <TriangleDownIcon />
                  )
                ) : (
                  <TriangleDownIcon opacity={0.3} />
                )}
              </HStack>
            </Th>
            <Th
              style={sortableColumnStyle}
              onClick={() => handleSort("dETHMintedWithinHouse")}
            >
              <HStack spacing={1}>
                <Text>dETH minted</Text>
                {sortConfig.key === "dETHMintedWithinHouse" ? (
                  sortConfig.direction === "asc" ? (
                    <TriangleUpIcon />
                  ) : (
                    <TriangleDownIcon />
                  )
                ) : (
                  <TriangleDownIcon opacity={0.3} />
                )}
              </HStack>
            </Th>
            <Th style={tableCellStyle}>Sticker</Th>
            <Th
              style={sortableColumnStyle}
              onClick={() => handleSort("totalAmountOfSlotSlashed")}
            >
              <HStack spacing={1}>
                <Text>Slot Slashed</Text>
                {sortConfig.key === "totalAmountOfSlotSlashed" ? (
                  sortConfig.direction === "asc" ? (
                    <TriangleUpIcon />
                  ) : (
                    <TriangleDownIcon />
                  )
                ) : (
                  <TriangleDownIcon opacity={0.3} />
                )}
              </HStack>
            </Th>
            <Th
              style={sortableColumnStyle}
              onClick={() => handleSort("syndicate.totalPayout")}
            >
              <HStack spacing={1}>
                <Text>Payout</Text>
                {sortConfig.key === "syndicate.totalPayout" ? (
                  sortConfig.direction === "asc" ? (
                    <TriangleUpIcon />
                  ) : (
                    <TriangleDownIcon />
                  )
                ) : (
                  <TriangleDownIcon opacity={0.3} />
                )}
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataSlice?.map((sh) => (
            <Tr key={sh.id}>
              <Td style={tableCellStyle}>{truncateString(sh.id)}</Td>
              <Td style={tableCellStyle}>{sh.foundedBrandId}</Td>
              <Td style={tableCellStyle}>{sh.numberOfKnots}</Td>
              <Td style={tableCellStyle}>
                {sh.dETHMintedWithinHouse
                  ? formatNumber(sh.dETHMintedWithinHouse)
                  : ""}
              </Td>
              <Td style={tableCellStyle}>{sh.sETHTicker}</Td>
              <Td style={tableCellStyle}>
                {sh.totalAmountOfSlotSlashed
                  ? formatNumber(sh.totalAmountOfSlotSlashed)
                  : ""}
              </Td>
              <Td style={tableCellStyle}>
                {sh.syndicate?.totalPayout
                  ? formatNumber(sh.syndicate?.totalPayout)
                  : ""}
              </Td>
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
            sortedData?.length || 0
          )}{" "}
          of {sortedData?.length || 0} entries
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
              (currentPage + 1) * elementsPerPage >= (sortedData?.length || 0)
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
