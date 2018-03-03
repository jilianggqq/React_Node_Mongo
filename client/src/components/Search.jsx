import React from "react";
//
// class Search extends React.Component {
//   render() {
//     const { value, onChange, children } = this.props;
//     return (
//       <div>
//         <form>
//           {children} :
//           <input
//             type="text"
//             value={value}
//             onChange={event => onChange(event)}
//           />
//         </form>
//       </div>
//     );
//   }
// }
//
// export default Search;

// A rule of thumb is to use functional stateless components
// when you don’t need local state or component lifecycle methods.
const Search = ({ value, onChange, onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={value} onChange={onChange} />
    <button type="submit">{children}</button>
  </form>
);
export default Search;
