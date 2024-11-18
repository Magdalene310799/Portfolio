import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import mypic from '../images/mypic'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 

const Home = () => {
  return (
  <div>
    <div class="portion1">
        <div class="section1">
            <img src={mypic} alt="my profile" style={{width:'300px', height:'437px'}} class="rounded-circle"/>
        </div>
      
        <div class="section2">
            <h1 class="name">Hello, I'm MAGDALENE XAVIER FERNANDEZ</h1>
            <h2 class="designation">FRONT-END DEVELOPER</h2>
            <h2 class="description">Where Passion Meets Pixel Perfection</h2>
            <br/>
            <p class="para1">Welcome To My Portfolio</p>
            <p class="para2">I'm a passionate developer with a knack for creating innovative, elegant and impactful websites. 
              Explore my work and get to know more about my journey and skills.</p> 
    <br/><br/><br/><br/>
            <a href="https://www.facebook.com/magdalene.xavierfernandez?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> {/* Facebook Icon */}
            <span>Facebook</span> {/* Optional text */}
            </a>  
            <a href="https://www.instagram.com/magdalenexavierfernandez?igsh=MWh1bW43YnF3Y21lOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: '#C13584', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
            </a>
        </div>
    </div>
  </div>
  );
};

export default Home;
