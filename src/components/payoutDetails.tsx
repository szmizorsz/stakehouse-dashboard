import React from "react";
import { Syndicate, LiquidStakingNetwork, Payout } from "../../.graphclient";
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { formatNumber, timestampToDate } from "@/util/stringUtil";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
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
        label: "Payouts",
        data: payouts?.map((py) => formatNumber(py.amount)),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
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
            <Text>
              Total Fees and MEV Payout:{" "}
              {syndicate?.totalFeesAndMevPayout &&
                formatNumber(syndicate?.totalFeesAndMevPayout)}
            </Text>
            <Text>
              Total Node Operator Payout:{" "}
              {syndicate?.totalNodeOperatorPayout &&
                formatNumber(syndicate?.totalNodeOperatorPayout)}
            </Text>
          </Box>
          <Bar data={payoutsChart} options={barOptions} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PayoutDetails;
