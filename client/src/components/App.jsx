import React from "react";
import Search from "./Search";
import Table from "./Table";
import axios from "axios";
import "./App.css";
const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

class App extends React.Component {
  constructor(props) {
    super(props);
    // The state is bound to the class by using the this object.
    // Thus you can access the local state in your whole component.
    this.state = { searchTerm: DEFAULT_QUERY, result: null };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({ result });
  }

  onSearchChange(event) {
    console.log("onSearchChange start ...");
    this.setState({ searchTerm: event.target.value });
    console.log("state", this.state);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    axios
      .get(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(res => {
        // console.log(res);
        this.setSearchTopStories(res.data);
      });
  }

  /*
  Basically you want to remove the item identified by the id from the result
  and store an updated result to your local state.
  Afterward, the updated result will be used in the re-running render() method to display it.
  */
  onDismiss(objId) {
    console.log(`onDismiss start ... ${objId}`);
    const updatedHits = this.state.result.hits.filter(
      item => item.objectID !== objId
    );
    this.setState({
      result: { ...this.state.result, hits: updatedHits }
    });
    console.log("onDismiss end ...");
  }
  // 1. Every time you change your component state, the render() method of your component will run again.
  // 2. Don’t mutate the state directly. You have to use a method called setState() to modify your state.
  render() {
    /*You can use children prop to pass elements to your components from above,
    which are unknown to the component itself,
    but make it possible to compose components into each other.*/
    const { searchTerm, result } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Search
          </Search>
        </div>
        {result && (
          <Table
            list={result.hits}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        )}
      </div>
    );
  }
}

export default App;
