import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CountryCard({ country }) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        style={{
          width: "15rem",
          height: "10rem",
          objectFit: "cover",
          padding: "5px",
        }}
        variant="top"
        src={country.countryInfo.flag}
        alt={country.country}
      />
      <Card.Body>
        <Card.Title style={{ margin: "0", textAlign: "center" }}>
          {country.country}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush shadow-sm rounded">
        <ListGroup.Item>Active : {country.active}</ListGroup.Item>
        <ListGroup.Item>Critical : {country.critical}</ListGroup.Item>
        <ListGroup.Item>Deaths Today : {country.todayDeaths}</ListGroup.Item>
        <ListGroup.Item>
          Recovered Today : {country.todayRecovered}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CountryCard;
