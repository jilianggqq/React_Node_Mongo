import React, { Component } from "react";

// inline css. using <div style={divStyle}> way.
// const divStyle = {
//   margin: "40px",
//   border: "5px solid pink"
// };

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="left brand-logo">
              Peter Guan
            </a>
            <ul className="right">
              <li>
                <a href="#">Login with Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
