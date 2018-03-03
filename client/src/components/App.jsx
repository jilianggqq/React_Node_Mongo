import React from "react";
import Search from "./Search";
import Button from "./Button";
import Table from "./Table";
import axios from "axios";
import "./App.css";
const DEFAULT_QUERY = "redux";
const DEFAULT_HPP = "5";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";
const PARAM_HPP = "hitsPerPage=";

class App extends React.Component {
  constructor(props) {
    super(props);
    // The state is bound to the class by using the this object.
    // Thus you can access the local state in your whole component.
    this.state = { searchTerm: DEFAULT_QUERY, result: null };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
  }

  setSearchTopStories(result) {
    const { hits, page } = result;
    // debugger;
    const oldhits = page ? this.state.result.hits : [];
    const updatedHits = [...oldhits, ...hits];
    this.setState({ result: { page, hits: updatedHits } });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  async fetchSearchTopStories(searchTerm, page = 0) {
    const res = await axios.get(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}\
&${PARAM_HPP}${DEFAULT_HPP}`
    );
    this.setSearchTopStories(res.data);
  }

  onSearchSubmit(event) {
    console.log("onSearchSubmit start ...");
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  }

  componentDidMount() {
    console.log("componentDidMount start ...");
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
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
    const page = (result && result.page) || 0;
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={event => this.onSearchChange(event)}
            onSubmit={this.onSearchSubmit}
          >
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
        <Button
          onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}
        >
          More
        </Button>
      </div>
    );
  }
}

export default App;
