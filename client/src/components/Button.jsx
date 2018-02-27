import React from "react";

// class Button extends React.Component {
//   render() {
//     const { onClick, className = "", children } = this.props;
//     return (
//       <button type="button" onClick={onClick} className={className}>
//         {children}
//       </button>
//     );
//   }
// }

// There is no lifecycle method and no state. we can refactor it to functional stateless component.
const Button = ({ onClick, className = "", children = "do something" }) => (
  <button type="button" onClick={onClick} className={className}>
    {children}
  </button>
);

export default Button;
