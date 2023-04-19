import React from "react";
import StakeHouseCharts from "./stakeHouseCharts";

describe("<StakeHouseCharts />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StakeHouseCharts data={{ stakeHouses: [] }} />);
  });
});
