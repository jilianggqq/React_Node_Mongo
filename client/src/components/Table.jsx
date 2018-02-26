import React from "react";
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
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item => {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  /*
              onClick={(function(that) {
                // this is the old way, but you need to understand that.
                return function() {
                  that.onDismiss(item.objectID);
                };
              })(this)}
              */
                  onClick={() => {
                    onDismiss(item.objectID);
                  }}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Table;
