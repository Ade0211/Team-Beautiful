// import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import Home from "./components/pages/Home";
import GraduateList from "./components/graduates/GraduateList";
// import GraduateProfile from "./components/graduates/GraduateProfile";
import GraduateAdd from "./components/graduates/GraduateAdd";
import GraduateEdit from "./components/graduates/GraduateEdit";
import PreviewProfile from "./components/graduates/PreviewProfile";

// import GraduateEdit from "./components/graduates/GraduateEdit";
import GraduateInfo from "../src/components/graduates/GraduateInfo";
// import Logo
import logo from "./components/utility/logo.png"
// import HomePage from "./components/graduates/GraduateHomePage";
import GraduateInformationDisplay from "././components/graduates/GraduateInformationDisplay";

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
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <a href="/" className="navbar-brand">
        {/* the graduate */}
        <img className="logo bg-light rounded" src={logo} alt="header-logo" style={{width: "5rem"}}/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
      {/* <div className="d-flex justify-content-end">
          <h6 className="mr-4">CYF Login</h6>
          <h6>Student Login</h6>
        </div> */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/graduates"
            >
              Graduates
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to=""
            >
              {/* CYF Login */}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to=""
            >
            Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/graduates" component={GraduateList} />
      <Route exact path="/graduates/new" component={GraduateAdd} />
      <Route exact path="/graduates/:_id" component={PreviewProfile} />


      <Route exact path="/graduates/:_id/edit" component={GraduateEdit} />
      <Route exact path="/graduates/:_id" component={GraduateInfo} />
      <Route exact path= "/graduates/:_id/profile" component= {GraduateInformationDisplay}/>



    </Switch>
  );
};

export default App;
