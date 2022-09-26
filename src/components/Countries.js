import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import axios from "../axios/axios.js";
import requests from "../axios/requests.js";
import CountryCard from "./CountryCard.js";
import Search from "./Search.js";

function Countries() {
  const [country, setCountries] = useState();
  const [filterCountry, setFilterCountry] = useState();
  async function getAllData() {
    await axios
      .get(requests.base + requests.countries)
      .then((response) => {
        setCountries(response.data);
        setFilterCountry(response.data);
      })
      .catch((error) => setCountries(false));
  }
  function userInput(str) {
    let newFilter = country.filter((nation) => {
      return nation.country.toLowerCase().match(str);
    });
    setFilterCountry(newFilter);
  }
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className="container">
      <Search userInput={userInput} />
      <div className="d-flex flex-wrap gap-5 justify-content-evenly">
        {filterCountry ? (
          filterCountry.map((single) => {
            return <CountryCard key={single.country} country={single} />;
          })
        ) : (
          <div className="d-flex justify-content-center gap-3 mt-5">
            <Button variant="dark" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Countries;
