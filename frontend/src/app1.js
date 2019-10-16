import React, { useContext } from "react";
import App2 from "./app2";
import MyContext from "./import";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const EXCHANGE_RATES = gql`
  query {
    persons(where: { lastname_contains: "e" }) {
      firstname
      lastname
      email
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.persons.map(({ firstname, lastname, email }) => (
    <div key={email}>
      <p>
        {firstname}: {lastname}
      </p>
    </div>
  ));
}

export default ExchangeRates;
