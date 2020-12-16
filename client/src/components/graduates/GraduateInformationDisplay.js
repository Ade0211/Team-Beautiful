import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col} from "react-bootstrap";
import ShowMoreText from "react-show-more-text";




const GraduateInformationDisplay = () => {

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };
  const [graduate, setGraduate] = useState();
  const { _id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/api/graduates/${_id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setGraduate(data);
      });
  }, [_id]);

  console.log(graduate, "------");

  if (!graduate) {
    return null;
  }
  return (
    <Modal.Dialog className="border-dark">
      <Modal.Header>
        <Modal.Title>
          <Container>
            <Row className="rows">
              <Col className="columns">
                <h1 className="display-4">{graduate.fullname}</h1>
              </Col>
            </Row>
            <Row className="rows">
              <Col className="columns">
                <h4>{graduate.headline}</h4>
              </Col>
            </Row>
          </Container>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="rows ">
          <Col className="columns " sm={5}>
            Location: {graduate.current_location}
          </Col>

          <Button size="sm" variant="warning" className="mr-2">
            Open to relocation
          </Button>

          <Button variant="success" size="sm">
            Open to remote
          </Button>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col>

           {graduate.full_time ? "Full Time" : ""}
            {graduate.part_time ?"Part Time" : ""}
           {graduate.contract ? "Contract" :""}
           {graduate.temp ? "Temp" : ""}
          </Col>
        </Row>

        <p class="font-italic">Languages: {graduate.languages}</p>
        <hr />
        <Container className="justify-content-center">
          <Row className="rows">
            {" "}
            <hr />
            <Col xs={6} md={4} className="col-xs-6 mr-5 mb-3">
              <i class="fab fa-linkedin fa-2x"></i>
              <a className="ml-2" style={{ fontSize: "65%" }} target= "_blank" rel="noreferrer" href={graduate.linkedin}>
                linkedIn
              </a>
            </Col>
            <Col className="col-xs-4 ">
              <i class="fas fa-globe fa-2x"></i>
              <a className="ml-2" style={{ fontSize: "70%" }} href={graduate.website} >
                {graduate.website}
              </a>
            </Col>
          </Row>
          <Row className="rows">
            <hr />
            <Col xs={6} md={4} className="columns mr-5">
              <i class="fas fa-file-csv fa-2x"></i>
              <a className="ml-2" style={{ fontSize: "80%" }} href ={graduate.resume}>
                cv {graduate.resume}
              </a>
            </Col>
            <Col className="columns">
              <i class="fab fa-github fa-2x"></i>
              <a className="ml-2" style={{ fontSize: "70%" }} href={graduate.github}>
                github {graduate.GitHub}
              </a>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <ShowMoreText
            lines={3}
            more={
              <button type="button" class="btn btn-primary btn-sm">
                Show more
              </button>
            }
            less={
              <button type="button" class="btn btn-primary btn-sm">
                Show less
              </button>
            }
            className="content-css"
            anchorClass="my-anchor-css-class"
            onClick={executeOnClick}
            expanded={false}
            width={400}
          >
            <p>{graduate.resume_textarea}</p>
          </ShowMoreText>
        </Container>
      </Modal.Body>
    </Modal.Dialog>
  );
};
export default GraduateInformationDisplay;
