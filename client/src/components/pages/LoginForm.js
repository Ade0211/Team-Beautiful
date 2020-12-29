import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";

import {
  Container,
  Form,
  InputGroup,
  Card,
  FormControl,
  Button,
  Spinner,
} from "react-bootstrap";

export default function LoginForm() {
  const [newGoogleToken, setNewGoogleToken] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [invalidPwd, setInvalidPWd] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const responseSuccessGoogle = (response) => {
    console.log("[Login Success] currentUser:", response.profileObj);
    var id_token = response.getAuthResponse().id_token;
    setNewGoogleToken(id_token);
    console.log(response);
    console.log(id_token);
    if (newGoogleToken) {
      history.push("/graduates/new");
    }
  };
  const responseErrorGoogle = (response) => {
    console.log("[Login Failed] response:", response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    console.log("sending data to the api to login", email, password);
  };
  return (
    <div>
      <Container>
        <div className=" d-flex justify-content-center  mt-4">
          {!loading ? (
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <i className="fa fa-envelope" />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="email"
                        value={email}
                        isInvalid={invalid}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => {
                          if (!email.length) {
                            setInvalid(true);
                          }
                        }}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <i className="fa fa-lock" />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="password"
                        value={password}
                        isInvalid={invalidPwd}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => {
                          if (!password.length) setInvalidPWd(true);
                        }}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Button block type="submit">
                    Login
                  </Button>
                </Form>
                <GoogleLogin
                  clientId="286008631946-je41omarf0pjv5s3aaakt095bv98vnl1.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={responseSuccessGoogle}
                  onFailure={responseErrorGoogle}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                />
              </Card.Body>
            </Card>
          ) : (
            <Spinner animation="border" title="Please Wait"></Spinner>
          )}
        </div>
      </Container>
    </div>
  );
}
