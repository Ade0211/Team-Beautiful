import React, { useState } from "react";
import { post } from "axios";

function GraduateAdd(props) {
  const initialState = {
    fullname: "",
    headline: "",
    current_location: "",
    languages: "",
    linkedin: "",
    upload_cv: "",
    resume_textarea: "",
    website: "",
    mobile: "",
    full_time: false,
    part_time: false,
    contract: false,
    temp: false,
    willing_relocate: false,
    willing_remote: false,
    internship: false,
  };

  const [graduate, setGraduate] = useState(initialState);

  function handleChange(event) {
    setGraduate({
      ...graduate,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!graduate.fullname || !graduate.current_location) return;
    async function postgraduate() {
      try {
        const response = await post("/api/graduates", graduate);
        props.history.push(`/graduates/${response.data._id}`);
      } catch (error) {
        console.log("error", error);
      }
    }
    postgraduate();
  }

  // function handleCancel() {
  //   props.history.push("/graduates");
  // }

  return (
    <div>
      <h1>Create Profile</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="mb-3 form-group">
                <label for="fullNameInput" className="form-label">
                  Full Name
                </label>
                <input
                  placeholder="Enter your full name"
                  className="form-control"
                  id="fullNameInput"
                  aria-describedby="emailHelp"
                  name="fullname"
                  value={graduate.fullname}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 form-group">
                <label for="headlineInput" className="form-label">
                  Headline
                </label>

                <input
                  placeholder="Enter your headline"
                  className="form-control"
                  id="headlineInput"
                  name="headline"
                  value={graduate.headline}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 form-group">
                <label for="currentLocationInput" className="form-label">
                  Current Location
                </label>

                <input
                  placeholder="Enter your city"
                  className="form-control"
                  id="currentLocationInput"
                  name="current_location"
                  value={graduate.current_location}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 form-group">
                <label for="languagesInput" className="form-label">
                  Languages
                </label>

                <input
                  placeholder="Enter your language"
                  type="text"
                  className="form-control"
                  id="languagesInput"
                  name="languages"
                  value={graduate.languages}
                  onChange={handleChange}
                />
              </div>

              <label for="workTypeInput" className="form-label">
                Work type
              </label>

              <div className="mb-3 form-group">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="contract"
                    id="fulltime"
                    value={graduate.full_time}
                    onChange={handleChange}
                  />

                  <label className="form-check-label" for="fulltime">
                    Full time
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="contract"
                    id="parttime"
                    value={graduate.part_time}
                    onChange={handleChange}
                  />

                  <label className="form-check-label" for="parttime">
                    Part time
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="contract"
                    id="contract"
                    value={graduate.contract}
                    onChange={handleChange}
                  />

                  <label className="form-check-label" for="contract">
                    Contract
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="temp"
                    id="temp"
                    value={graduate.temp}
                    onChange={handleChange}
                  />

                  <label className="form-check-label" for="temp">
                    Temp
                  </label>
                </div>

                <br />
                <br />

                <div className="custom-control-inline custom-switch">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="willingRelocate"
                    name="wiling_relocate"
                    value={graduate.willing_relocate}
                    onChange={handleChange}
                  />

                  <label className="custom-control-label" for="willingRelocate">
                    Willing to relocate
                  </label>
                </div>

                <div className="custom-control-inline custom-switch">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="openRemote"
                    name="willing_remote"
                    value={graduate.willing_remote}
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" for="openRemote">
                    Open to remote work
                  </label>
                </div>

                <div className="custom-control-inline custom-switch">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="internship"
                    name="internship"
                    value={graduate.internship}
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" for="internship">
                    Internship
                  </label>
                </div>
              </div>

              <br />

              <div className="mb-3">
                <label for="linkedIn" className="form-label">
                  LinkedIn
                </label>

                <input
                  placeholder="Enter your linkedin URL"
                  type="text"
                  className="form-control"
                  id="linkedIn"
                  name="linkedin"
                  value={graduate.linkedin}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label for="website" className="form-label">
                  Website
                </label>

                <input
                  placeholder="Enter your website URL"
                  type="text"
                  className="form-control"
                  id="website"
                  name="website"
                  value={graduate.website}
                  onChange={handleChange}
                />
              </div>

              <br />

              <div class="input-group mb-3">
                <label class="input-group-text" for="fileUpload">
                  Upload CV
                </label>

                <input
                  type="file"
                  class="form-control"
                  id="fileUpload"
                  name="upload_cv"
                  value={graduate.upload_cv}
                  onChange={handleChange}
                />
              </div>

              <br />

              <h3>Hidden Details</h3>

              <div id="emailHelp" class="form-text">
                We'll never share this information with potential Employers.
              </div>

              <br />

              <div class="mb-3">
                <label for="emailAddress" class="form-label">
                  Email address
                </label>

                <input
                  type="email"
                  class="form-control"
                  id="emailAddress"
                  aria-describedby="emailHelp"
                  name="email"
                  value={graduate.email}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="mobilePhoneInput" class="form-label">
                  Mobile Phone
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="mobilePhoneInput"
                  name="mobile"
                  value={graduate.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="col">
              <div class="mb-3">
                <label for="txtArea" class="form-label">
                  Enter Your resume details here
                </label>

                <textarea
                  class="form-control"
                  id="txtArea"
                  rows="20"
                  name="resume_textarea"
                  value={graduate.resume_textarea}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3 inline form-group">
                <button
                  type="submit"
                  class="btn btn-primary"
                  value="submit"
                  onChange={handleChange}
                >
                  Submit
                </button>
                <button type="submit" class="btn btn-primary">
                  Edit
                </button>
                <button type="reset" class="btn btn-primary">
                  Cancel
                </button>
                <button type="button" class="btn btn-primary">
                  Preview
                </button>
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="form-group">
          <label>Title</label>
          <input name="title" type="text" value={graduate.title} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea name="content" rows="5" value={graduate.content} onChange={handleChange} className="form-control" />
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div> */}
      </form>
    </div>
  );
}

export default GraduateAdd;
