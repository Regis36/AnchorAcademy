import "../../CSS/home.css" 
import "../Approach/Approach.scss"
import logo from "../../assets/anchor2.png"

export default function Approach (){ 
    return ( 
        <>
        <div className="approach">
                <div className="card">
                    <div className="left">
                        <h1 className="title"> Our Approach</h1>
                        <p> 
                            Established in 2020, Anchor Academy seeks to provide young athletes with the necessary soccer skills required for their placement and success on teams at the highschool, club, and collegiate level.  
                            <br />
                            <br />
                            We make sure to take a slow and detailed approach when building up skill, making sure no steps are skipped and that our players recieve the best, in depth training out of our coaches.      
                            <br />
                            <br />
                            We seek to develop young soccer players into Independent and strong minded footballers who can take their acquired skills, confidence, and physicality along with them to the next level. 
                            <br />
                            <br /> 
                            Helping over 20 kids, Anchor Academy is always seeking new hungry and passionate talent to develop. Register now!                  
                        </p>
                    </div>

                    <div className="right">
                        <img src={logo} alt="" />
                    </div>
                </div>

                
                    
        </div> 
        </>
    )
}