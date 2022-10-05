import React from 'react';
import "./index.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Header = () => {
 
  return(
    <header className = "nav">
    <Link to ="/"> <h1 className= "name">Chris Deng</h1></Link>
    <ul>
      <CustomLink to = "/Aboutme">About me</CustomLink>
      <CustomLink to = "/Experience">Experience</CustomLink>
      <CustomLink to = "/Projects">Projects</CustomLink>
      <CustomLink to = "/Resume">Resume</CustomLink>
    </ul>
    </header>
    );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
      <li className={isActive ? "active" : ""}> 
      <Link to = {to} {...props}>
     {children}
      </Link>
        </li>
    )
}
export default Header;