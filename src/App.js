import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import Home from './pages/Home';
import './App.css';

const About = () => {
  return <h1>About</h1>;
};

const InsideProfile = (props) => {
  return <h3>Inside Profile get  {props.match.params.name}</h3>
}

const WithRouterInfo = withRouter(InsideProfile);



const Profile = (props) => {
  return (
    <div>
      <h1>Profile {props.match.params.name}</h1>
      <WithRouterInfo />
    </div>
  );
};

class App extends Component {
  render() {
    return (<div className="App">
      <Router>
        <div className="container">
          <aside>
            <ul>
              <li><Link to={"/home"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/home/profile"}>Profile</Link></li>
            </ul>
          </aside>
          <main>
            
              <Switch>
                <Route path={'/home/profile/:name'} component={Profile} />
                <Route path={'/home'} component={Home} />
                <Route path={'/about'} component={About} />
              </Switch>
            
          </main>
        </div>
      </Router>
      </div>
    )
  }
}

export default App;
