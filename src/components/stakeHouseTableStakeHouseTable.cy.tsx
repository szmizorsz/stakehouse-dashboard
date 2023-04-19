import React from "react";
import StakeHouseTable from "./stakeHouseTable";

describe("<StakeHouseTable />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StakeHouseTable data={{ stakeHouses: [] }} />);
  });
});
