import './Events.css'

export default function Events(){
    return(
        <div className="events">
            <div className="container">
                <div className="top-content">
                    <p>Upcoming Events</p>
                </div>
                <div className="middle-content">
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="events"/>
                        <div className="title">Smart India Hackathon</div>
                    </div>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="events"/>
                        <div className="title">Workshop</div>
                    </div>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBldmVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="events"/>
                        <div className="title">Fresher's Welcome</div>
                    </div>
                </div>
                <div className="bottom-content">
                    <button>More</button>
                </div>
            </div>
        </div>
    );
}