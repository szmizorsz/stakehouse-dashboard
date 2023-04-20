import React from "react";
import { Syndicate, LiquidStakingNetwork, Payout } from "../../.graphclient";
import { Box, Text, HStack } from "@chakra-ui/react";
import { formatNumber, timestampToDate } from "@/util/stringUtil";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";

type PayoutDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  syndicate?: Pick<
    Syndicate,
    "totalPayout" | "totalFeesAndMevPayout" | "totalNodeOperatorPayout"
  >;
  liquidStakingNetwork?: Pick<LiquidStakingNetwork, "ticker">;
  payouts?: Pick<Payout, "amount" | "timestamp" | "type">[];
};

const PayoutDetails: React.FC<PayoutDetailsProps> = ({
  isOpen,
  onClose,
  syndicate,
  liquidStakingNetwork,
  payouts,
}) => {
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  const payoutsChart = {
    labels: payouts?.map((py) => timestampToDate(py.timestamp)),
    datasets: [
      {
        label: "Payout",
        data: payouts?.map((py) => formatNumber(py.amount)),
        backgroundColor: payouts?.map((py) =>
          py.type === "NODE_OPERATOR"
            ? "rgba(75, 192, 192, 0.5)"
            : "rgba(255, 99, 132, 0.5)"
        ),
        borderColor: payouts?.map((py) =>
          py.type === "NODE_OPERATOR"
            ? "rgba(75, 192, 192, 0.5)"
            : "rgba(255, 99, 132, 0.5)"
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor="grey">
        <ModalHeader color="white">
          Payout Details: {liquidStakingNetwork?.ticker}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Text>
              Total Payout:{" "}
              {syndicate?.totalPayout && formatNumber(syndicate?.totalPayout)}
            </Text>

            <HStack>
              <Box
                bg="#ff63847f"
                width="1em"
                height="1em"
                display="inline-flex"
                marginRight="0.5em"
              />
              <Text>Total Fees and MEV Payout: </Text>
              <Text>
                {syndicate?.totalFeesAndMevPayout &&
                  formatNumber(syndicate?.totalFeesAndMevPayout)}
              </Text>
            </HStack>
            <HStack>
              <Box
                bg="#4bc0c07f"
                width="1em"
                height="1em"
                display="inline-flex"
                marginRight="0.5em"
              />
              <Text>Total Node Operator Payout: </Text>
              <Text>
                {syndicate?.totalNodeOperatorPayout &&
                  formatNumber(syndicate?.totalNodeOperatorPayout)}
              </Text>
            </HStack>
          </Box>
          <Bar data={payoutsChart} options={barOptions} height="200px" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PayoutDetails;
