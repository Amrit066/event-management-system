import './Gallery.css';
import sih1 from '../images/sih-1.jpeg';
import sih2 from '../images/sih-2.jpeg';

export default function Gallery(){
    return(
        <div className="gallery">
            <div className="container">
                <div className="top-content">
                    Gallery
                </div>
                <div className="bottom-content">
                    <div className="image">
                        <img src="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/284882763_1670653286646199_7805904040947986669_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2LKJj1RRpioAX84sh2H&_nc_ht=scontent.fccu10-1.fna&oh=00_AT-fNYzonFJQOdvv3C5omKFKfYKISqug53ZpApgPDOfQ8A&oe=629CF227" alt="campus photos" />
                    </div>
                    <div className="image">
                        <img src="https://scontent.fccu10-1.fna.fbcdn.net/v/t1.6435-9/158840027_1364654117246119_2295570407498245263_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=t_12GbSZsTsAX8nS9bf&_nc_ht=scontent.fccu10-1.fna&oh=00_AT-BhJoooV7kaQDOLqAp0juzZNAYJGfMql9o1NIr8LPlFQ&oe=62BEDF72" alt="campus photos" />
                    </div>
                    <div className="image">
                        <img src={sih1} alt="campus photos" />
                    </div>
                    <div className="image">
                        <img src={sih2} alt="campus photos" />
                    </div>
                    <div className="image">
                        <img src="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/226114069_650364776365780_8166884571503590357_n.jpg?stp=c0.16.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=110474&_nc_ohc=S1Xg2_sVFTIAX-CGIX4&_nc_ht=scontent.fccu10-1.fna&oh=00_AT96WoAUDW1-CN-Wc9W9LUm5w7bURLcxH-M3LYmLxi6BrA&oe=629E48E9" alt="campus photos" />
                    </div>
                    <div className="image">
                        <img src="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/275840511_3019732998281414_5775565460399216285_n.jpg?stp=c29.0.206.206a_dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=dd9801&_nc_ohc=9KkXGAnkkfEAX8nVHHi&_nc_ht=scontent.fccu10-1.fna&oh=00_AT-XIfRPlyoMt_-na45PuvqkPxwnCJrjJEwZQJ1cwbsHHQ&oe=629DAF22" alt="campus photos" />
                    </div>
                    <div className="image">
                        <img src="https://scontent.fccu10-1.fna.fbcdn.net/v/t1.6435-9/82261636_3049517941793537_5383319832947133124_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=110474&_nc_ohc=ppj8Y8lp15kAX_5bYJy&_nc_ht=scontent.fccu10-1.fna&oh=00_AT-uQwngdxO-dpfoXnfwDckgMGe1liXXRS3yeIe2IaZmsw&oe=62C00DB9" alt="campus photos" />
                    </div>
                    <div className="image">
                        <img src="https://scontent.fccu10-1.fna.fbcdn.net/v/t1.6435-9/193922157_1182808482147518_7665052642780867559_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=ca434c&_nc_ohc=gpAF3V_F98QAX81No5Y&tn=VIBYOXwRyVT5z98Z&_nc_ht=scontent.fccu10-1.fna&oh=00_AT9ksBPMUHYgoBeO7zG3_r2Uu2fOv9jOz3S2w5SXxqU0RQ&oe=62C012CF" alt="campus photos" />
                    </div>
                    <div className="image">
                        <img src="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/275383333_10160209631484260_1740680694146703175_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-LfHHFtMUfkAX-xl68J&_nc_oc=AQkgFpndfOb9XQ-IXZKDGRxbWr5QxurGuN8cJ0sJ_c74Rm6HTYY4ItT9RTFcnAuMYtQ&_nc_ht=scontent.fccu10-1.fna&oh=00_AT8AKHrjtirFf_J9ZzNFHQAA9ClFsPo8OUOp6x9HxH-Kzw&oe=629E69A9" alt="campus photos" />
                    </div>
                    <div className="image">
                        <img src="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/275275171_1102869760289060_4392655960297152302_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TJAczlxbyP8AX-5Eiy8&_nc_ht=scontent.fccu10-1.fna&oh=00_AT9N3oDAlrffHEPpoGQ3I2Ck-epmerrA2EwZfsMe6Onesg&oe=629E9E18" alt="campus photos" />
                    </div>
                </div>
            </div>
        </div>
    );
}