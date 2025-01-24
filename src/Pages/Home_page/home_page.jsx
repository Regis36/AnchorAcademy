import Navbar from "../../Components/Navbar/Navbar";
import "../../CSS/home.css";
import soccervid from "../../assets/IMG_3158.mp4";
import Slider from "../../Components/Img_slider/Slider.jsx";
import logo from "../../assets/anchor2.png"

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
                <div className="card">
                    <div className="left">
                        <div className="description">
                            <p>    
                                Established in 2020, Anchor Academy seeks to provide personal training to the future soccer stars of tomorrow                           
                            </p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="logo">
                            {
                                <img src={logo} alt="" />
                            }
                        </div>
                    </div>
                </div>

                </div>
                
                {/* <div className="slider">
                    <Slider/>
                </div> */}

            </div>
            
        </>
    )
}