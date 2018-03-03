import React from "react";
import Button from "./Button";
// searching function, return a function as a filter parameter.
/*function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
}*/
// best way
const isSearched = searchTerm => item => {
  // don't forget return!!!!
  return item.title.toLowerCase().includes(searchTerm.toLowerCase());
};
class Table extends React.Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    /*map function. It enables you to iterate over your list of items to
    display them.*/
    // debugger;
    return (
      <div className="table">
        {list.filter(isSearched(pattern)).map(item => {
          return (
            <div key={item.objectID} className="table-row">
              <span style={{ width: "40%" }}>
                <a href={item.url}>{item.title}</a>
              </span>
              <span style={{ width: "30%" }}>{item.author}</span>
              <span style={{ width: "10%" }}>{item.num_comments}</span>
              <span style={{ width: "10%" }}>{item.points}</span>
              <span style={{ width: "10%" }}>
                <Button
                  onClick={() => onDismiss(item.objectID)}
                  className="button-inline"
                >
                  Dismiss
                </Button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Table;
