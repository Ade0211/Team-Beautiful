import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [invalidPwd, setInvalidPWd] = useState(false);
  const [loading, setLoading] = useState(false);

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
