import img1 from "../../assets/group_pic.jpeg"
import img2 from "../../assets/cone_head.jpeg"
import img3 from "../../assets/silly.jpeg"
import "../../CSS/slider.css"
import ImageSlider from "../../Components/image-slider";


const images = [
    {url: img1},
    {url: img2}, 
    {url: img3}, 

] ;

const containerStyles = {
    width: "500px",
    height: "350px",
    margin: "0 auto",
    bottom: "50%",
} ;

export default function Slider(){
    return(
        <>
        <div className="slider">
            
        <div style={containerStyles}> 
                <ImageSlider images={images}/>
            </div>
            
        </div>
        
        
        </>
    ) 
   
}