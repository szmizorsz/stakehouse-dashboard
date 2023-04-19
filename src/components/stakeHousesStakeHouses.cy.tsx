import React from "react";
import StakeHouses from "./stakeHouses";
import stakehouses from "@/cypress/fixtures/stakeHouses.json";

describe("useStakehouses", () => {
  it("returns mocked data", () => {
    const mockedResponse = {
      data: {
        stakehouses: stakehouses,
      },
    };

    cy.intercept(
      "https://api.thegraph.com/subgraphs/name/bswap-eng/stakehouse-protocol",
      (req) => {
        if (req.body.operationName === "StakeHousesQuery") {
          req.reply(mockedResponse);
        }
      }
    ).as("graphql");

    cy.mount(<StakeHouses />);
    cy.wait("@graphql").then((interception) => {
      // assertions on the component that uses the hook
    });
  });
});
