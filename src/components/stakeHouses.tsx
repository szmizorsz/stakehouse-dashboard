import React, { useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";
// ...
// we import types and typed-graphql document from the generated code (`..graphclient/`)
import {
  StakeHousesQueryDocument,
  StakeHousesQueryQuery,
  execute,
} from "../../.graphclient";
import { truncateString } from "@/util/stringUtil";

function StakeHouses() {
  const [data, setData] = React.useState<StakeHousesQueryQuery>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    execute(StakeHousesQueryDocument, {}).then((result) => {
      setData(result?.data);
      setIsLoading(false);
    });
  }, [setData]);

  const tableCellStyle = {
    color: "white",
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}

export default StakeHouses;
