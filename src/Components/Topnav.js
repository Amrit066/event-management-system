import './Topnav.css';
import kodo from '../images/ks.png';
import tecb from '../images/tecb.png';

export default function Navbar(){
    return(
        <div className="top-nav">
            <div className="container">
                <div className="image content">
                    <img src={tecb} alt="logo"/>
                </div>
                <div className="para content"><span>TECB&nbsp;</span>in collaboration with <span>&nbsp;KODO SHINOBI</span></div>
                <div className="image content">
                    <img src={kodo} alt="logo"/>
                </div>
            </div>
        </div>
    );
}