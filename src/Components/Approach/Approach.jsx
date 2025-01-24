import "../../CSS/home.css" 
import "../Approach/Approach.scss"
import logo from "../../assets/logo.jpeg"

export default function Approach (){ 
    return ( 
        <>
        <div className="approach">
                <h1 className="title"> Our Approach</h1>
                <div className="card">
                    <div className="left">
                        <div className="description">
                            <p>                               
                            </p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>

                
                    
        </div> 
        </>
    )
}