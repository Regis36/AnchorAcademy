import Navbar from "../../Components/Navbar/Navbar";
import "../../CSS/home.css";
import soccervid from "../../assets/IMG_3158.mp4";
import Slider from "../../Components/Img_slider/Slider.jsx";

export default function Home() {
    return(
        <>
            <Navbar/>
            <div className="Home-container">
                <video src={soccervid} autoPlay loop muted />
                <div className="welcome">
                    
                    <h1 className="title"> Anchor Academy</h1>
                </div>

                <div className="approach">
                    <h1 className="title"> Our Approach</h1>
                    <p>We want your kids to enjoy the environment they are in, where they can learn the fundamentals of the game of soccer/football. They are to be challenged to develop his or hers full potential and to show them the way to higher skill levels. We are teaching them to use creative ways to solve game situations and to develop their technical ability and soccer IQ.
                        We emphasize value of commitment, humbleness and solidarity in pursuit of continuos improvement. We also want our players to have fun on the field and, at the end of each practice to want more.
                        Developing their characters to become good role models in the community is one of the goals of this program as well.
                    </p>
                </div>
                
                <div className="slider">
                    <Slider/>
                </div>

            </div>
            
        </>
    )
}