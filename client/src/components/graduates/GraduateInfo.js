import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GraduateInfo = (props) => {
  const [graduate, setGraduate] = useState([]);

  useEffect(
    function () {
      async function getGraduate() {
        try {
          const response = await axios.get(
            `/api/graduates/${props.match.params._id}`,
          );
          setGraduate(response.data);
        } catch (error) {
          console.log("error", error);
        }
      }
    
      getGraduate();
    },
    [props],
  );

  async function handleDelete() {
    try {
      await axios.delete(`/api/graduates/${props.match.params._id}`);
      props.history.push("/graduates");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>{graduate.fullname}</h2>
      <small>{graduate.headline}</small>
      <p>{graduate.email}</p>
      <p>{graduate.website}</p>

      <div className="btn-group">
        <Link to={`/articles/${graduate._id}/edit`} className="btn btn-primary">Edit</Link>
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        <Link to="/articles" className="btn btn-secondary">Close</Link>
      </div>
      <hr/>
    </div>
  );
};

export default GraduateInfo;