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
const Search = ({ value, onChange, children }) => (
  <form>
    {children}:
    <input type="text" value={value} onChange={onChange} />
  </form>
);
export default Search;
