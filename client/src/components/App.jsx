import React from "react";
import PropTypes from "prop-types";
import source from "../sources/list";

//map function. It enables you to iterate over your list of items to display them.
class App extends React.Component {
  constructor(props) {
    super(props);
    // The state is bound to the class by using the this object.
    // Thus you can access the local state in your whole component.
    this.state = { list: source };
  }

  // 1. Every time you change your component state, the render() method of your component will run again.
  // 2. Don’t mutate the state directly. You have to use a method called setState() to modify your state.
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.list.map(item => {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
