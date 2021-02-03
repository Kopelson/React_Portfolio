import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="fixed-bottom navbar navbar-light bg-light">
       {/* <!-- Copyright --> */}
                <small>© 2020 Kenneth Kopelson.</small>  
                {/* <!-- link to instagram --> */}
            <a href="http://www.instagram.com/kenjamink" target="_blank" rel="noreferrer" >
                <img src="./images/instagram.jpg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            {/* <!-- link to facebook --> */}
            <a href="http://www.facebook.com/kenj.kop" target="_blank" rel="noreferrer" >
                <img src="./images/facebook.jpg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            {/* <!-- link to linkedin --> */}
            <a href="http://www.linkedin.com/in/kennethkopelson" target="_blank" rel="noreferrer" >
                <img src="./images/linkedin.jpg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            {/* <!-- link to youtube --> */}
            <a href="http://www.youtube.com/channel/UCje8OyZsjFirdL_n3rIUbNQ/" target="_blank" rel="noreferrer" >
                <img src="./images/youtube.jpg"width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            {/* <!-- link to email --> */}
            <a href="mailto:kennethkopelson@gmail.com" target="_blank" rel="noreferrer" >
                <img src="./images/email.jpg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
    </footer>
  );
}

export default Footer;
