import Navbar from "../../Components/Navbar/Navbar";
import "../../CSS/home.css";
import soccervid from "../../assets/IMG_3158.mp4";
import Approach from "../../Components/Approach/Approach";
// import Slider from "../../Components/Img_slider/Slider.jsx";
// import logo from "../../assets/anchor2.png"; 
import Testimony from "../../Components/Testimonies/Testimony";

export default function Home() {
    return(
        <>
            <Navbar/>
            <div className="Home-container">
                <video src={soccervid} autoPlay loop muted />
                
                <div className="welcome">
                    <h1 className="title"> Anchor Academy</h1>
                </div>

                <div className="Approach-container">
                    <Approach/>
                </div>
                

                <div className="Testimony-container">
                    <Testimony/>
                </div>
            

            </div>
            
        </>
    )
}