// import "../../CSS/home.css"
import soccervid from "../../assets/IMG_3158.mp4"

export default function Video() { 
    return (
        <>
            <div className="video-container">
                <div className="video">
                    <video src={soccervid} autoPlay loop muted className="background-video" />
                    
                    <div className="welcome">
                        <h1 className="title">Anchor Academy</h1> 
                    </div>
                </div>
            </div>
        </>
    )
}