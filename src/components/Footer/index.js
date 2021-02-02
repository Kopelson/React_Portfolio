import React from "react";
import "./style.css";
import instagram from "../../images/instagram.jpg";
import facebook from "../../images/facebook.jpg";
import linkedin from "../../images/linkedin.jpg";
import youtube from "../../images/youtube.jpg";
import email from "../../images/email.jpg";

function Footer() {
  return (
    <footer className="fixed-bottom navbar navbar-light bg-light">
       {/* <!-- Copyright --> */}
                <small>© 2020 Kenneth Kopelson.</small>  
                {/* <!-- link to instagram --> */}
            <a href="http://www.instagram.com/kenjamink" target="_blank" rel="noreferrer" >
                <img src={instagram} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            {/* <!-- link to facebook --> */}
            <a href="http://www.facebook.com/kenj.kop" target="_blank" rel="noreferrer" >
                <img src={facebook} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            {/* <!-- link to linkedin --> */}
            <a href="http://www.linkedin.com/in/kennethkopelson" target="_blank" rel="noreferrer" >
                <img src={linkedin} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            {/* <!-- link to youtube --> */}
            <a href="http://www.youtube.com/channel/UCje8OyZsjFirdL_n3rIUbNQ/" target="_blank" rel="noreferrer" >
                <img src={youtube} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            {/* <!-- link to email --> */}
            <a href="mailto:kennethkopelson@gmail.com" target="_blank" rel="noreferrer" >
                <img src={email} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
    </footer>
  );
}

export default Footer;
