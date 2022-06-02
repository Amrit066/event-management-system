import './SpeakerSection.css';
import abhay from '../images/abhay.jpg';
import abir from '../images/abir.jpg';
import deba from '../images/deba.jpeg';
import zaid from '../images/zaid.jpeg';

export default function SpeakerSection(){
    return(
        <div className="sp-section">
            <div className="container">
                <div className="top-content">
                    <p>our chief guests</p>
                </div>
                <div className="bottom-content">
                    <div className="content">
                        <div className="tc">
                            <img src={abir} alt="speaker" />
                        </div>
                        <div className="bc">
                            <p>Abir Paul</p>
                            <p>3<sup>rd&nbsp;</sup> year, CSE </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="tc">
                            <img src={zaid} alt="speaker" />
                        </div>
                        <div className="bc">
                            <p>Md Zaid Ahmed</p>
                            <p>3<sup>rd&nbsp;</sup> year, CSE </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="tc">
                            <img src={abhay} alt="speaker" />
                        </div>
                        <div className="bc">
                            <p>Abhay Singh</p>
                            <p>3<sup>rd&nbsp;</sup> year, CSE </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="tc">
                            <img src={deba} alt="speaker" />
                        </div>
                        <div className="bc">
                            <p>Debarghya Banerjee</p>
                            <p>3<sup>rd&nbsp;</sup> year, CSE </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}