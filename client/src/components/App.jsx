import React from 'react';
import source from '../sources/list';

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
//map function. It enables you to iterate over your list of items to display them.
class App extends React.Component {
  constructor(props) {
    super(props);
    // The state is bound to the class by using the this object.
    // Thus you can access the local state in your whole component.
    this.state = { list: source, searchTerm: '' };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
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
      searchTerm: ''
    });
    console.log('onDismiss end ...');
  }

  onSearchChange(event) {
    console.log('onSearchChange start ...');
    this.setState({ searchTerm: event.target.value });
    console.log('state', this.state);
  }

  // 1. Every time you change your component state, the render() method of your component will run again.
  // 2. Don’t mutate the state directly. You have to use a method called setState() to modify your state.
  render() {
    // console.log(this.state);
    console.log('render start ...');
    console.log('this. state:', this.state);
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => {
              this.onSearchChange(event);
            }}
          />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => {
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
                    this.onDismiss(item.objectID);
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

export default App;
