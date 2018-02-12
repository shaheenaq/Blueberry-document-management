import React from "react";
import "./Footer.css";
import { SocialIcon } from 'react-social-icons';


var style = {
    backgroundColor: "#312581",
    borderTop: "1px solid #E7E7E7",
    color: "white",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}
var urls = [
  'http://jaketrent.com',
  'http://twitter.com/jaketrent',
  'http://linkedin.com/in/jaketrent',
  'http://www.pinterest.com/jaketrent/artsy-fartsy/'
];



function Footer() {
    return (
        <div>
            <div style={phantom}>
                <div style={style}>
                    Our Company - Help - Privacy 
<SocialIcon url="http://linkedin.com/in/jaketrent" />
<SocialIcon url="http://twitter.com/" />
<SocialIcon url="http://facebook.com" />


                </div>  
            </div>
        </div>
    )
}

//export default Footer




// const Footer = ({topText, bottomText}) => (
//   <footer className="footer"
    
//     style={{
//       background: '#312581',
//       color: 'white',
//       fontFamily: 'Helvetica',
//       textAlign: 'center'

//     }}
//   >
//     <div className="container-fluid">
//   	<span style={{ fontWeight: 'bold' }}>
//     	{topText}
//     </span>
//     <br />
//     {bottomText}
//     </div>
//   </footer>
// );

export default Footer;