import React from 'react';


const Header = () => {
  return(
    <header>
    <h1 className="headerSlogan">Chris Deng</h1>
    <div className="navBarButtons">
    <li><a  className="btn btn-lg btn-dark m-2 Button"  href="/">About Me</a></li>
    <li><a  className="btn btn-lg btn-dark m-2 Button"  href="/Experience">Experience</a></li>
    <li><a  className="btn btn-lg btn-dark m-2 Button"  href="/Projects">Projects</a></li>
    <li><a  className="btn btn-lg btn-dark m-2 Button"  href="/Resume">Resume</a></li>
    </div>
    </header>
    );
};


export default Header;