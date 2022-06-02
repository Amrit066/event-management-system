import './SocialSites.css';
import fb from '../images/facebook.png';
import insta from '../images/instagram.png';
import li from '../images/linkedin.png';

export default function SocialSites(){
    return(
        <div className="social-site">
            <div className="container">
                <div className="top-content">
                    reach to us
                </div>
                <div className="bottom-content">
                    <div className="icons">
                        <a href="#">
                            <img src={fb} alt="facebook" />
                        </a>
                    </div>
                    <div className="icons">
                        <a href="#">
                            <img src={insta} alt="instagram" />
                        </a>
                    </div>
                    <div className="icons">
                        <a href="#">
                            <img src={li}alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}