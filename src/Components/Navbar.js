import './Navbar.css';

export default function Navbar(){
    return(
        <div className="nav">
            <div className="container">
                <div className="left-content content">
                    <ul>
                        <li>
                            <a href="#" className="active">Home</a>
                        </li>
                        <li>
                            <a href="#" >About</a>
                        </li>
                        <li>
                            <a href="#" >Events</a>
                        </li>
                    </ul>
                </div>
                <div className="right-content content">
                    <button>Register</button>
                </div>
            </div>
        </div>
    );
}