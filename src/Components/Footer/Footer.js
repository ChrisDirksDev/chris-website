import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({policyClick}) => {
    return (
      <div className="footer flex">
        <div className="footer__underLeft">

        </div>
        <div className="footer__content flex justify-between items-center f5 pl3">
            <div className="copyright flex flex-wrap">
                <span>Copyright &copy; {(new Date()).getFullYear().toString()} Chris Dirks</span>
                <span> | </span>
                <span className="copyright__policy-link underline pointer" onClick={() => policyClick('POLICY')}>Privacy Policy</span>
            </div>
            <div className="links flex flex-wrap">
                <a className="mr3 " href="https://github.com/ChrisDirksDev">
                <FontAwesomeIcon icon={['fab',"github"]}/> Github</a>
                <a className="mr3 " href="https://www.linkedin.com/in/chris-dirks/">
                <FontAwesomeIcon icon={['fab','linkedin-in']}/> Linkedin</a>
            </div>
        </div>
      </div>
    );
}

export default Footer;