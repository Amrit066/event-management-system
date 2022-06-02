import SpeakerSection  from "./SpeakerSection";
import Register from './Register';
import Events from "./Events";
import Principal from "./Principal";
import Gallery from "./Gallery";
import SocialSites from "./SocialSites";

export default function Section(){
    return(
        <>
            <SpeakerSection />
            <Register />
            <Events />
            <Principal />
            <Gallery />
            <SocialSites />
        </>
    );
}