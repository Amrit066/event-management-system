import Navbar from './Navbar';
import Topnav from './Topnav';
import './Header.css';

export default function Header(){
    return(
        <div className="header">
            <Topnav />
            <Navbar />
        </div>
    );
}