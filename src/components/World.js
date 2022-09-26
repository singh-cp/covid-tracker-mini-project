import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "../axios/axios.js";
import requests from "../axios/requests.js";
import Spinner from "react-bootstrap/Spinner";

function World() {
  const [world, setWorld] = useState();
  const [update, setUpdate] = useState();
  async function getAllData() {
    await axios
      .get(requests.base + requests.all)
      .then((response) => {
        setWorld(response.data);
        setUpdate(new Date(parseInt(response.data.updated)).toString());
      })
      .catch((error) => setWorld(false));
  }
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className="container">
      {world ? (
        <React.Fragment>
          <CardGroup>
            <Card
              bg="dark"
              text={"white"}
              className="text-center m-2 shadow-lg rounded"
            >
              <Card.Body>
                <Card.Title>Active Cases</Card.Title>
                <Card.Text>{world.active}</Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg="warning"
              text={"white"}
              className="text-center m-2 shadow-lg rounded"
            >
              <Card.Body>
                <Card.Title>Critical Cases</Card.Title>
                <Card.Text>{world.critical}</Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg="danger"
              text={"white"}
              className="text-center m-2 shadow-lg rounded"
            >
              <Card.Body>
                <Card.Title>Deaths Today</Card.Title>
                <Card.Text>{world.todayDeaths}</Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg="success"
              text={"white"}
              className="text-center m-2 shadow-lg rounded"
            >
              <Card.Body>
                <Card.Title>Recovered Today</Card.Title>
                <Card.Text>{world.todayRecovered}</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <h2 className="h5 text-center">Last Updated : {update}</h2>
        </React.Fragment>
      ) : (
        <div className="d-flex justify-content-around align-items-center">
          <Spinner animation="border" size="lg" />
          <Spinner animation="border" size="lg" />
          <Spinner animation="border" size="lg" />
          <Spinner animation="border" size="lg" />
        </div>
      )}
    </div>
  );
}

export default World;
