import './FooterInfo.css';
import fb from '../images/facebook.png';
import insta from '../images/instagram.png';
import li from '../images/linkedin.png';

export default function FooterInfo(){
return(
    <div className="footer-info">
        <div className="container">
            <div className="top-content">
                <div className="left-content">
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
                            <img src={li} alt="linkedin" />
                        </a>
                    </div>
                </div>
                <div className="middle-content">
                    <p className="title">Events</p>
                    <p>webinars</p>
                    <p>workshops</p>
                    <p>demo sessions</p>
                    <p>trainings</p>
                </div>
                <div className="right-content">
                    <p className="title">Courses offered</p>
                    <p>computer science and engineering</p>
                    <p>information technology</p>
                    <p>electronics and communication engineering</p>
                    <p>mechanical engineering</p>
                </div>
            </div>
            <div className="bottom-content">
                <p>Banipur College Road, Banipur, Habra 24 Parganas(North) West Bengal - 743233, Kolkata</p>
            </div>
        </div>
    </div>
);
}