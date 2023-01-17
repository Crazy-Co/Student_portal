import React from "react";
import logo from "../images/logo.png";
import {
  Link,
  useMatch,
  useResolvedPath
} from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <div className="red" />
      <div className="head">
        <div>
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="buttons">
            <button>Search</button>
            <button>Log Out</button>
          </div>
        </div>
        <div className="nav">
          <ul>
            <CustomLink to="./">Dashboard</CustomLink>
            <CustomLink to="./course_reviews">Course Reviews</CustomLink>
            <CustomLink to="./feedback">Feedback</CustomLink>
          </ul>
        </div>
      </div>
    </div>
  );


  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

};

export default Header;
