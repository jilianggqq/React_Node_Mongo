import React from "react";

class Search extends React.Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <div>
        <form>
          {children} :
          <input
            type="text"
            value={value}
            onChange={event => onChange(event)}
          />
        </form>
      </div>
    );
  }
}

export default Search;
