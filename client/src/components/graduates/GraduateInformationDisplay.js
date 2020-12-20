import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Modal, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ShowMoreText from "react-show-more-text";


const GraduateInformationDisplay = ({ filteredData }) => {
  const [show, setShow] = useState(false);


  //extracting the root domain here
  //if there is a subdomain
  if (arrLen > 2) {
      domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
      //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
      if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
          //this is using a ccTLD
          domain = splitArr[arrLen - 3] + '.' + domain;
      }
  }
  return domain;
}

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
        </Row>
        <Row className="row justify-content-around">
          <Col>
            <Button size="sm" variant="warning" className="mr-2">
              Open to relocation
            </Button>
          </Col>
          <Col>
            <Button variant="btn btn-success" size="sm">
              Open to remote
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col>

           {graduate.full_time ? "Full Time" : ""}
            {graduate.part_time ?"Part Time" : ""}
           {graduate.contract ? "Contract" :""}
           {graduate.temp ? "Temp" : ""}
          </Col>
        </Row>

        <p className="font-italic">Languages: {graduate.languages}</p>
        <hr />
        <Container className="justify-content-center">
          <Row className="rows">
            {" "}
            <hr />
            <Col xs={6} md={4} className="col-xs-6 mr-5 mb-3">
              <i class="fab fa-linkedin fa-2x"></i>

              <a
                className="ml-2"
                style={{ fontSize: "65%" }}
                target="_blank"
                rel="noreferrer"
                href={graduate.linkedin}
              >

                linkedIn
              </a>
            </Col>
           <Col className="col-xs-4 ">
              <i class="fas fa-globe fa-2x"></i>

              <a
                className="ml-2"
                style={{ fontSize: "70%" }}
                href={graduate.website}
              >
                {graduate.website}

              </a>
            </Col>
          </Row>
          <Row className="rows">
            <hr />
        <Col xs={6} md={4} className="columns mr-5">
              <i class="fas fa-file-csv fa-2x"></i>

              <a
                className="ml-2"
                style={{ fontSize: "80%" }}
                href={graduate.resume}
              >
                cv {graduate.resume}

              </a>
            </Col>
        <Col className="columns">
              <i class="fab fa-github fa-2x"></i>

              <a
                className="ml-2"
                style={{ fontSize: "70%" }}
                href={graduate.github}
              >
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
              <button type="button" className="btn btn-primary btn-sm">
                Show more
              </button>
            }
            less={
              <button type="button" className="btn btn-primary btn-sm">
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
          <Row>
            <Button activeKey={window.location.pathname}>
              <LinkContainer to="/ContactForm">
                <Nav.Link>Email Enquiries</Nav.Link>
              </LinkContainer>
            </Button>
            {/* <Button>
              <Link to="/ContactForm">Send Email to Enquire</Link>
            </Button> */}
          </Row>

          

        </Container>
      </Modal.Body>
    </Modal.Dialog>
  );
};
export default GraduateInformationDisplay;
