import React from 'react';
import './Footer.css';

const Footer = ({policyClick}) => {
    return (
      <div className="Footer flex">
        <div className="underLeft">

        </div>
        <div className="Footer-Content flex justify-between items-center f5 pl3">
            <div className="copyright">
                <span>Copyright &copy; {(new Date()).getFullYear().toString()} Chris Dirks</span>
                <span> | </span>
                <span className="underline pointer" onClick={() => policyClick()}>Privacy Policy</span>
            </div>
            <div className="links">
                <a href="https://github.com/Crexfu">Github</a>
                <a href="https://twitter.com/allthebundts?lang=en">Twitter</a>
                <a href="https://www.linkedin.com/in/chris-dirks/">Linkedin</a>
            </div>
        </div>
      </div>
    );
}

export default Footer;