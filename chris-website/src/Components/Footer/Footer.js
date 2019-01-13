import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({policyClick}) => {
    return (
      <div className="Footer flex">
        <div className="underLeft">

        </div>
        <div className="Footer-Content flex justify-between items-center f5 pl3">
            <div className="copyright">
                <span>Copyright &copy; {(new Date()).getFullYear().toString()} Chris Dirks</span>
                <span> | </span>
                <span className="policy-link underline pointer" onClick={() => policyClick('POLICY')}>Privacy Policy</span>
            </div>
            <div className="links">
                <a className="mr3 " href="https://github.com/Crexfu">
                <FontAwesomeIcon icon={['fab',"github"]}/> Github</a>
                <a className="mr3 " href="https://twitter.com/allthebundts?lang=en">
                <FontAwesomeIcon icon={['fab',"twitter"]}/>Twitter</a>
                <a className="mr3 " href="https://www.linkedin.com/in/chris-dirks/">
                <FontAwesomeIcon icon={['fab','linkedin-in']}/>Linkedin</a>
            </div>
        </div>
      </div>
    );
}

export default Footer;