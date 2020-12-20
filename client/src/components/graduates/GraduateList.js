import React, { useState, useEffect } from "react";
import { get } from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Container, CardDeck, Row } from "react-bootstrap";

const GraduateList = () => {
  const [graduates, setGraduates] = useState([]);

  useEffect(function () {
    async function getGraduates() {
      try {
        const response = await get("/api/graduates");
        setGraduates(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getGraduates();
  }, []);
  // let main = localStorage.getItem("item")
  // console.log(main)

  return (
    <>
      <div className="container">
        <h2>
          Graduates
          <Link to="/graduates/new" className="btn btn-primary float-right">
            Create Graduates
          </Link>
        </h2>
        <hr />
      </div>
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <CardDeck>
          {graduates.map((graduate) => {
            return (
              <Row>
                <Card
                  className="text-center"
                  style={{ flex: 1, width: "22rem" }}
                >
                  <Card.Header>{graduate.fullname}</Card.Header>
                  <Card.Body>
                    <Card.Title>{graduate.headline}</Card.Title>
                    <Card.Text>
                      <p>{graduate.current_location}</p>
                      <p>
                        {graduate.willing_remote
                          ? "Willing to Relocate"
                          : "Not Willing to Relocate"}
                      </p>
                      <p>
                        {graduate.willing_relocate
                          ? "Can work remotely"
                          : "Can't work remotely"}
                      </p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    {graduate.current_location}
                  </Card.Footer>
                </Card>
              </Row>
            );
          })}
        </CardDeck>
      </Container>
    </>
  );
};

export default GraduateList;
