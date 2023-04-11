import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { Box, Flex } from "@chakra-ui/react";
import { StakeHouse, StakeHousesQueryQuery } from "../../.graphclient";

type StakeHouseChartsProps = {
  data: StakeHousesQueryQuery | null | undefined;
};

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.color = "white";

const StakeHouseCharts: React.FC<StakeHouseChartsProps> = ({ data }) => {
  const [topKnots, setTopKnots] = useState<
    Array<
      Pick<
        StakeHouse,
        | "dETHMintedWithinHouse"
        | "numberOfKnots"
        | "numberOfRageQuitKnots"
        | "foundedBrandId"
        | "id"
        | "index"
        | "sETH"
        | "totalAmountOfSlotSlashed"
        | "sETHTicker"
      >
    >
  >([]);
  const [topDeth, setTopDeth] = useState<
    Array<
      Pick<
        StakeHouse,
        | "dETHMintedWithinHouse"
        | "numberOfKnots"
        | "numberOfRageQuitKnots"
        | "foundedBrandId"
        | "id"
        | "index"
        | "sETH"
        | "totalAmountOfSlotSlashed"
        | "sETHTicker"
      >
    >
  >([]);

  useEffect(() => {
    if (data && data.stakeHouses) {
      const sortedKnots = [...data.stakeHouses]
        .sort((a, b) => Number(b.numberOfKnots) - Number(a.numberOfKnots))
        .slice(0, 10);
      const sortedDeth = [...data.stakeHouses]
        .sort(
          (a, b) =>
            Number(b.dETHMintedWithinHouse) - Number(a.dETHMintedWithinHouse)
        )
        .slice(0, 10);

      setTopKnots(sortedKnots);
      setTopDeth(sortedDeth);
      console.log("topKnots", topKnots);
      console.log("topDeth", topDeth);
    }
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
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

  const knotsChart = {
    labels: topKnots.map((house) => house.sETHTicker),
    datasets: [
      {
        label: "Number of Knots",
        data: topKnots.map((house) => Number(house.numberOfKnots)),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const dethChart = {
    labels: topDeth.map((house) => house.sETHTicker),
    datasets: [
      {
        label: "dETH Minted Within House",
        data: topDeth.map((house) => Number(house.dETHMintedWithinHouse)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        color: "white",
      },
    ],
  };

  return (
    <Flex justifyContent="space-evenly" alignItems="center" p={4}>
      <Box width="40%" height="400px">
        <Bar data={knotsChart} options={options} />
      </Box>
      <Box width="40%" height="400px">
        <Doughnut data={dethChart} />
      </Box>
    </Flex>
  );
};

export default StakeHouseCharts;
