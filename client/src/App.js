import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./components/pages/Home";
import GraduateList from "./components/graduates/GraduateList";
// import GraduateProfile from "./components/graduates/GraduateProfile";
import GraduateAdd from "./components/graduates/GraduateAdd";
import GraduateEdit from "./components/graduates/GraduateEdit";
import PreviewProfile from "./components/graduates/PreviewProfile";
import LoginForm from "./components/pages/LoginForm";
// import GraduateEdit from "./components/graduates/GraduateEdit";
import GraduateInfo from "../src/components/graduates/GraduateInfo";
// import Logo
import logo from "./images/logo.png";
// import HomePage from "./components/graduates/GraduateHomePage";
import GraduateInformationDisplay from "././components/graduates/GraduateInformationDisplay";
import NotFound from "./components/pages/NotFound";
import ContactForm from "./components/pages/ContactForm";

function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <div>
          <Main />
        </div>
      </Router>
    </div>
  );
}

const Navigation = () => {
  return (

    <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            {" "}
            <img
              className="logo bg-light rounded"
              src={logo}
              alt="header-logo"
              style={{ width: "8rem" }}
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={window.location.pathname} className="ml-auto">
            <LinkContainer to="/LoginForm">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/LoginForm" component={LoginForm} />
      <Route exact path="/graduates" component={GraduateList} />
      <Route exact path="/graduates/new" component={GraduateAdd} />
      <Route exact path="/graduates/:_id" component={PreviewProfile} />


      <Route exact path="/graduates/:_id/edit" component={GraduateEdit} />
      <Route exact path="/graduates/:_id" component={GraduateInfo} />

      <Route
        exact
        path="/graduates/:_id/profile"
        component={GraduateInformationDisplay}
      />
      {/* <Route exact path="/graduates/:_id/edit" component={GraduateEdit} /> */}
      <Route>
        <NotFound />
      </Route>
      <Route>
        <ContactForm />
      </Route>

    </Switch>
  );
};

export default App;
