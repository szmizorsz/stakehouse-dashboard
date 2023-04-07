import React, { useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";
// ...
// we import types and typed-graphql document from the generated code (`..graphclient/`)
import {
  StakeHousesQueryDocument,
  StakeHousesQueryQuery,
  execute,
} from "../../.graphclient";

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
              <Th style={tableCellStyle}>Founded Brand ID</Th>
              <Th style={tableCellStyle}>Nr Of Knots</Th>
              <Th style={tableCellStyle}>dETH minted</Th>
              <Th style={tableCellStyle}>sETH sticker</Th>
              <Th style={tableCellStyle}>Total Amount of Slot Slashed</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.stakeHouses.map((sh) => (
              <Tr key={sh.id}>
                <Td style={tableCellStyle}>{sh.id}</Td>
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
