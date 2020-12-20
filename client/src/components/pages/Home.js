
import React, { useState } from "react";
import "../../bootstrap.min.css";
import "../../index.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


const Home = () => {

  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [currentQuote, setCurrentQuote] = useState();
  const getRandIndex = arr => Math.floor(Math.random() * arr.length);

  /**
   * Select a quote at random and remove from the current list of
   * selectable quotes, reducing the array length by 1
   */

  const initialState = {
    full_time: false,
    part_time: false,
    willing_relocate: false,
    willing_remote: false,
    internship: false,
    contract: false,
    editVisibles: {},
  };
  const [data, setData] = useState([]);
  const [checkBoxState, setCheckboxState] = useState(initialState);
  const {
    full_time,
    part_time,
    willing_relocate,
    willing_remote,
    contract,
    internship,
  } = checkBoxState;

  let filteredData = data;
  let languageData = data;

  useEffect(() => {
    fetch(`http://localhost:3001/api/graduates`)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleLocation = (event) => {
    setLocation(event.target.value);
    console.log(location);

    console.log(filteredData);
  };

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
    console.log(language);

    console.log(languageData);
  };

  const handleCheckBox = (event) => {
    setCheckboxState({
      ...checkBoxState,
      [event.target.name]: !checkBoxState[event.target.name],
    });
  };

  const randomShuffle = shuffleArray(filteredData);

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  filteredData = data
    .filter((loc) =>
      loc.current_location.toLowerCase().includes(location.toLowerCase()),
    )
    .filter((lang) =>
      lang.languages.toLowerCase().includes(language.toLowerCase()),
    )
    .filter((item) =>
      !!checkBoxState.full_time ? item.full_time === true : true,
    )
    .filter((item) =>
      !!checkBoxState.part_time ? item.part_time === true : true,
    )
    .filter((item) =>
      !!checkBoxState.willing_relocate ? item.willing_relocate === true : true,
    )
    .filter((item) =>
      !!checkBoxState.willing_remote ? item.willing_remote === true : true,
    )
    .filter((item) =>
      !!checkBoxState.internship ? item.internship === true : true,
    )
    .filter((item) =>
      !!checkBoxState.contract ? item.contract === true : true,
    );

  console.log(filteredData);
  const randomShuffle = shuffleArray(filteredData);

//see if it works
// useEffect(() => {
//   const i = setInterval(() => {
//      setData(([first, ...rest]) => [...rest, first]);
//   }, 1000);

//   return () => clearInterval(i);
// }, []);
// console.log(data);
// console.log(currentQuote);


  return (
    <div className="container-fluid navbar-expand-lg">
      {/* <div className="card-header container-fluid">
        <img
          className="logo bg-light rounded"
          src={logo}
          alt="header-logo"
          style={{ width: "5rem" }}
        />
        <div className="d-flex justify-content-end">
          <h6 className="mr-4">CYF Login</h6>
          <h6>Student Login</h6>
        </div>
      </div> */}

      <div className="container">
        <h4 className="display-3">Graduates Directory</h4>
        <p>
          Our amazing and talented graduates are looking for new opportunities.
          Check out our graduate directory to see if they may be right fit for
          you
        </p>
        <div className="container ">
          <div className="form-row">
            <div className="col-3">
              <div class="form-group">
                <input
                  class="form-control mr-sm-2"
                  type="text"
                  name="Location"
                  value={location}
                  onChange={handleLocation}
                  placeholder="Location"
                  aria-label="Search"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control mr-sm-2"
                  type="text"
                  placeholder="Language"
                  aria-label="Search"
                  value={language}
                  onChange={handleLanguage}
                />
              </div>
            </div>
            <div className="col-8 ml-4">
              <div className="form-col">
                <label class="checkbox-inline mr-3">
                  <input
                    type="checkbox"
                    name="full_time"
                    value={full_time}
                    onChange={handleCheckBox}
                  />
                  Full-Time
                </label>
                <label class="checkbox-inline mr-3">
                  <input
                    class="form-control mr-sm-2"
                    type="text"
                    name="Location"
                    value={location}
                    onChange={handleLocation}
                    placeholder="Location"
                    aria-label="Search"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control mr-sm-2"
                    type="text"
                    placeholder="Language"
                    aria-label="Search"
                    value={language}
                    onChange={handleLanguage}
                  />
                </div>
              </div>
              <div className="col-8 ml-4">
                <div className="form-col">
                  <label class="checkbox-inline mr-3">
                    <input
                      type="checkbox"
                      name="full_time"
                      value={full_time}
                      onChange={handleCheckBox}
                    />
                    Full-Time
                  </label>
                  <label class="checkbox-inline mr-3">
                    <input
                      type="checkbox"
                      name="part_time"
                      value={part_time}
                      onChange={handleCheckBox}
                    />
                    Part-Time
                  </label>
                  <label class="checkbox-inline mr-3">
                    <input
                      type="checkbox"
                      // name="internship"
                      // value={internship}
                    />
                    Internship
                  </label>
                </div>
                <div className="form-col">
                  <label class="checkbox-inline mr-3">
                    <input
                      type="checkbox"
                      name="willing_remote"
                      value={willing_remote}
                      onChange={handleCheckBox}
                    />
                    Remote
                  </label>
                  <label class="checkbox-inline mr-3">
                    <input
                      name="willing_relocate"
                      value={willing_relocate}
                      onChange={handleCheckBox}
                      type="checkbox"
                    />
                    Relocate
                  </label>
                  <label class="checkbox-inline mr-3">
                    <input
                      name="contract"
                      value={contract}
                      type="checkbox"
                      onChange={handleCheckBox}
                    />
                    Temp/Contract
                  </label>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container d-flex justify-content-space-evenly flex-wrap">
        {randomShuffle.length > 0 &&
          randomShuffle.map((obj, _id) => {
            return (
              <div
                className="col  d-flex justify-content-space-evenly mb-5 "
                key={obj._id}
              >
                <div
                  class="row border border-dark mx -3 "
                  style={{ width: "30rem" }}
                >
                  <div className="card-body ">
                    <h4 className="float-right">
                      {
                        <Link to={`/graduates/${obj._id}/profile`}>
                          <i class="fas fa-share-square"></i>
                        </Link>
                      }
                    </h4>
                    <h5 class="card-title text-center text-info">{obj.fullname}</h5>
                    <p>Languages:{obj.languages}</p>
                    <p> HeadLine: {obj.headline}</p>
                    <hr />
                    <p class="card-text">Location:{obj.current_location}</p>

                    <div class="row justify-content-around">
                      <div class="col-6">
                        <button
                          type="button"
                          class="btn btn-warning btn-sm mr-1"
                        >
                          {" "}
                          Open to relocation
                        </button>
                      </div>
                      <div class="col-5">
                        <button
                          type="button"
                          class="btn btn-success btn-sm mr-1"
                        >
                          {" "}
                          Open to remote
                        </button>
                      </div>
                    </div>

                    <p class="card-text">{obj.full_time ? "Full Time" : ""}</p>
                    <p class="card-text">{obj.part_time ? "Part Time" : ""}</p>
                    <p class="card-text">
                      {obj.willing_relocate ? "Open to Relocate" : ""}
                    </p>
                    <p class="card-text">
                      {obj.willing_remote ? "Open to Remote" : ""}
                    </p>

                    <hr />

                    <div className="container">
                      <div class="row justify-content-around ">
                    <div class="col-4">
                          <i class="fab fa-linkedin fa-2x"></i>

                          <a
                            className="ml-2"
                            style={{ fontSize: "65%" }}
                            target="_blank"
                            rel="noreferrer"
                            href={"http://"+ obj.linkedin}
                          >LinkedIn</a>
                        </div>
                     <div class="col-4 mt-1">
                          <i class="fas fa-globe fa-2x"> </i>

                          <a
                            className="ml-2"
                            style={{ fontSize: "70%" }}
                            href={"http://"+ obj.website}
                          >Website</a>
                        </div>
                      </div>

                      <div class="row justify-content-around  ">
                     <div class="col-4 ">
                          <i class="fas fa-file-csv fa-2x"></i>
                          <a className="ml-2" style={{ fontSize: "80%" }} href={"http://"+ obj.upload_cv} >cv</a>

                        </div>
                       <div class="col-4 mt-1">
                          <i class="fab fa-github fa-2x"></i>
                          <a className="ml-2" style={{ fontSize: "70%" }} href={"http://"+ obj.github}> GitHub</a>

                        </div>
                      </div>
                    </div>

                    <hr />
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
                      width={350}
                    >

                      <p class="card-subtitle mb-2 text-dark">
                        {obj.resume_textarea}
                      </p>
                    </ShowMoreText>
                  </div>
                </div>
              );
            })}
        </div>
      </div> */}
      {/* <Footer /> */}

      <div className="container">
        <div className="row mb-2">
          {filteredData.length > 0 &&
            filteredData.map((graduate, _id) => {
              return (
                <div className="col-md-6 card-text-left border-success">
                  <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
                    <div className="col p-4 d-flex flex-column">
                      <strong className="d-inline-block mb-2 text-success">
                        <h4 className="float-right">
                          {
                            <Link to={`/graduates/${graduate._id}/profile`}>
                              <i class="fas fa-share-square"></i>
                            </Link>
                          }
                        </h4>
                        <h3>{graduate.fullname}</h3>
                      </strong>
                      <h3 className="mb-0">{graduate.headline}</h3>
                      <div className="mb-1 text-muted">
                        {graduate.current_location}
                      </div>
                      <div className="mb-1 text-muted">
                        Languages : {graduate.languages}
                      </div>
                      <div className="row justify-content-around">
                        <p>
                          {graduate.willing_remote ? (
                            <button type="button" className="btn btn-success">
                              Can Work Remote
                            </button>
                          ) : (
                            <button type="button" className="btn btn-danger">
                              Can't Work Remote
                            </button>
                          )}
                        </p>
                        <p>
                          {graduate.willing_relocate ? (
                            <button type="button" className="btn btn-success">
                              Can Relocate
                            </button>
                          ) : (
                            <button type="button" className="btn btn-danger">
                              Can't Relocate
                            </button>
                          )}
                        </p>
                      </div>

                      <div className="row justify-content-around">
                        <p class="card-text">
                          {graduate.full_time ? "Full Time" : ""}
                        </p>
                        <p class="card-text">
                          {graduate.part_time ? "Part Time" : ""}
                        </p>
                        <p class="card-text">
                          {graduate.willing_relocate ? "Open to Relocate" : ""}
                        </p>
                        <p class="card-text">
                          {graduate.willing_remote ? "Open to Remote" : ""}
                        </p>
                      </div>
                      <hr />
                      <div className="container">
                        <div class="row justify-content-around ">
                          <div class="col-4">
                            <i class="fab fa-linkedin fa-2x"></i>

                            <Link
                              className="ml-2"
                              style={{ fontSize: "65%" }}
                              target="_blank"
                              rel="noreferrer"
                              href={""}
                            >
                              LinkedIn
                            </Link>
                          </div>
                          <div class="col-4 mt-1">
                            <i class="fas fa-globe fa-2x"> </i>

                            <Link
                              className="ml-2"
                              style={{ fontSize: "70%" }}
                              to={graduate.linkedin}
                            >
                              Website
                            </Link>
                          </div>
                        </div>

                        <div class="row justify-content-around  ">
                          <div class="col-4 ">
                            <i class="fas fa-file-csv fa-2x"></i>
                            <Link className="ml-2" style={{ fontSize: "80%" }}>
                              cv
                            </Link>
                          </div>
                          <div class="col-4 mt-1">
                            <i class="fab fa-github fa-2x"></i>
                            <Link className="ml-2" style={{ fontSize: "70%" }}>
                              {" "}
                              GitHub
                            </Link>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <ShowMoreText
                          lines={3}
                          more={
                            <Button
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              Show more
                            </Button>
                          }
                          less={
                            <button
                              type="button"
                              class="btn btn-primary btn-sm float-right"
                            >
                              Show less
                            </button>
                          }
                          className="content-css"
                          anchorClass="my-anchor-css-class"
                          onClick={executeOnClick}
                          expanded={false}
                          width={350}
                        >
                          <p class="card-subtitle mb-2 text-dark">
                            {graduate.resume_textarea}
                          </p>
                        </ShowMoreText>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

// const Footer = () => {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className="text-center py-3">
//             Copyright &copy; 2020 Code Your Future
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

export default Home;
