import React from "react";
// BrowserRouter is looking at current URL, and the changes a set of components that are visible on the screen at any given time.
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => <h2>Dashboard</h2>;
const Surveynew = () => <h2>Surveynew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={Surveynew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
