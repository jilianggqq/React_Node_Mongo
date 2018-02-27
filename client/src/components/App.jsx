import React from "react";
import source from "../sources/list";
import Search from "./Search";
import Table from "./Table";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // The state is bound to the class by using the this object.
    // Thus you can access the local state in your whole component.
    this.state = { searchTerm: "", list: source };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    console.log("onSearchChange start ...");
    this.setState({ searchTerm: event.target.value });
    console.log("state", this.state);
  }

  /*
  Basically you want to remove the item identified by the id from the list
  and store an updated list to your local state.
  Afterward, the updated list will be used in the re-running render() method to display it.
  */
  onDismiss(objId) {
    console.log(`onDismiss start ... ${objId}`);
    const list = this.state.list.filter(item => item.objectID !== objId);
    this.setState({
      list,
      searchTerm: ""
    });
    console.log("onDismiss end ...");
  }
  // 1. Every time you change your component state, the render() method of your component will run again.
  // 2. Don’t mutate the state directly. You have to use a method called setState() to modify your state.
  render() {
    /*You can use children prop to pass elements to your components from above,
    which are unknown to the component itself,
    but make it possible to compose components into each other.*/
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Search
          </Search>
        </div>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

export default App;
